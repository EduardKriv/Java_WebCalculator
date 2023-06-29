package ru.cnathali.spring.webcalculator.model;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

@RestController
public class UserController {
    private final Calculation calculator = new Calculation();
    private final CreditCalculator creditCalculator = new CreditCalculator();

    @GetMapping("/test")
    public double getDouble(@RequestParam(name = "expr") String str,
                            @RequestParam(defaultValue = "0.0", required = false, name = "x") Double x) {

        System.out.println(str);
        return calculator.calculate(str, x);
    }

    @GetMapping("/graph")
    public List<List<Double>> getGraphPoints(@RequestParam(name = "expr") String str,
                                             @RequestParam(defaultValue = "-10", required = false, name = "minX") Double minX,
                                             @RequestParam(defaultValue = "10", required = false, name = "maxX") Double maxX,
                                             @RequestParam(defaultValue = "1", required = false, name = "step") Double step) {

        PolishNotation polishNotation = new PolishNotation();
        Stack<String> rpn = polishNotation.convert(str);

        List<Double> x = new ArrayList<>();
        List<Double> y = new ArrayList<>();

        for (double xValue = minX; Double.compare(xValue, maxX) <= 0; xValue += step) {
            Stack<String> rpnTemp = (Stack<String>)rpn.clone();

            double yValue = calculator.calculate(rpnTemp, xValue);

            if (Math.abs(yValue) > 1e6) continue;

            x.add(xValue);
            y.add(yValue);
        }

        List<List<Double>> chartData = new ArrayList<>();
        chartData.add(x);
        chartData.add(y);

        return chartData;
    }

    @GetMapping("/credit")
    public List<Double> getCreditResult(@RequestParam(name = "sum") double sum,
                                  @RequestParam(name = "period") int period,
                                  @RequestParam(name = "percent") double percent) {

        return creditCalculator.calculate(sum, period, percent);
    }
}
