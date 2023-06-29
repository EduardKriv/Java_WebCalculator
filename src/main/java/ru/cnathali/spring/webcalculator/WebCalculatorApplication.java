package ru.cnathali.spring.webcalculator;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import ru.cnathali.spring.webcalculator.model.Calculation;
import ru.cnathali.spring.webcalculator.model.PolishNotation;

import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

@SpringBootApplication
public class WebCalculatorApplication {

	public static void main(String[] args) {

		SpringApplication.run(WebCalculatorApplication.class, args);

	}
}
