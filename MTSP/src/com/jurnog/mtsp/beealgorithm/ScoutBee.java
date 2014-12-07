package com.jurnog.mtsp.beealgorithm;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map.Entry;
import java.util.Random;
import java.util.concurrent.Callable;

public class ScoutBee extends Bee{
	private int dimensions;
	final int seed = 100;
	HashMap<Integer, Boolean> visitedTowns;
	
	public ScoutBee(int dim){
		dimensions = dim;
		rand = new Random(seed);
		visitedTowns = new HashMap<Integer,Boolean>();
		for(int townNumber = 0; townNumber < dimensions; townNumber++){
			visitedTowns.put(townNumber,false);
		}
	}
		
	@Override
	public int[][] call() throws Exception {

		int [][]transitionMatrix = new int[dimensions][dimensions];
		while(!allTownsVisited()){
			int nextTown = -1;
			int currentTown = stepOutOfDepot();
//			System.out.println(currentTown);
			transitionMatrix[0][currentTown] = 1;
			visitedTowns.put(currentTown, true);
			while(!allTownsVisited()){
				nextTown = takeStep();
				if(nextTown == 0){					
					break;
				} else {
					transitionMatrix[currentTown][nextTown] = 1;
					visitedTowns.put(nextTown, true);
//					System.out.println(nextTown);
				}
				currentTown = nextTown;
			}
			transitionMatrix[currentTown][0] = 1;
//			System.out.println(0);
		}		
		return transitionMatrix;
	}
	
	private boolean allTownsVisited(){
		for(Entry<Integer, Boolean> ent : visitedTowns.entrySet()){
			if(!ent.getValue() && ent.getKey() != 0){
				return false;
			}
		}		
		return true;
	}
	
	private int stepOutOfDepot(){
		int destination = getRandomInRange(1, dimensions - 1);
		while(visitedTowns.get(destination)){
			destination = getRandomInRange(1, dimensions - 1);
		}
		return destination;
	}
	
	private int takeStep(){
		int destination = getRandomInRange(0, dimensions - 1);
		while(visitedTowns.get(destination)){
			destination = getRandomInRange(0, dimensions - 1);
		}
		return destination;
	}
	
}
