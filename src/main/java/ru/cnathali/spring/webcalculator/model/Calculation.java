package ru.cnathali.spring.webcalculator.model;

import org.jetbrains.annotations.NotNull;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Stack;

public class Calculation extends Lexeme {
    private final PolishNotation rpn = new PolishNotation();

    public double calculate(@NotNull Stack<String> stack, double x) {
        Stack<Double> doubleStack = new Stack<>();

        for (; stack.size() > 0; stack.pop()) {
            switch (getLexemeType(stack.peek().charAt(0))) {
                case NUMBER -> doubleStack.push(Double.valueOf(stack.peek()));
                case OPERATOR -> calcBinary(stack.peek().charAt(0), doubleStack);
                case FUNCTION -> doubleStack.push(action(stack.peek().charAt(0), doubleStack.pop()));
                case UNARY ->  doubleStack.push(doubleStack.pop() * -1);
                case X -> doubleStack.push(x);
            }
        }

        return doubleStack.pop();
    }

    public double calculate(Stack<String> stack) {
        return calculate(stack, 0);
    }

    public double calculate(@NotNull String expression, double x) {
        return calculate(rpn.convert(expression), x);
    }

    public double calculate(@NotNull String expression) {
        return calculate(rpn.convert(expression));
    }

    public List<List<Double>> calculateGraphPoints(@NotNull String expr, double minX, double maxX, double step) {
        final double MAX_FUNC_VALUE = 1e6;
        Stack<String> stackRpn = rpn.convert(expr);

        List<Double> x = new ArrayList<>();
        List<Double> y = new ArrayList<>();

        for (double xValue = minX; Double.compare(xValue, maxX) <= 0; xValue += step) {
            Stack<String> rpnTemp = (Stack<String>)stackRpn.clone();

            double yValue = calculate(rpnTemp, xValue);


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

    private void calcBinary(char operation, @NotNull Stack<Double> doubleStack) {
        double operandR = doubleStack.pop(), operandL = doubleStack.pop();
        doubleStack.push(action(operation, operandL, operandR));
    }

    private double action(char operation, double x, double y) {
        return switch (operation) {
            case '+' -> x + y;
            case '-' -> x - y;
            case '*' -> x * y;
            case '/' -> x / y;
            case '%' -> x % y;
            case '^' -> Math.pow(x, y);
            default -> throw new IllegalStateException("Unexpected value: " + operation);
        };
    }

    private double action(char operation, double x) {
        return switch (operation) {
            case 's' -> Math.sin(x);
            case 'c' -> Math.cos(x);
            case 't' -> Math.tan(x);
            case 'o' -> Math.log10(x);
            case 'l' -> Math.log(x);
            case 'S' -> Math.asin(x);
            case 'C' -> Math.acos(x);
            case 'T' -> Math.atan(x);
            case 'q' -> Math.sqrt(x);
            default -> throw new IllegalStateException("Unexpected value: " + operation);
        };
    }
}
