package com.jurnog.mtsp.servlets;

import java.util.List;
import java.io.IOException;
import java.util.Enumeration;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.Map;
import java.util.Map.Entry;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletInputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.jurnog.mtsp.JsonProblemRepresentation;
import com.jurnog.mtsp.MTSPProblem;
import com.jurnog.mtsp.beealgorithm.BeeHive;
import com.jurnog.mtsp.beealgorithm.Neighbourhood;

/**
 * Servlet implementation class PointsFromMapServlet
 */
@WebServlet("/mappoints/*")
public class PointsFromMapServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public PointsFromMapServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		ServletContext sc = request.getServletContext();
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String jsonString = request.getParameter("data");
		
		List<Entry<Neighbourhood,Double>> bestResults = new LinkedList<Entry<Neighbourhood,Double>>();

		BeeHive hive = new BeeHive();
		JsonProblemRepresentation representation = new Gson().fromJson(jsonString, JsonProblemRepresentation.class);

		hive.problemFromJson(representation);
		representation.get
		int setEliteNeighbourhoodFrequency = representation.getNeighbourhoodFrequency();
		double initialNormValue = representation.getNormValue();
		
		System.out.println("Randomizing first " + hive.getScoutBeesNumber() + " solutions");
		long startTime = System.nanoTime();
		hive.sendScouts();
		System.out.println("Scouts returned after: "+ (System.nanoTime()-startTime)/1000000000.0 + " s");
		hive.setEliteNeighbourhoods();
		

		
		startTime = System.nanoTime();
		int iterations = hive.getInterations();
		
		System.out.println("Started " + iterations + " iterations...");
		
		for(int i = 0; i < iterations ; i++){
			hive.exploreEliteNeighbourhoods((int)(initialNormValue - initialNormValue*(i/iterations)));
			
			if(i % setEliteNeighbourhoodFrequency == 0){
				hive.setEliteNeighbourhoods();
			}
			
			Iterator<Entry<Neighbourhood, Double>> iterator = hive.getEliteNeighbourhoods().entrySet().iterator();			
			Entry<Neighbourhood, Double> best = iterator.next();
			
			bestResults.add(best);
		}
		System.out.println("Iteratated " + iterations + " times in " + (System.nanoTime()-startTime)/1000000000.0 + " s");
		System.out.println("\n\n");
		

		Iterator<Entry<Neighbourhood, Double>> iterator = hive.getEliteNeighbourhoods().entrySet().iterator();
		
		Entry<Neighbourhood, Double> best = iterator.next();
		System.out.println("Best route found: " + best.getKey().getRoute());
		System.out.println("Cost: " + best.getValue());
		
		hive.close();		
		
		response.getWriter().print("Servlet odpowiedzia³");
	}

}
