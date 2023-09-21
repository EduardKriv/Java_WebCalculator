package ru.cnathali.spring.webcalculator.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import ru.cnathali.spring.webcalculator.model.CreditCalculator;

import java.util.List;

@RestController
public class CreditCalcController {

    @GetMapping("/credit/annuity")
    public List<List<Double>> getCreditResultAnn(@RequestParam(name = "sum") double sum,
                                                 @RequestParam(name = "period") int period,
                                                 @RequestParam(name = "percent") double percent) {

        return CreditCalculator.calculateAnnuity(sum, period, percent);
    }

    @GetMapping("/credit/different")
    public List<List<Double>> getCreditResultDiff(@RequestParam(name = "sum") double sum,
                                                  @RequestParam(name = "period") int period,
                                                  @RequestParam(name = "percent") double percent) {

        return CreditCalculator.calculateDifferent(sum, period, percent);
    }
}
