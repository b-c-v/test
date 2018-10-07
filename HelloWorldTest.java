package test;

import java.util.Scanner;

public class HelloWorldTest {

	public static void main(String[] args) {
		myPrint("Hello ");
		myPrint("I like name ");


	}

	private static void myPrint(String hello) {
		Scanner aScanner = new Scanner(System.in);
		System.out.print("Enter your name: ");
		String name = aScanner.nextLine();
		System.out.println(hello + name);
	}


}
