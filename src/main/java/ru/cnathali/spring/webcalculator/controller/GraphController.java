package ru.cnathali.spring.webcalculator.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import ru.cnathali.spring.webcalculator.model.Graph;

import java.util.List;

@Controller
public class GraphController {
    @Autowired
    private Graph graph;

    @ResponseBody
    @GetMapping("/graph")
    public List<List<Double>> getGraphPoints(@RequestParam(name = "expr") String str,
                                             @RequestParam(defaultValue = "-10", required = false, name = "minX") Double minX,
                                             @RequestParam(defaultValue = "10",  required = false, name = "maxX") Double maxX,
                                             @RequestParam(defaultValue = "0.2", required = false, name = "step") Double step) {

        return graph.calcPoints(str, minX, maxX, step);
    }
}
