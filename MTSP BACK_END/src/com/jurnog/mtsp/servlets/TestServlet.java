package com.jurnog.mtsp.servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.jurnog.mtsp.beealgorithm.BeeHive;

@WebServlet("/test")
public class TestServlet extends HttpServlet {
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		BeeHive hive = new BeeHive();
		hive.parsePropertiesFile();
		resp.getWriter().write(hive.getInterations());
		resp.getWriter().close();		
		super.doGet(req, resp);
	}
}
