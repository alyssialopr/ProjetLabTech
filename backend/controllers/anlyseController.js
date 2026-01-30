import { extractPdfText, cleanLabReport } from "../servises/pdfToTextService.js";
import { generateTextFromPdf } from "../servises/callMistralService.js";


function extractJsonSafe(text) {
  if (!text) return null;

  try {
    let clean = text
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();

    const start = clean.indexOf("{");
    const end = clean.lastIndexOf("}");

    if (start === -1 || end === -1) return null;

    clean = clean.slice(start, end + 1);

    clean = clean.replace(/,\s*}/g, "}");
    clean = clean.replace(/,\s*]/g, "]");
    clean = clean.replace(/[\u0000-\u001F\u007F-\u009F]/g, " ");

    return JSON.parse(clean);
  } catch (e) {
    console.error("❌ JSON PARSE FAILED");
    return null;
  }
}

export async function analysePdf(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "PDF manquant" });
    }

    const rawText = await extractPdfText(req.file.buffer);
    const cleanedText = cleanLabReport(rawText);

    const MAX_CHARS = 5000;
    const safeText = cleanedText.slice(0, MAX_CHARS);

    console.log("📄 PDF LENGTH:", cleanedText.length);
    console.log("✂️ SENT TO IA:", safeText.length);

    const aiResponse = await generateTextFromPdf(safeText);
    console.log("🟦 Réponse IA reçue");

    const parsed = extractJsonSafe(aiResponse);

    if (!parsed) {
      console.warn("⚠️ JSON IA invalide – fallback activé");

      return res.json({
        success: true,
        result: {
          elements: [],
          warning:
            "Analyse partielle : certains résultats n'ont pas pu être interprétés automatiquement.",
        },
      });
    }

    let elements = [];

    if (Array.isArray(parsed)) {
      elements = parsed.slice(0, 8);
    } else if (parsed.elements && Array.isArray(parsed.elements)) {
      elements = parsed.elements.slice(0, 8);
    } else if (typeof parsed === "object") {
      elements = [parsed];
    }

    res.json({
      success: true,
      result: { elements },
    });
  } catch (err) {
    console.error("ANALYSE ERROR:", err);
    res.status(500).json({
      error: "Erreur pendant l’analyse",
      details: err.message,
    });
  }
}
