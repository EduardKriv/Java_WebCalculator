package ru.cnathali.spring.webcalculator.controller;

import org.springframework.web.bind.annotation.*;
import ru.cnathali.spring.webcalculator.model.Calculation;
import ru.cnathali.spring.webcalculator.model.CreditCalculator;
import ru.cnathali.spring.webcalculator.service.History;

import java.util.List;

@RestController
public class UserController {
    private final Calculation calculator = new Calculation();
    private final CreditCalculator creditCalculator = new CreditCalculator();

    @GetMapping("/test")
    public double getDouble(@RequestParam(name = "expr") String str,
                            @RequestParam(defaultValue = "0.0", required = false, name = "x") Double x) {

        History.save(str);
        return calculator.calculate(str, x);
    }

    @GetMapping("/graph")
    public List<List<Double>> getGraphPoints(@RequestParam(name = "expr") String str,
                                             @RequestParam(defaultValue = "-10", required = false, name = "minX") Double minX,
                                             @RequestParam(defaultValue = "10",  required = false, name = "maxX") Double maxX,
                                             @RequestParam(defaultValue = "0.2", required = false, name = "step") Double step) {

        return calculator.calculateGraphPoints(str, minX, maxX, step);
    }

    @GetMapping("/credit")
    public List<List<Double>> getCreditResult(@RequestParam(name = "sum") double sum,
                                  @RequestParam(name = "period") int period,
                                  @RequestParam(name = "percent") double percent) {

        return creditCalculator.calculateAnnuity(sum, period, percent);
    }

    @GetMapping("/history/get")
    public List<String> getCreditResult() {

        return History.getHistory();
    }
}
