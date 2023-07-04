package ru.cnathali.spring.webcalculator.model;

import java.util.ArrayList;
import java.util.List;

public class CreditCalculator {

    public List<List<Double>> calculateAnnuity(double sum, int period, double percent) {
        List<List<Double>> result = new ArrayList<>();
        period *= 12;
        percent = percent / 12. / 100.;

        double payment = sum * (percent * Math.pow(1 + percent, period) /
                (Math.pow(1 + percent, period) - 1));

        for (int i = 0; i < period; i++) {
            result.add(List.of((double) (i + 1),
                    round(payment),
                    round(payment - sum * percent),
                    round(sum * percent),
                    round(sum - (payment - sum * percent))));

            sum -= round(payment - round(sum * percent));
        }

        return result;
    }

    public List<List<Double>> calculateDifferent(double sum, int period, double percent) {
        List<List<Double>> result = new ArrayList<>();
        period *= 12;

        double paymentPerMonth = sum / period;

        for (int i = 0; i < period; i++) {
            double remainder = sum - paymentPerMonth * i;
            double payment = paymentPerMonth + remainder * percent / 100. / 12.;

            result.add(List.of((double) (i + 1),
                    round(payment),
                    round(paymentPerMonth),
                    round(payment - paymentPerMonth),
                    round(remainder - paymentPerMonth)));
        }

        return result;
    }

    private double round(double value) {
        return Math.round(value * 100) / 100.;
    }
}
