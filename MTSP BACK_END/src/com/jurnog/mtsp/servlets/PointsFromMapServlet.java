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
import com.jurnog.mtsp.web.utilities.Result;

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
		JsonProblemRepresentation representation = new Gson().fromJson(jsonString, JsonProblemRepresentation.class);		
		
		int laps = representation.getLaps();
		Result result = new Result();
		
		result.bestResults = new double[laps][];
		result.bestRoute = new int[laps][];
		result.elapsedTime = new double[laps];
		result.laps = laps;
		
		for(int lap = 0; lap < laps; lap++){
			
			BeeHive hive = new BeeHive();
			hive.problemFromJson(representation);
			
			int setEliteNeighbourhoodsFrequency = representation.getNeighbourhoodsFrequency();
			double initialNormValue = representation.getNormValue();
			
			System.out.println("Randomizing first " + hive.getScoutBeesNumber() + " solutions");
			long startTime = System.nanoTime();
			hive.sendScouts();
			System.out.println("Scouts returned after: "+ (System.nanoTime()-startTime)/1000000000.0 + " s");
			hive.setEliteNeighbourhoods();		

			int iterations = hive.getInterations();
			result.bestResults[lap] = new double[iterations];
			
			System.out.println("Started " + iterations + " iterations...");
			
			for(int i = 0; i < iterations ; i++){
				hive.exploreEliteNeighbourhoods((int)(initialNormValue - initialNormValue*(i/iterations)));
				
				if(i % setEliteNeighbourhoodsFrequency == 0){
					hive.setEliteNeighbourhoods();
				}
				
				Iterator<Entry<Neighbourhood, Double>> iterator = hive.getEliteNeighbourhoods().entrySet().iterator();			
				Entry<Neighbourhood, Double> best = iterator.next();
				result.bestResults[lap][i] = best.getValue();
				if(i == iterations-1){
					result.bestRoute[lap] = new int[best.getKey().getRoute().size()];
					for(int j = 0; j < best.getKey().getRoute().size(); j++){
						result.bestRoute[lap][j] = best.getKey().getRoute().get(j);
					}
				}
			}
			
			result.elapsedTime[lap] = (System.nanoTime()-startTime)/1000000000.0;
			
			System.out.println("Iteratated " + iterations + " times in " + (System.nanoTime()-startTime)/1000000000.0 + " s");
			System.out.println("\n\n");

			hive.close();
		}
		
		
		response.getWriter().print(new Gson().toJson(result));
	}

}
