package ru.cnathali.spring.webcalculator.controller;

import org.jetbrains.annotations.NotNull;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import ru.cnathali.spring.webcalculator.model.Calculation;
import ru.cnathali.spring.webcalculator.service.History;

@Controller
public class FirstController {
    private final Calculation calculator = new Calculation();

    @GetMapping("/")
    public String getMainPage() {
        return "testswipe";
    }

    @GetMapping("/calc")
    public String calculate(@RequestParam(name = "calcStr") String expression, @NotNull Model model) {
        var z = calculator.calculate(expression);
        model.addAttribute("result", z);

//        History.save(expression);
//        var expList = History.getHistory();
//        model.addAttribute("test", expression);

//        model.addAttribute("expList", expList);

        return "testswipe";
    }

    @GetMapping("/clean")
    public String cleanHistory() {
        History.clean();
        return "main";
    }
}
