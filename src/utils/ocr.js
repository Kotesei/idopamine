"use strict";
import Tesseract from "tesseract.js";
import * as handle from "./utils.js";
import storeData, { updateStatus } from "./storeData.js";
import { dates } from "./storeData.js";
import { preprocessImage, fileToDataUrl } from "./processImages.js";

export default async function runOCR() {
  // Image input
  const fileInput = document.getElementById("imageInput");

  if (fileInput.files.length === 0) {
    alert("Please select at least one image file.");
    return;
  }

  const files = fileInput.files;

  // Loop through each image file
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const imgUrl = await fileToDataUrl(file);

    const preprocessedImageUrl = await preprocessImage(imgUrl);

    try {
      const {
        data: { text },
      } = await Tesseract.recognize(preprocessedImageUrl, "eng", {
        logger: (m) => console.log(m.progress),
        tessedit_ocr_engine_mode: Tesseract.OEM.LSTM_ONLY,
      });

      // Split text by line
      const lines = text.split("\n").filter((line) => line.trim() !== "");

      const date = lines[lines.findIndex((e) => e.includes("SHOW TODAY")) + 1]
        .split(",")[1]
        .trim();

      let screenTime =
        lines[lines.findIndex((e) => e.includes("SHOW TODAY")) + 2];
      const time =
        lines[lines.findIndex((e) => e.includes("SHOW CATEGORIES")) - 1];
      let categories =
        lines[lines.findIndex((e) => e.includes("SHOW CATEGORIES")) - 2];

      categories = handle.splitWithAmpersand(categories);
      screenTime = handle.fixTimeFormat(screenTime);

      const timeArray = time
        .split("m") // Split by 'm' (minutes)
        .map((part) => part.trim())
        .filter((values) => values.length > 0);

      timeArray.forEach((time, i) => {
        timeArray[i] = time + "m";
        timeArray[i] = handle.fixTimeFormat(timeArray[i]);
      });

      const screenUsage = {
        Date: date,
        "Screen Time": screenTime,
        Categories: [],
      };

      categories.forEach((category, i) => {
        screenUsage.Categories.push({ [category]: timeArray[i] });
      });
      const index = dates.findIndex((entry) => entry.Date === date);
      if (index !== -1) {
        dates[index] = screenUsage;
      } else {
        storeData(screenUsage);
      }
    } catch (error) {
      console.error("OCR Error:", error);
    }
  }
  const results = updateStatus();
  return { dates, results };
}
