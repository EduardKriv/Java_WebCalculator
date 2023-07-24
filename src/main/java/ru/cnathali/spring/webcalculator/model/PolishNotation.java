package ru.cnathali.spring.webcalculator.model;

import org.jetbrains.annotations.NotNull;
import org.springframework.stereotype.Component;

import java.util.Stack;

@Component
public class PolishNotation extends Lexeme {
    private final Stack<String> outputStack = new Stack<>();
    private final Stack<Character> tempStack = new Stack<>();

    public Stack<String> convert(@NotNull String expression) {
        Stack<String> result = new Stack<>();
        char[] charArray = replaceFuncName(expression).toCharArray();

        for (int i = 0; i < charArray.length; i++) {
            switch (getLexemeType(charArray[i])) {
                case NUMBER, X            -> i = readNumber(charArray, i);
                case FUNCTION, BRACKET_L  -> tempStack.push(charArray[i]);
                case OPERATOR, UNARY      -> readOperator(charArray[i]);
                case BRACKET_R            -> readBracketR();
            }
        }
        reversStack();

        while (outputStack.size() > 0) {
            result.push(outputStack.pop());
        }

        return result;
    }

    private void reversStack() {
        while (tempStack.size() > 0) {
            outputStack.push(String.valueOf(tempStack.pop()));
        }
    }

    private int getPriority(char ch) {
        return switch (ch) {
            case '(', ')' -> 0;
            case '+', '-' -> 1;
            case '*', '/', '%' -> 2;
            case '^' -> 3;
            default -> 4;
        };
    }

    private @NotNull String replaceFuncName(@NotNull String exp) {
        return exp.replaceAll("mod", "%")
                .replaceAll("log", "o")
                .replaceAll("ln", "l")
                .replaceAll("sqrt", "q")
                .replaceAll("asin", "S")
                .replaceAll("acos", "C")
                .replaceAll("atan", "T")
                .replaceAll("sin", "s")
                .replaceAll("cos", "c")
                .replaceAll("tan", "t")
                .replaceAll("(?<=[+\\-/*^%(])(-)|^(-)", "~")
                .replaceAll("(?<=[+\\-/*^%(])([+])|^([+])", "")
                .replaceAll("(?<=[)x])(f{0})(?=[(olqSCTsctx\\d])|(?<=\\d)(f{0})(?=[(olqSCTsctx])", "*");
    }

    private int readNumber(char @NotNull [] str, int pos) {
        StringBuilder number = new StringBuilder();
        lexemeType lexeme = getLexemeType(str[pos]);

        while (lexeme == lexemeType.NUMBER || lexeme == lexemeType.X) {
            number.append(str[pos++]);
            if (str.length <= pos) break;
            if (str[pos] == 'e' && (str[pos + 1] == '-' || str[pos + 1] == '+')) {
                number.append(str[pos++]);
                number.append(str[pos++]);
            }
            lexeme = getLexemeType(str[pos]);
        }

        outputStack.push(number.toString());
        return pos - 1;
    }

    private void readOperator(char ch) {
        while (ch != '^' && tempStack.size() > 0 && getPriority(tempStack.peek()) >= getPriority(ch)) {
            outputStack.push(String.valueOf(tempStack.pop()));
        }
        tempStack.push(ch);
    }

    private void readBracketR() {
        while (!tempStack.peek().equals('(')) {
            outputStack.push(String.valueOf(tempStack.pop()));
        }
        tempStack.pop();

        if (tempStack.size() > 0 && getLexemeType(tempStack.peek()) == lexemeType.FUNCTION) {
            outputStack.push(String.valueOf(tempStack.pop()));
        }
    }
}
