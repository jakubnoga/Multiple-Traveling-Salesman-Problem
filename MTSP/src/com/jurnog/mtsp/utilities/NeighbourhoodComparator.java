package com.jurnog.mtsp.utilities;

import java.util.Comparator;
import java.util.Map.Entry;

import com.jurnog.mtsp.beealgorithm.Neighbourhood;

public class NeighbourhoodComparator implements
		Comparator<Entry<Neighbourhood, Double>> {

	@Override
	public int compare(Entry<Neighbourhood, Double> o1,
			Entry<Neighbourhood, Double> o2) {
		return o1.getValue().compareTo(o2.getValue());
	}

}
