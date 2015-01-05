package com.jurnog.mtsp.tests;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map.Entry;

import com.jurnog.mtsp.beealgorithm.BeeHive;
import com.jurnog.mtsp.beealgorithm.Neighbourhood;

public class FindNeighbourhoodsTest {

	public static void main(String[] args) {
		BeeHive hive = new BeeHive();
		hive.problemFromFile("resources/instance1.txt");
		hive.setEliteNeighbourhoodNumber(100);
		hive.setBeePerEliteNeighbourhood(2);
		hive.setBeePerNeighbourhood(1);
		hive.setScoutBeesNumber(20000);
		hive.sendScouts();
		hive.setEliteNeighbourhoods();
		
//		for(Entry<Neighbourhood, Double> ent : hive.getEliteNeighbourhoods().entrySet()){
//			System.out.println(ent.getValue());
//		}
		
		for(int i = 0; i < 1000; i++){
			System.out.println("++_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+__+_+_+Iteration number: " + i);
			hive.exploreEliteNeighbourhoods(4);
			hive.setEliteNeighbourhoods();			
		}
		System.out.println("\n\n");
		
		for(Entry<Neighbourhood, Double> ent : hive.getEliteNeighbourhoods().entrySet()){
			System.out.println(ent.getValue());
		}
		
		hive.close();

	}

}
