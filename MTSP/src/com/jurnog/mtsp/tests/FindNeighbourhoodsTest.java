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
		hive.setEliteNeighbourhoodNumber(9);
		hive.setScoutBeesNumber(100);
		hive.sendScouts();
			
		hive.setEliteNeighbourhoods();
		
		int i = 0;
		LinkedHashMap<Neighbourhood, Double> hoods = hive.getEliteNeighbourhoods();
		for(Entry<Neighbourhood,Double> ent : hoods.entrySet()){
			System.out.println(i+": "+ent.getValue());
			i++;
		}
		
		hive.close();
	}

}
