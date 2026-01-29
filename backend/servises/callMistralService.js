import fetch from "node-fetch";

const PROMPT_TEMPLATE = `
Explique les résultats du compte rendu biologique suivant
en langage simple pour un patient.
commence ta réponse par "Si l'on simplifie".
Écris UNIQUEMENT l'explication.
Écris en texte simple
Ne mets pas smiley.

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
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "mistral-small-latest",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 1000
    })
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error?.message || "Erreur API Mistral");
  }
// console.log(data.choices[0].message.content)
  return data.choices[0].message.content ;
}