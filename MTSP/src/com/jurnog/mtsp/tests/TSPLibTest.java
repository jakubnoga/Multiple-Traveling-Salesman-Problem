package com.jurnog.mtsp.tests;

import java.lang.management.GarbageCollectorMXBean;
import java.util.Iterator;
import java.util.Map.Entry;

import javax.crypto.spec.GCMParameterSpec;

import com.jurnog.mtsp.MTSPProblem;
import com.jurnog.mtsp.beealgorithm.BeeHive;
import com.jurnog.mtsp.beealgorithm.Neighbourhood;

public class TSPLibTest {
	
	public static void main(String[] args){

		BeeHive hive = new BeeHive();
		System.out.println("Loaded following properties: \n");
		hive.parsePropertiesFile();
		System.out.println("\n");
		System.out.println("Randomizing first " + hive.getScoutBeesNumber() + " solutions");
		long startTime = System.nanoTime();
		hive.sendScouts();
		System.out.println("Scouts returned after: "+ (System.nanoTime()-startTime)/1000000000.0 + " s");
		hive.setEliteNeighbourhoods();
		

		
		startTime = System.nanoTime();
		int iterations = hive.getInterations();
		
		System.out.println("Started " + iterations + " iterations...");
		
		for(int i = 0; i < iterations ; i++){
			hive.exploreEliteNeighbourhoods((int)(20.0 - 20.0*i/iterations));
			hive.setEliteNeighbourhoods();
		}
		System.out.println("Iteratated " + iterations + " times in " + (System.nanoTime()-startTime)/1000000000.0 + " s");
		System.out.println("\n\n");
		

		Iterator<Entry<Neighbourhood, Double>> iterator = hive.getEliteNeighbourhoods().entrySet().iterator();
		
		Entry<Neighbourhood, Double> best = iterator.next();
		System.out.println("Best route found: " + best.getKey().getRoute());
		System.out.println("Cost: " + best.getValue());
		
		hive.close();
		
	
		
	}
}
