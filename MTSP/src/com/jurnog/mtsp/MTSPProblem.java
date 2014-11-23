package com.jurnog.mtsp;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Locale;
import java.util.Scanner;

import com.jurnog.mtsp.beealgorithm.ScoutBee;
import com.jurnog.mtsp.utilities.InvalidInputException;

public class MTSPProblem {
	private ArrayList<ArrayList<Double>> costMatrix;
	private double salesmanDispatchCost;
	private int dimensions;
	
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
		int dim = 0;
		scanner.useLocale(Locale.UK);
		
		if(scanner.hasNextInt()){
			dim = scanner.nextInt();
//			System.out.println(dim);
		}
		
		if(dim >= 2){
			costMatrix = new ArrayList<ArrayList<Double>>(dim);
			for(int currentRow = 0; currentRow < dim; currentRow++){
				costMatrix.add(new ArrayList<Double>(dim));
				for(int currentColumn = 0; currentColumn < dim; currentColumn++){
//					System.out.println("Row: "+currentRow+" Column: "+currentColumn);
					if(scanner.hasNextDouble()){
						double value = scanner.nextDouble();
						costMatrix.get(currentRow).add(value);
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
	}

	public void loadProblemDataFromJSON(String jsonData){
		
	}
}
