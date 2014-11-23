package com.jurnog.mtsp.tests;

import com.jurnog.mtsp.MTSPProblem;

public class LoadFromFileTest {

	public static void main(String[] args) {
		MTSPProblem prob =  new MTSPProblem();
		prob.loadProblemDataFromFile("resources/instance1.txt");
	}

}
