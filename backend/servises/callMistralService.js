import fetch from "node-fetch";

const PROMPT_TEMPLATE = `
Tu dois répondre STRICTEMENT avec un JSON valide et COMPLET.
Aucun texte avant ou après.

RÈGLES ABSOLUES :
- Le JSON doit être entièrement fermé
- Tous les objets doivent être complets
- Ne JAMAIS couper une valeur
- Si la réponse est trop longue, résume les explications MAIS termine toujours le JSON
- Ne mets AUCUN commentaire

CONTRAINTE CRITIQUE :
- Tu dois retourner AU MAXIMUM 8 éléments dans "elements"
- Si le document contient plus d’analyses, ignore-les
- Ne dépasse jamais cette limite

Format OBLIGATOIRE :

{
  "elements": [
    {
      "nom": "...",
      "taux": "...",
      "intervalle": "...",
      "categorie": "correct | trop élevé | trop bas",
      "explication": "..."
    }
  ]
}

Analyse le texte suivant :
"""
{{TEXT_FROM_PDF}}
"""
`;

export async function generateTextFromPdf(pdfText) {
  const prompt = PROMPT_TEMPLATE.replace("{{TEXT_FROM_PDF}}", pdfText);

  const response = await fetch("https://api.mistral.ai/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "mistral-small-latest",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.2,
      max_tokens: 3000,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error?.message || "Erreur API Mistral");
  }

  let content = data.choices?.[0]?.message?.content || "";

  content = content
    .replace(/```json/gi, "")
    .replace(/```/g, "")
    .trim();

  console.log("🧠 IA RAW LENGTH:", content.length);

  return content;
}
