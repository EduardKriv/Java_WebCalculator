package ru.cnathali.spring.webcalculator.controller;

import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import ru.cnathali.spring.webcalculator.model.ArithmeticCalculator;
import ru.cnathali.spring.webcalculator.service.History;

import jakarta.validation.Valid;
import org.jetbrains.annotations.NotNull;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.prefs.BackingStoreException;

@RestController
public class ArithmeticCalcController {
    private final ArithmeticCalculator calculator;

    @Autowired
    public ArithmeticCalcController(ArithmeticCalculator calculator) {
        this.calculator = calculator;
    }

    @GetMapping("/calculate")
    public double getDouble(@RequestParam(name = "expr") String str,
                            @RequestParam(defaultValue = "0.0", required = false, name = "x") Double x) {

        return calculator.calculate(str, x);
    }

    @GetMapping("/history/get")
    public List<String> getHistory() throws BackingStoreException {
        return History.getHistory();
    }

    @DeleteMapping("/history/clean")
    public void cleanHistory() throws BackingStoreException {
        History.clean();
    }

    @PostMapping("/history/save")
    public void saveHistory(@Valid @RequestBody @NotNull JSONObject str) {
        History.save(str.get("str").toString());
    }
}
