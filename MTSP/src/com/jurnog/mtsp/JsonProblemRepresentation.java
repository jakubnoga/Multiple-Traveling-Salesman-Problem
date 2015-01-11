package com.jurnog.mtsp;

public class JsonProblemRepresentation {
	protected int iterations;
	protected int bees;
	protected int normValue;
	protected double[] distanceMatrix;
	protected int salesmen;
	protected double salesmanCost;
	protected double salesmanDistance;
	protected int neighbourhoodsFrequency;
	protected int randomSolutions;
	protected int neighbourhoods;
	protected String tsplib;	
	
	public JsonProblemRepresentation(int iterations, int bees, int normValue,
			double[] distanceMatrix, int salesmen, double salesmanCost,
			double salesmanDistance, int neighbourhoodsFrequency,
			int randomSolutions, int neighbourhoods, String tsplib) {
		super();
		this.iterations = iterations;
		this.bees = bees;
		this.normValue = normValue;
		this.distanceMatrix = distanceMatrix;
		this.salesmen = salesmen;
		this.salesmanCost = salesmanCost;
		this.salesmanDistance = salesmanDistance;
		this.neighbourhoodsFrequency = neighbourhoodsFrequency;
		this.randomSolutions = randomSolutions;
		this.neighbourhoods = neighbourhoods;
		this.tsplib = tsplib;
	}
	
	public int getIterations() {
		return iterations;
	}
	public void setIterations(int iterations) {
		this.iterations = iterations;
	}
	public int getBees() {
		return bees;
	}
	public void setBees(int bees) {
		this.bees = bees;
	}
	public int getNormValue() {
		return normValue;
	}
	public void setNormValue(int normValue) {
		this.normValue = normValue;
	}
	public double[] getDistanceMatrix() {
		return distanceMatrix;
	}
	public void setDistanceMatrix(double[] distanceMatrix) {
		this.distanceMatrix = distanceMatrix;
	}
	public int getSalesmen() {
		return salesmen;
	}
	public void setSalesmen(int salesmen) {
		this.salesmen = salesmen;
	}
	public double getSalesmanCost() {
		return salesmanCost;
	}
	public void setSalesmanCost(double salesmanCost) {
		this.salesmanCost = salesmanCost;
	}
	public double getSalesmanDistance() {
		return salesmanDistance;
	}
	public void setSalesmanDistance(double salesmanDistance) {
		this.salesmanDistance = salesmanDistance;
	}
	public int getNeighbourhoodsFrequency() {
		return neighbourhoodsFrequency;
	}
	public void setNeighbourhoodsFrequency(int neighbourhoodsFrequency) {
		this.neighbourhoodsFrequency = neighbourhoodsFrequency;
	}
	public int getRandomSolutions() {
		return randomSolutions;
	}
	public void setRandomSolutions(int randomSolutions) {
		this.randomSolutions = randomSolutions;
	}
	public int getNeighbourhoods() {
		return neighbourhoods;
	}
	public void setNeighbourhoods(int neighbourhoods) {
		this.neighbourhoods = neighbourhoods;
	}
	public String getTsplib() {
		return tsplib;
	}
	public void setTsplib(String tsplib) {
		this.tsplib = tsplib;
	}

}
