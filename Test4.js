// test4.js
const fs = require('fs');
const path = require('path');

// Funktion zum Einlesen und Ausgeben des Datensatzes
function readAndDisplayBicycles(csvFileName) {
    // Erstellt den Pfad relativ zum Speicherort von test4.js
    const filePath = path.join(__dirname, csvFileName);

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Fehler: Die Datei "${csvFileName}" konnte nicht gefunden werden!`, err);
            console.log("Hinweis: Stelle sicher, dass fahrraeder.csv im selben Ordner wie test4.js liegt.");
            return;
        }

        // Zeilen aufteilen und leere Zeilen entfernen
        const lines = data.trim().split('\n');
        
        // Header (Spaltenüberschriften) extrahieren
        const headers = lines[0].split(',').map(header => header.trim());

        // Datenzeilen in einzelne JavaScript-Objekte umwandeln
        const dataset = lines.slice(1).map(line => {
            const values = line.split(',').map(val => val.trim());
            let item = {};
            headers.forEach((header, index) => {
                item[header] = values[index];
            });
            return item;
        });

        // 1. Gesamten Datensatz als Array anzeigen
        console.log("=== GELADENER DATASET ===");
        console.log(dataset);

        // 2. Einzelne Objekte nacheinander ausgeben (wie in der Übung gefordert)
        console.log("\n=== EINZELNE FAHRRAD-OBJEKTE ===");
        dataset.forEach((bike, i) => {
            console.log(`[Objekt ${i + 1}]`, bike);
        });
    });
}

// Aufruf der Funktion mit deiner CSV-Datei
readAndDisplayBicycles('fahrraeder.csv');