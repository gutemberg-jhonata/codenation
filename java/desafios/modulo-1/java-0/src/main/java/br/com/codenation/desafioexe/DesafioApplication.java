package br.com.codenation.desafioexe;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;

public class DesafioApplication {

	public static List<Integer> fibonacci() {
		List<Integer> fibonacciNumbers = new ArrayList<>();
		fibonacciNumbers.add(0);
		fibonacciNumbers.add(1);
		for (int i = 1; i < fibonacciNumbers.size(); i++) {
			int sequency = fibonacciNumbers.get(i) + fibonacciNumbers.get(i - 1);
			if (sequency <= 377)
				fibonacciNumbers.add(sequency);
		}

		return fibonacciNumbers;
	}

	public static Boolean isFibonacci(Integer a) {
		Double n = 5 * Math.pow(a, 2);
		Double square1 = Math.sqrt(n + 4);
		Double square2 = Math.sqrt(n - 4);
		if (Math.pow(square1.intValue(), 2) == (n.intValue() + 4)
				|| Math.pow(square2.intValue(), 2) == (n.intValue() - 4)) {
			return true;
		}
		return false;
	}

}