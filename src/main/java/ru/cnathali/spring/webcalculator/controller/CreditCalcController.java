package ru.cnathali.spring.webcalculator.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import ru.cnathali.spring.webcalculator.model.CreditCalculator;

import java.util.List;

@Controller
public class CreditCalcController {
    @Autowired
    private CreditCalculator creditCalculator;

//    public CreditCalcController(CreditCalculator creditCalculator) {
//        this.creditCalculator = creditCalculator;
//    }

    @ResponseBody
    @GetMapping("/credit/annuity")
    public List<List<Double>> getCreditResultAnn(@RequestParam(name = "sum") double sum,
                                                 @RequestParam(name = "period") int period,
                                                 @RequestParam(name = "percent") double percent) {

        return creditCalculator.calculateAnnuity(sum, period, percent);
    }

    @ResponseBody
    @GetMapping("/credit/different")
    public List<List<Double>> getCreditResultDiff(@RequestParam(name = "sum") double sum,
                                                  @RequestParam(name = "period") int period,
                                                  @RequestParam(name = "percent") double percent) {

        return creditCalculator.calculateDifferent(sum, period, percent);
    }
}
