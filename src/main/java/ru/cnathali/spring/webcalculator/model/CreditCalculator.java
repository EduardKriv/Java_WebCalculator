package ru.cnathali.spring.webcalculator.model;

import java.util.ArrayList;
import java.util.List;

public class CreditCalculator {

    public List<List<Double>> calculate(double sum, int period, double percent) {
        List<List<Double>> result = new ArrayList<>();
        period *= 12;
        percent = percent / 12. / 100.;

        double payment = sum * (percent * Math.pow(1 + percent, period) /
                (Math.pow(1 + percent, period) - 1));

        double totalDuty = round(payment) * period;

//        result.add(List.of(round(payment)));
//        result.add(round(totalDuty - sum));
//        result.add(round(totalDuty));


        double perMonth = 12.4 / (100. * 12.);

        for (int i = 0; i < period; i++) {

            System.out.println(
                    round(payment) + " " +
                            round(payment - sum * perMonth) + " " +
                            round(sum * perMonth) + " " +
                            round(sum - (payment - sum * perMonth)));


            result.add(List.of((double) (i + 1),
                    round(payment),
                    round(payment - sum * perMonth),
                    round(sum * perMonth),
                    round(sum - (payment - sum * perMonth))));

            sum -= round(payment - round(sum * perMonth));


        }

//        System.out.println(round(payment) + " " + round(totalDuty - sum) + " " + round(totalDuty));



        return result;

    }

    private double round(double value) {
        return Math.round(value * 100) / 100.;
    }
}
