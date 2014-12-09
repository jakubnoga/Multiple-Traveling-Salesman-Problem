package com.jurnog.mtsp.beealgorithm;

import java.util.Arrays;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;
import java.util.Vector;

public class WorkerBee extends Bee {
	protected Neighbourhood hood;
	protected int normValue = -1;
	protected ExplorationMethod method = null;
	
	public enum ExplorationMethod {
		Permutation,
		Insertion
	}
	
	public WorkerBee(Neighbourhood hood){
		super();
		this.hood = hood;
	}

	@Override
	public int[][] call() throws Exception {
		if(normValue > 0 && method != null){
			Vector<Integer> outputRoute = new Vector<Integer>();
			switch (method) {
			case Insertion:
				outputRoute = insertion();
				break;
			case Permutation:
				outputRoute = permutation();
				break;
			default:
				break;			
			}
			return routeToTransitionMatrix(outputRoute);
		}
		return null;
	}

	private int[][] routeToTransitionMatrix(Vector<Integer> route) {
		int dim = hood.getTransitionMatrix()[0].length;
		
		int[][] transitionMatrix = new int[dim][dim];
		for(int i = 0; i < route.size()-1; i++){
			int src = route.get(i);
			int dest = route.get(i+1);
			transitionMatrix[src][dest] = 1;
		}
		
		return transitionMatrix;
	}

	private Vector<Integer> permutation() {	
//		System.out.println("Permuting..");
		Vector<Integer> originalRoute = hood.getRoute();
		int routeLength = originalRoute.size();
//		System.out.println(routeLength);
		
		
		int startIndex = getRandomInRange(1, routeLength-(normValue+1));
//		System.out.println("Start: " + startIndex);
		
		List<Integer> subRoute = new LinkedList<Integer>();
		for(int dest : originalRoute.subList(startIndex, startIndex+normValue)){
			subRoute.add(dest);
		}
//		System.out.println(subRoute.size());
		
		Collections.shuffle(subRoute);
		
		Vector<Integer> outputRoute = new Vector<Integer>();
		
		for(int i = 0; i < startIndex; i++){
			outputRoute.add(originalRoute.get(i));			
		}
		
		for(int i = 0; i < normValue; i++){
			outputRoute.add(subRoute.get(i));
		}
		
		for(int i = startIndex + normValue; i < originalRoute.size(); i++){
			outputRoute.add(originalRoute.get(i));	
		}
		
//		System.out.println(outputRoute + " "+ originalRoute + " " + outputRoute.size() + " " + startIndex);
				
		return outputRoute;
	}

	private Vector<Integer> insertion() {
		// TODO Auto-generated method stub
		return null;
	}

	public void setNormValue(int normValue) {
		this.normValue = normValue;
	}

	public void setMethod(ExplorationMethod method) {
		this.method = method;
	}

}
