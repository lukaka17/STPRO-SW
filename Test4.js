const fs = require("fs");

function readFahrradData(filePath) {
    const data = fs.readFileSync(filePath, "utf8");

    const lines = data.trim().split("\n");
    const headers = lines[0].split(",");

    const fahrraeder = lines.slice(1).map(line => {
        const values = line.split(",");

        return {
            fahrrad_id: parseInt(values[0]),
            fahrradtyp: values[1],
            preis: parseFloat(values[2]),
            verfuegbar: values[3].trim() === "true",
            standort: values[4].trim()
        };
    });

    return fahrraeder;
}

const fahrraeder = readFahrradData("fahrrad_daten.csv");

console.log(fahrraeder);