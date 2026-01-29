import { extractPdfText, cleanLabReport } from "../servises/pdfToTextService.js";
import { generateTextFromPdf } from "../servises/callMistralService.js";

export async function analysePdf(req, res, next) {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "PDF manquant" });
    }

    const rawText = await extractPdfText(req.file.buffer);
    const cleanedText = cleanLabReport(rawText);
    const aiResponse = await generateTextFromPdf(cleanedText);

    res.json({
      success: true,
      result: aiResponse
    });

  } catch (err) {
    next(err);
  }
}
