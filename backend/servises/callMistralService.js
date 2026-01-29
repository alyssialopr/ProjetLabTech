import fetch from "node-fetch";

const PROMPT_TEMPLATE =
  `
écris UNIQUEMENT un json qui renvoie le nom de l'élément, son taux, une petite explication
tu préciseras pour chaque élément la catégirie "corect", "trop élevé", "trop bas"
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
  let dataJson = data.choices[0].message.content
  .replace(/^```json\s*\[/, "")
  .replace(/\]\s*```$/, "");
    console.log(dataJson)
  return dataJson;
}