package com.jurnog.mtsp;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Scanner;

import com.jurnog.mtsp.beealgorithm.Bee;
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
		
		if(scanner.hasNextInt()){
			dim = scanner.nextInt();
		}
		
		if(dim >= 2){
			costMatrix = new ArrayList<ArrayList<Double>>(dim);
			for(int currentRow = 0; currentRow < dim; currentRow++){
				costMatrix.add(new ArrayList<Double>(dim));
				for(int currentColumn = 0; currentColumn < dim; currentColumn++){
					if(scanner.hasNextDouble()){
						costMatrix.get(currentRow).set(currentColumn, scanner.nextDouble());
					} else {
						throw new InvalidInputException();
					}
				}
			}
		}		
	}

	public void loadProblemDataFromJSON(String jsonData){
		
	}
}
