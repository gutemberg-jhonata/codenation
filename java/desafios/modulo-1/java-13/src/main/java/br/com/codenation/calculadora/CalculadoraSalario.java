package br.com.codenation.calculadora;


public class CalculadoraSalario {

	public long calcularSalarioLiquido(double salarioBase) {
		if (salarioBase < 1039)
			return (long) 0.0;
		double descontoInss = calcularInss(salarioBase);
		double descontoIrrf = calcularIrrf(salarioBase - descontoInss);
		double salarioLiquido = salarioBase - descontoInss - descontoIrrf;
		return Math.round(salarioLiquido);
	}

	private double calcularInss(double salarioBase) {
		double descontoInss = 0;
		if (salarioBase <= 1500 )
			descontoInss = salarioBase * 0.08;
		else if (salarioBase > 1500 && salarioBase <= 4000)
			descontoInss = salarioBase * 0.09;
		else descontoInss = salarioBase * 0.11;
		return descontoInss;
	}
	private double calcularIrrf(double salarioBase) {
		double descontoIrrf = 0;
		if (salarioBase > 3000 && salarioBase <= 6000)
			descontoIrrf = salarioBase * 0.075;
		else if (salarioBase > 6000)
			descontoIrrf = salarioBase * 0.15;
		return descontoIrrf;
	}

}