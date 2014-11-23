package com.jurnog.mtsp.tests;

import java.util.Random;

import com.jurnog.mtsp.MTSPProblem;
import com.jurnog.mtsp.beealgorithm.ScoutBee;

public class LoadFromFileTest {

	public static void main(String[] args) {
		MTSPProblem prob =  new MTSPProblem();
		prob.loadProblemDataFromFile("resources/instance1.txt");
		ScoutBee testBee = new ScoutBee(5);
		try {
			double [][]route = testBee.call();
			for(int i = 0; i < 5; i++){
				System.out.print("\n");
				for(int j = 0; j < 5; j++){
					System.out.print("\t"+route[i][j]+"\t");
				}
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
