package com.jurnog.mtsp.beealgorithm;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map.Entry;
import java.util.Random;
import java.util.concurrent.Callable;

import com.jurnog.mtsp.ValueChecker;

public class ScoutBee extends Bee{
	private int dimesions;
	final int seed = 100;
	
	public ScoutBee(int dim){
		dimesions = dim;
		rand = new Random(seed);		
	}
		
	@Override
	public double[][] call() throws Exception {
		HashMap<Integer, Boolean> visitedTowns = new HashMap<Integer,Boolean>();
		for(int townNumber = 0; townNumber < dimesions; townNumber++){
			visitedTowns.put(townNumber,false);
		}
		double [][]route = new double[dimesions][dimesions];
		while(!allTownsVisited(visitedTowns)){
			int nextTown = -1;
			int currentTown = stepOutOfDepot(visitedTowns);
			System.out.println(currentTown);
			route[0][currentTown] = 1;
			visitedTowns.put(currentTown, true);
			while(!allTownsVisited(visitedTowns)){
				nextTown = takeStep(visitedTowns);
				if(nextTown == 0){					
					break;
				} else {
					route[currentTown][nextTown] = 1;
					visitedTowns.put(nextTown, true);
					System.out.println(nextTown);
				}
				currentTown = nextTown;
			}
			route[currentTown][0] = 1;
			System.out.println(0);
		}		
		return route;
	}
	
	private boolean allTownsVisited(HashMap<Integer,Boolean> visitedTowns){
		for(Entry<Integer, Boolean> ent : visitedTowns.entrySet()){
			if(!ent.getValue() && ent.getKey() != 0){
				return false;
			}
		}		
		return true;
	}
	
	private int stepOutOfDepot(HashMap<Integer,Boolean> visitedTowns){
		int destination = getRandomInRange(1, dimesions - 1);
		while(visitedTowns.get(destination)){
			destination = getRandomInRange(1, dimesions - 1);
		}
		return destination;
	}
	
	private int takeStep(HashMap<Integer,Boolean> visitedTowns){
		int destination = getRandomInRange(0, dimesions - 1);
		while(visitedTowns.get(destination)){
			destination = getRandomInRange(0, dimesions - 1);
		}
		return destination;
	}
	
}
