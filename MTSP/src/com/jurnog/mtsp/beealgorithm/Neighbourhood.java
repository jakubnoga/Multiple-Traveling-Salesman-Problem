package com.jurnog.mtsp.beealgorithm;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map.Entry;
import java.util.Vector;

public class Neighbourhood {
	protected int[][] transitionMatrix;
	protected Vector<Integer> route;
	protected int dimensions;
	protected HashMap<Integer, Boolean> visitedTowns;
	
	public Neighbourhood(int[][] transitionMatrix){
		this.transitionMatrix = transitionMatrix;
		route = new Vector<Integer>();
		dimensions = this.transitionMatrix[0].length;
		
		visitedTowns = new HashMap<Integer,Boolean>();
		for(int townNumber = 0; townNumber < dimensions; townNumber++){
			visitedTowns.put(townNumber,false);
		}
		
		transitionMatrixToRoute();		
	}

	protected void transitionMatrixToRoute() {
	
		int row = 0;
		int column = 0;
		route.add(0);
		
		while(!allTownsVisited()){
			if(transitionMatrix[row][column] != 1 || (transitionMatrix[row][column] == 1 && visitedTowns.get(column) && column != 0)){
				column++;
			} else {
//				System.out.println(column);
				route.add(column);
				visitedTowns.put(column, true);
				row = column;
				column = 0;
			}
		}
//		System.out.println(route.toString());		
	}
	
	private boolean allTownsVisited(){
		for(Entry<Integer, Boolean> ent : visitedTowns.entrySet()){
			if(!ent.getValue() && ent.getKey() != 0){
				return false;
			}
		}		
		return true;
	}

	public int[][] getTransitionMatrix() {
		return transitionMatrix;
	}

	public void setTransitionMatrix(int[][] transitionMatrix) {
		this.transitionMatrix = transitionMatrix;
	}

	public Vector<Integer> getRoute() {
		return route;
	}

	public void setRoute(Vector<Integer> route) {
		this.route = route;
	}
	
	@Override
	public boolean equals(Object obj) {
		return Arrays.deepEquals(this.transitionMatrix, ((Neighbourhood)obj).transitionMatrix);
	}
}
