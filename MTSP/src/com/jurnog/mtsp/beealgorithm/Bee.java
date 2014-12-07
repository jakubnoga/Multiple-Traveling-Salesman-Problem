package com.jurnog.mtsp.beealgorithm;

import java.util.Random;
import java.util.concurrent.Callable;

public abstract class Bee implements Callable<int[][]>{
	protected static Random rand;
	
	protected int getRandomInRange(int min, int max){
		int num;		
		num = rand.nextInt((max-min) + 1) + min;		
		return num;
	}

}
