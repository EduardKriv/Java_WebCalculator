package ru.cnathali.spring.webcalculator.service;

import org.springframework.stereotype.Component;

import java.io.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.prefs.BackingStoreException;
import java.util.prefs.Preferences;

@Component
public class History {
    private static final Preferences pref = Preferences.userRoot().node("history");
    public static void save(String expr) {
        pref.put(expr, "");
    }
    public static List<String> getHistory() throws BackingStoreException {
        return new ArrayList<>(Arrays.asList(pref.keys()));
    }
    public static void clean() throws BackingStoreException {
        pref.clear();
    }
}
