package com.jurnog.mtsp.utilities;

public class InvalidInputException extends Exception {
	private static final long serialVersionUID = 338109439150706094L;
	public InvalidInputException(){
		super();
	}
	public InvalidInputException(String message){
		super(message);
	}
}
