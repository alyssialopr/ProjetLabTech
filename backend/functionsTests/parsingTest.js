import { cleanLabReport, extractPdfText } from "../middlesWares/pdfToText.js";

/**
 * Nettoie un compte-rendu biologique PDF brut
 * @param {string} cleaned - texte traité extrait du PDF
 * @returns {string} texte simplifié, prêt pour IA
 */

async function test() {
    
  const pdfPath = "/home/malcolm/ProjetLabTech/backend/comptes-rendus/examin.pdf"
  const text = await extractPdfText(pdfPath);
  const cleaned = cleanLabReport(text);

  console.log(cleaned);
}

test();