package ru.cnathali.spring.webcalculator.model;

import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

@Component
public class Graph {
    @Autowired
    private ArithmeticCalculator calculator;
    @Autowired
    private PolishNotation rpn;

    public List<List<Double>> calcPoints(@NotNull String expr, double minX, double maxX, double step) {
        final double MAX_FUNC_VALUE = 1e6;
        Stack<String> stackRpn = rpn.convert(expr);

        List<Double> x = new ArrayList<>();
        List<Double> y = new ArrayList<>();

        for (double xValue = minX; Double.compare(xValue, maxX) <= 0; xValue += step) {
            Stack<String> rpnTemp = (Stack<String>)stackRpn.clone();

            double yValue = calculator.calculate(rpnTemp, xValue);

            if (!Double.isFinite(yValue) || Math.abs(yValue) > MAX_FUNC_VALUE) {
                y.add(null);
            } else {
                y.add(yValue);
            }
            x.add(xValue);
        }

        List<List<Double>> graphData = new ArrayList<>();
        graphData.add(x);
        graphData.add(y);

        return graphData;
    }
}
