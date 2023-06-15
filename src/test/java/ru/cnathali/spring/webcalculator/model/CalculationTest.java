package ru.cnathali.spring.webcalculator.model;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvFileSource;


class CalculationTest {
    public static Calculation calc = new Calculation();
    public static PolishNotation rpn = new PolishNotation();

    @ParameterizedTest
    @CsvFileSource(resources = "/operationsTest.csv")
    public void CalculationTestOperations(String expressions, Double res) {
        Assertions.assertEquals(calc.calculate(rpn.convert(expressions)), res);
    }

    @ParameterizedTest
    @CsvFileSource(resources = "/functionsTest.csv")
    public void CalculationTestFunctions(String expressions, Double res) {
        Assertions.assertEquals(calc.calculate(rpn.convert(expressions)), res);
    }
}