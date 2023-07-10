package ru.cnathali.spring.webcalculator.model;

import org.jetbrains.annotations.NotNull;

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
