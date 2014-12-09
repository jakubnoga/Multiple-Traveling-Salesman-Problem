package com.jurnog.mtsp.beealgorithm;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map.Entry;
import java.util.Properties;
import java.util.Vector;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.concurrent.TimeUnit;

import com.jurnog.mtsp.MTSPProblem;
import com.jurnog.mtsp.beealgorithm.WorkerBee.ExplorationMethod;
import com.jurnog.mtsp.utilities.NeighbourhoodComparator;

public class BeeHive {
	protected ExecutorService beePool;
	protected MTSPProblem problem;
	protected HashMap<Neighbourhood, Double> neighbourhoods;
	protected LinkedHashMap<Neighbourhood, Double> eliteNeighbourhoods;
	
	protected int scoutBeesNumber;
	protected int eliteNeighbourhoodNumber;
	protected int neighbourhoodNumber;
	protected int beePerNeighbourhood;
	protected int beePerEliteNeighbourhood;
	protected int interations;	
	
	public BeeHive(){
		problem = new MTSPProblem();
		beePool = Executors.newCachedThreadPool();
		neighbourhoods = new HashMap<Neighbourhood, Double>();
		eliteNeighbourhoods = new LinkedHashMap<Neighbourhood, Double>();
	}
	
	public void problemFromFile(String path){
		problem.loadProblemDataFromFile(path);
	}
	
	public void problemFromJson(String json){
		problem.loadProblemDataFromJSON(json);
	}
	
	protected double checkValue(Neighbourhood hood){
		double value = 0.0;
		
		double[][] costs = problem.getCostMatrix();
		int[][] transitionMatrix = hood.getTransitionMatrix();
		
		for(int row = 0; row < problem.getDimensions(); row++){
			for(int column = 0; column < problem.getDimensions(); column++){
				value += costs[row][column]*transitionMatrix[row][column];
			}
		}
		
		return value;
	}
	
	protected boolean checkRestrictions(Neighbourhood hood){
		boolean acceptable = true;
		int salesmenNumber = problem.getMaxSalesmanNumber();
		double maxLength = problem.getMaxSalesmanRouteLength();		
		List<Vector<Integer>> subroutes = new LinkedList<Vector<Integer>>();
		Vector<Integer> route = hood.getRoute();
		
		int startSearch = 1;
				
		while(startSearch != route.size()-1){
//			System.out.println(startSearch);
			Vector<Integer> subroute = new Vector<Integer>();
			int subrouteEnd = route.indexOf(0, startSearch+1);
			if(subrouteEnd == -1){
				break;
			}
			for(int i = 0; i < subrouteEnd; i++){
				subroute.add(route.get(i));
			}
			subroutes.add(subroute);
			startSearch = subrouteEnd;
		}
		
//		System.out.println("sn: " + salesmenNumber);
		
		if(salesmenNumber < subroutes.size()){
			acceptable = false;
		}
		
		for(Vector<Integer> sr : subroutes){
			int len = sr.size();
			double cost = 0.0;
			for(int i = 0; i < len - 1; i++){
				int src = sr.get(i);
				int dest = sr.get(i+1);
				cost += problem.getCostMatrix()[src][dest];
			}			
			if(cost > maxLength){
				acceptable = false;
				break;
			}
			cost = 0.0;
		}		
		return acceptable;
	}
	
	public synchronized void sendScouts(){
		List<Callable<int[][]>> bees = new LinkedList<Callable<int[][]>>();
//		System.out.println(problem.getDimensions());
		for(int i = 0; i < scoutBeesNumber; i++){
			Callable<int[][]> bee = new ScoutBee(problem.getDimensions());
			bees.add(bee);
		}
		
		try {
			List<Future<int[][]>> future = beePool.invokeAll(bees);
			for(Future<int[][]> res : future){
				if(res.get()!=null){
					int[][] transitionMatrix = res.get();
					
					Neighbourhood hood = new Neighbourhood(transitionMatrix);					
					double value = checkValue(hood);
//					System.out.println(value);
					if(checkRestrictions(hood)){
						neighbourhoods.put(hood,value);
					}				
				}					
			}
		} catch (InterruptedException | ExecutionException e1) {
			close();
			e1.printStackTrace();
		} catch (Exception e){
			close();
		}
				
//		System.out.println("finished scouting");
	}
	
	public void setEliteNeighbourhoods(){
//		System.out.println("setting elite");
		List<Entry<Neighbourhood, Double>> sortedHoods = new LinkedList<Entry<Neighbourhood, Double>>(neighbourhoods.entrySet());
		
		Collections.sort(sortedHoods, new NeighbourhoodComparator());
		
		eliteNeighbourhoods = new LinkedHashMap<Neighbourhood, Double>();
		
		for(int i = 0; i < eliteNeighbourhoodNumber; i++){
			Neighbourhood key = sortedHoods.get(i).getKey();
			double value = sortedHoods.get(i).getValue();
			eliteNeighbourhoods.put(key, value);
		}
	}
	
	public void exploreEliteNeighbourhoods(int normValue){
		List<Callable<int[][]>> bees = new LinkedList<Callable<int[][]>>();
		for(Entry<Neighbourhood, Double> ent: eliteNeighbourhoods.entrySet()){
			for(int i = 0; i < beePerEliteNeighbourhood; i++){
//				System.out.println("New bee: " + ent.getValue());
				Callable<int[][]> bee = new WorkerBee(ent.getKey());
				((WorkerBee)bee).setMethod(ExplorationMethod.Permutation);
				((WorkerBee)bee).setNormValue(normValue);
				bees.add(bee);
			}
		}
		
		HashMap<Neighbourhood, Double> newHoods = new HashMap<Neighbourhood, Double>();
		
		try {			
			List<Future<int[][]>> future = beePool.invokeAll(bees);
			for(Future<int[][]> res : future){
				if(res.get()!=null){
					int[][] transitionMatrix = res.get();
					
//					System.out.println(Arrays.deepToString(transitionMatrix));
					
					Neighbourhood hood = new Neighbourhood(transitionMatrix);					
					double value = checkValue(hood);
//					System.out.println("Exploration: " + value);
					if(checkRestrictions(hood)){
						newHoods.put(hood,value);
					}				
				}
			}
//			System.out.println(newHoods.size());
			if(!newHoods.isEmpty()){
				neighbourhoods = new HashMap<Neighbourhood, Double>();
				neighbourhoods.putAll(newHoods);
			}
		} catch (InterruptedException | ExecutionException e1) {
			close();
			e1.printStackTrace();
		} 
//		catch (Exception e){
//			close();
//			e.printStackTrace();
//		}
	}

	public int getScoutBeesNumber() {
		return scoutBeesNumber;
	}

	public void setScoutBeesNumber(int scoutBeesNumber) {
		this.scoutBeesNumber = scoutBeesNumber;
	}

	public int getEliteNeighbourhoodNumber() {
		return eliteNeighbourhoodNumber;
	}

	public void setEliteNeighbourhoodNumber(int eliteNeighbourhoodNumber) {
		this.eliteNeighbourhoodNumber = eliteNeighbourhoodNumber;
	}

	public int getBeePerNeighbourhood() {
		return beePerNeighbourhood;
	}

	public void setBeePerNeighbourhood(int beePerNeighbourhood) {
		this.beePerNeighbourhood = beePerNeighbourhood;
	}

	public int getBeePerEliteNeighbourhood() {
		return beePerEliteNeighbourhood;
	}

	public void setBeePerEliteNeighbourhood(int beePerEliteNeighbourhood) {
		this.beePerEliteNeighbourhood = beePerEliteNeighbourhood;
	}

	public int getInterations() {
		return interations;
	}

	public void setInterations(int interations) {
		this.interations = interations;
	}

	public HashMap<Neighbourhood, Double> getNeighbourhoods() {
		return neighbourhoods;
	}

	public LinkedHashMap<Neighbourhood, Double> getEliteNeighbourhoods() {
		return eliteNeighbourhoods;
	}

	public void close() {
		beePool.shutdown();		
	}


	public void parsePropertiesFile() {
		String fileName = "resources/tsplib.properties";
		Properties props = new Properties();
		
		FileInputStream inp = null;
		try {
			inp = new FileInputStream(fileName);
		} catch (FileNotFoundException e1) {
			e1.printStackTrace();
		}
		 
		if (inp != null) {
			try {
				props.load(inp);
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		
		for(String key : props.stringPropertyNames()){
			System.out.println(props.getProperty(key));
		}
		problem.loadProblemFromTSPLibXY(props.getProperty("tspPath"));
		problem.setMaxSalesmanNumber(Integer.parseInt(props.getProperty("maxSalesman")));
		problem.setMaxSalesmanRouteLength(Double.parseDouble(props.getProperty("maxRoutePerSalesman")));
		problem.setSalesmanDispatchCost(Double.parseDouble(props.getProperty("salesmanDispatchCost")));
		setInterations(Integer.parseInt(props.getProperty("iterations")));
		setBeePerEliteNeighbourhood(Integer.parseInt(props.getProperty("beesPerEliteNeighbourhood")));
		setEliteNeighbourhoodNumber(Integer.parseInt(props.getProperty("numberOfEliteNeighbourhood")));
		setScoutBeesNumber(Integer.parseInt(props.getProperty("randomSolutionsNumber")));
		
	}	
}
