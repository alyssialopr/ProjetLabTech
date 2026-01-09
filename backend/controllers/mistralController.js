import fetch from 'node-fetch';

const PROMPT_TEMPLATE = `
combien font 2 plus 2 ?:
"""
{{TEXT_FROM_PDF}}
"""
`;

export async function generateText(req, res) {
  const { pdfText } = req.body;

  const prompt = PROMPT_TEMPLATE.replace('{{TEXT_FROM_PDF}}', pdfText);

  try {
    console.log('🔑 Clé API présente:', !!process.env.API_KEY);
    console.log('📝 Prompt:', prompt.substring(0, 100) + '...');

    const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'mistral-small-latest',
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 1000
      }),
    });

    console.log('📡 Status:', response.status);
    
    const data = await response.json();
    console.log('📦 Réponse:', JSON.stringify(data, null, 2));

    // Vérifier si la requête a réussi
    if (!response.ok) {
      console.error('❌ Erreur API:', data);
      return res.status(response.status).json({ 
        error: 'Erreur API Mistral', 
        details: data,
        status: response.status 
      });
    }

    // Vérifier la structure de la réponse
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      console.error('❌ Structure de réponse inattendue:', data);
      return res.status(500).json({ 
        error: 'Structure de réponse invalide', 
        data 
      });
    }

    res.json({
      response: data.choices[0].message.content,
      usage: data.usage
    });

  } catch (err) {
    console.error('❌ Erreur complète:', err);
    console.error('Stack:', err.stack);
    res.status(500).json({ 
      error: 'Erreur serveur', 
      message: err.message,
      type: err.constructor.name 
    });
  }
}