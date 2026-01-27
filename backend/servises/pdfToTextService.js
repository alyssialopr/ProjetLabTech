import { extractText, getDocumentProxy } from "unpdf";
import fs from "fs/promises";

/**
 * Extrait tout le texte d’un PDF
 * @param {Buffer|string} input - Buffer du PDF ou chemin du fichier
 * @returns {Promise<string>} texte brut du PDF
 */
export async function extractPdfText(input) {
  let buffer;

  if (Buffer.isBuffer(input)) {
    buffer = input;
  } else if (typeof input === "string") {
    buffer = await fs.readFile(input);
  } else {
    throw new Error("Entrée invalide : Buffer ou chemin attendu");
  }

  // unpdf attend un Uint8Array
  const pdf = await getDocumentProxy(new Uint8Array(buffer));

  const { text } = await extractText(pdf, {
    mergePages: true // tout le texte en une seule string
  });

  return text;
}

export function cleanLabReport(text) {
    if (!text) return "";

    let cleaned = text;

    cleaned = cleaned.replace(/[.]{2,}/g, "==>")
    cleaned = cleaned.replace(/[_-]{2,}/g, "\n ")

    return cleaned;
}