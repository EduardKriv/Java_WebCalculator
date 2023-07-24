package ru.cnathali.spring.webcalculator.model;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvFileSource;

class ArithmeticCalculatorTest {
    public static ArithmeticCalculator calc = new ArithmeticCalculator(new PolishNotation());

    @ParameterizedTest
    @CsvFileSource(resources = "/operationsTest.csv")
    public void CalculationTestOperations(String expressions, Double res) {
        Assertions.assertEquals(calc.calculate(expressions), res);
    }

    @ParameterizedTest
    @CsvFileSource(resources = "/functionsTest.csv")
    public void CalculationTestFunctions(String expressions, Double res) {
        Assertions.assertEquals(calc.calculate(expressions), res);
    }
}