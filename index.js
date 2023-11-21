const fs = require("fs");
const xml2js = require("xml2js");
const parser = new xml2js.Parser({ explicitArray: false, ignoreAttrs: false });

// Путь к XML файлу
const xmlFilePath = "./xml1.xml";
// Путь куда сохранять JSON файл
const jsonFilePath = "./result.json";

// Чтение XML файла
fs.readFile(xmlFilePath, "utf8", (err, xmlString) => {
  if (err) {
    console.error("Ошибка при чтении файла: ", err);
    return;
  }

  // Конвертация XML в JSON
  parser.parseString(xmlString, (err, result) => {
    if (err) {
      console.error("Ошибка при парсинге XML: ", err);
    } else {
      const jsonString = JSON.stringify(result, null, 2);

      // Запись результата в JSON файл
      fs.writeFile(jsonFilePath, jsonString, (err) => {
        if (err) {
          console.error("Ошибка при записи в файл: ", err);
        } else {
          console.log("JSON сохранен в файле:", jsonFilePath);
        }
      });
    }
  });
});
