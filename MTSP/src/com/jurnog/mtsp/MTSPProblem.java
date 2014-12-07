package com.jurnog.mtsp;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Locale;
import java.util.Scanner;

import com.jurnog.mtsp.beealgorithm.ScoutBee;
import com.jurnog.mtsp.utilities.InvalidInputException;

public class MTSPProblem {
	private double[][] costMatrix;
	private double salesmanDispatchCost;
	private int dimensions;
	protected int maxSalesmanNumber;
	protected double maxSalesmanRouteLength;
	
	public double[][] getCostMatrix() {
		return costMatrix;
	}

	public void setCostMatrix(double[][] costMatrix) {
		this.costMatrix = costMatrix;
	}

	public double getSalesmanDispatchCost() {
		return salesmanDispatchCost;
	}

	public void setSalesmanDispatchCost(double salesmanDispatchCost) {
		this.salesmanDispatchCost = salesmanDispatchCost;
	}

	public int getMaxSalesmanNumber() {
		return maxSalesmanNumber;
	}

	public void setMaxSalesmanNumber(int maxSalesmanNumber) {
		this.maxSalesmanNumber = maxSalesmanNumber;
	}

	public double getMaxSalesmanRouteLength() {
		return maxSalesmanRouteLength;
	}

	public void setMaxSalesmanRouteLength(double maxSalesmanRouteLength) {
		this.maxSalesmanRouteLength = maxSalesmanRouteLength;
	}
	
	public int getDimensions() {
		return dimensions;
	}

	public void setDimensions(int dimensions) {
		this.dimensions = dimensions;
	}
	 
	
	public void loadProblemDataFromFile(String path){
		File src;
		Scanner scanner;
		try {
			src = new File(path);
			scanner = new Scanner(src);	
			parseProblemData(scanner);
			scanner.close();
		} catch (FileNotFoundException fnfe){
			fnfe.printStackTrace();
		} catch (InvalidInputException e) {
			e.printStackTrace();
		} 
	}
	
	private void parseProblemData(Scanner scanner) throws InvalidInputException{
		scanner.useLocale(Locale.UK);
		
		if(scanner.hasNextInt()){
			dimensions = scanner.nextInt();
//			System.out.println("Parsed dim: "+dimensions);
		}
		
		if(dimensions >= 2){
			costMatrix = new double[dimensions][dimensions];
			for(int currentRow = 0; currentRow < dimensions; currentRow++){
				for(int currentColumn = 0; currentColumn < dimensions; currentColumn++){
//					System.out.println("Row: "+currentRow+" Column: "+currentColumn);
					if(scanner.hasNextDouble()){
						double value = scanner.nextDouble();
						costMatrix[currentRow][currentColumn] = value;
//						System.out.println(value);
					} else {
						throw new InvalidInputException("Unexpected end of costs matrix");
					}
				}
			}
		}
		
		if(scanner.hasNextDouble()){
			salesmanDispatchCost = scanner.nextDouble();
		} else {
			throw new InvalidInputException("Could not find salesman dispatch cost");
		}
		if(scanner.hasNextDouble()){
			maxSalesmanRouteLength = scanner.nextDouble();
		} else {
			throw new InvalidInputException("Could not find maximum route per salesman length");
		}
		
		if(scanner.hasNextInt()){
			maxSalesmanNumber = scanner.nextInt();
		} else {
			throw new InvalidInputException("Could not find maximum number of salesman");
		}
	}

	public void loadProblemDataFromJSON(String jsonData){
		
	}
}
