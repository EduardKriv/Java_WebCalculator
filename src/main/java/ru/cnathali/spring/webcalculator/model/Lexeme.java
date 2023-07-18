package ru.cnathali.spring.webcalculator.model;

public class Lexeme {
    protected enum lexemeType { OPERATOR, NUMBER, BRACKET_R, FUNCTION, BRACKET_L, X, UNARY };

    static protected lexemeType getLexemeType(char ch) {
        return switch (ch) {
            case '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', 'e' -> lexemeType.NUMBER;
            case '*', '/', '+', '-', '^', '%' ->  lexemeType.OPERATOR;
            case '('  -> lexemeType.BRACKET_L;
            case ')' ->  lexemeType.BRACKET_R;
            case '~' ->  lexemeType.UNARY;
            case 'x' ->  lexemeType.X;
            default -> lexemeType.FUNCTION;
        };
    }
}
