package com.jurnog.mtsp.beealgorithm;

import java.util.ArrayList;

import com.jurnog.mtsp.RestrictionsChecker;
import com.jurnog.mtsp.ValueChecker;

public class Bee implements Runnable, RestrictionsChecker, ValueChecker{
	private int dimesions;
	
	private ArrayList<ArrayList<Double>> trasitionMatrix;
	
	@Override
	public void run() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public double checkValue() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public boolean checkRestrictions() {
		// TODO Auto-generated method stub
		return false;
	}
	
	
}
