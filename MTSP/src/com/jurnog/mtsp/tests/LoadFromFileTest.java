package com.jurnog.mtsp.tests;

import java.util.LinkedList;
import java.util.List;
import java.util.Random;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

import com.jurnog.mtsp.MTSPProblem;
import com.jurnog.mtsp.beealgorithm.Neighbourhood;
import com.jurnog.mtsp.beealgorithm.ScoutBee;

public class LoadFromFileTest {
	
	private static ExecutorService pool = Executors.newCachedThreadPool();
	private static List<Callable<int[][]>> beeList;

	public static void main(String[] args) {
		beeList = new LinkedList<Callable<int[][]>>();
		MTSPProblem prob =  new MTSPProblem();
		prob.loadProblemDataFromFile("resources/instance1.txt");
		long startTime = System.nanoTime();
		for(int i = 0; i < 20000; i++){
			Callable<int[][]> bee = new ScoutBee(51);
			beeList.add(bee);
		}
		
		int z = 0;
		try {
			List<Future<int[][]>> future = pool.invokeAll(beeList);
			for(Future<int[][]> res : future){
				if(res.get()!=null){
//					System.out.println("\n"+(++z)+"_________________________________________________________________________");
					int[][] transitionMatrix = res.get();
//					for(int i = 0; i < 100; i++){
//						System.out.print("\n");
//						for(int j = 0; j < 100; j++){
//							System.out.print("\t"+transitionMatrix[i][j]+"\t");
//						}
//					}
					Neighbourhood tempN = new Neighbourhood(transitionMatrix);
				}					
			}
		} catch (InterruptedException | ExecutionException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		System.out.println((System.nanoTime()-startTime)/1000000000.0 + " s");
		pool.shutdown();
	}
	

}
