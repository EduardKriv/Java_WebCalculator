package ru.cnathali.spring.webcalculator.service;

import org.springframework.stereotype.Component;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

@Component
public class History {
    private static final File PATH = new File(System.getProperty("user.dir") + "/history.txt");

    public History() throws IOException {
        PATH.createNewFile();
    }

    public static void save(String expr) {
        try (FileWriter writer = new FileWriter(PATH, true);
            BufferedWriter wr = new BufferedWriter(writer)) {
            wr.write(expr);
            wr.write("\n");
            wr.flush();
        } catch (Exception ignored) {
        }
    }

    public static List<String> getHistory() {
        List<String> allHistory = new ArrayList<>();
        try (FileReader reader = new FileReader(PATH);
            BufferedReader bufferReader = new BufferedReader(reader)) {
            String line;
            while ((line = bufferReader.readLine()) != null) {
                allHistory.add(line);
            }
        } catch (Exception ignored) {
        }
        return allHistory;
    }

    public static void clean() {
        try (FileWriter writer = new FileWriter(PATH, false);
            BufferedWriter wr = new BufferedWriter(writer)) {
            wr.write("\n");
            wr.flush();
        } catch (Exception ignored) {
        }
    }
}
