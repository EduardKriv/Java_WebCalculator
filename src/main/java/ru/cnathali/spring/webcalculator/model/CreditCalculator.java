package ru.cnathali.spring.webcalculator.model;

import java.util.ArrayList;
import java.util.List;

public class CreditCalculator {

    public List<Double> calculate(double sum, int period, double percent) {
        List<Double> result = new ArrayList<>();
        period *= 12;
        percent = percent / 12. / 100.;

        double payment = sum * (percent * Math.pow(1 + percent, period) /
                (Math.pow(1 + percent, period) - 1));

        double totalDuty = round(payment) * period;

        result.add(round(payment));
        result.add(round(totalDuty - sum));
        result.add(round(totalDuty));

        return result;


//        double sum = std::get<input::START_SUM>(value);
//        double period = std::get<input::PERIOD>(value);
//        double percent = std::get<input::PERCENT>(value) / 12 / 100;
//
//        double payment = sum * (percent * pow(1 + percent, period) /
//                (pow(1 + percent, period) - 1));
//
//        double total_duty = myRoundf(payment) * period;
//
//        return std::vector<double>{myRoundf(payment), myRoundf(total_duty - sum),
//                myRoundf(total_duty)};

    }

    private double round(double value) {
        return Math.round(value * 100) / 100.;
    }
}
