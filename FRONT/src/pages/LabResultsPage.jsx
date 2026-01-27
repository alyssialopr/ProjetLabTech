import React, { useState } from "react";
import UiButton from "../components/UiButton";
import { Smile, Frown, Meh } from "lucide-react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";


export default function LabResultsPage() {
  const navigate = useNavigate();
  const [focusedResultId, setFocusedResultId] = useState(null);

  const handleKeyDown = (e, resultId) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      const resultIds = [1, 2, 3];
      const currentIndex = resultIds.indexOf(resultId);
      if (e.key === "ArrowDown" && currentIndex < resultIds.length - 1) {
        const nextButton = document.querySelector(`[data-result-id="${resultIds[currentIndex + 1]}"]`);
        nextButton?.focus();
      } else if (e.key === "ArrowUp" && currentIndex > 0) {
        const prevButton = document.querySelector(`[data-result-id="${resultIds[currentIndex - 1]}"]`);
        prevButton?.focus();
      }
    }
  };

  const [results] = useState([
    {
      id: 1,
      name: "HDL Cholesterol",
      value: "24",
      resultIcon: <Meh />,
      status: "abnormal",
      color: "border-blue-400",
      bgColor: "bg-blue-50",
      statusColor: "bg-blue-100 text-blue-800",
      icon: "⚠️",
      explanation:
        "Votre niveau de HDL Cholesterol est à un niveau anormal. Il est recommandé de consulter un professionnel de santé pour une évaluation plus approfondie et des conseils personnalisés.",
    },
    {
      id: 2,
      name: "Hemoglobin",
      value: "12.4",
      resultIcon: <Smile />,
      status: "normal",
      color: "border-green-400",
      bgColor: "bg-green-50",
      statusColor: "bg-green-100 text-green-800",
      icon: "✓",
      explanation:
        "Votre niveau de glucose est à un niveau sain. C'est bon signe ! Continuer de maintenir un régime alimentaire équilibré, un exercice régulier et un mode de vie sain.",
    },
    {
      id: 3,
      name: "Glucose",
      value: "9",
      resultIcon: <Frown />,
      status: "abnormal",
      color: "border-yellow-400",
      bgColor: "bg-yellow-50",
      statusColor: "bg-yellow-100 text-yellow-800",
      icon: "⚠️",
      explanation:
        "Votre niveau de glucose est à un niveau sain. Il est recommandé de consulter un professionnel de santé pour une évaluation plus approfondie et des conseils personnalisés.",
    },
  ]);

  return (
    <div className="w-screen min-h-screen bg-raspberry-50">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:bg-purple-600 focus:text-white focus:p-2"
      >
        Aller au contenu principal
      </a>

      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <div className="w-full h-full">
          {/* Header */}
          <Header />

          {/* New Analysis Button */}
          <div className="mt-24 flex justify-end">
            <a
              href="/help"
              className="px-6 py-2 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 transition"
              aria-label="Aide"
            >
              Help
            </a>
          </div>

          {/* Results Summary */}
          <section className="p-6 mb-6" aria-label="Résumé des résultats">
            <div className="flex items-start gap-3 mb-4">
              <button
                onClick={() => navigate("/help")}
                className="w-8 h-8 bg-raspberry-700 rounded flex items-center justify-center text-white text-lg focus:outline-none focus:ring-2 focus:ring-raspberry-700 focus:ring-offset-2 transition"
                aria-label="Accéder à l'aide médicale"
              >
                🏥
              </button>
              <div className="flex-1">
                <h1 className="font-bold text-gray-900 text-2xl">
                  Vos Résultats
                </h1>
              </div>
            </div>

            <div className="space-y-3" role="region" aria-label="Résumé du statut des résultats">
              <div 
                className="flex items-start gap-2 text-green-700 bg-green-50 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition" 
                role="status"
                tabIndex={0}
                aria-label="1 valeur est dans la normale"
              >
                <span className="mt-0.5" aria-hidden="true">✅</span>
                <span className="text-sm">1 valeur est dans la normale.</span>
              </div>

              <div 
                className="flex items-start gap-2 text-green-700 bg-green-50 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition" 
                role="status"
                tabIndex={0}
                aria-label="Bonne nouvelle, toutes les valeurs sont bonnes"
              >
                <span className="mt-0.5" aria-hidden="true">✅</span>
                <span className="text-sm">
                  Bonne nouvelle ! Toutes vos valeurs sont bonnes. Continuez à
                  maintenir un mode de vie sain ! N'oubliez pas de discuter de
                  ces résultats avec votre professionnel de santé lors de votre
                  prochaine visite.
                </span>
              </div>

              <div 
                className="flex items-start gap-2 text-gray-600 bg-gray-50 p-3 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition" 
                role="note"
                tabIndex={0}
                aria-label="Disclaimer: Ce site sert principalement d'information et ne remplace pas un avis médical professionnel"
              >
                <span className="mt-0.5" aria-hidden="true">⚠️</span>
                <span>
                  Disclaimer: Ce site sert principalement d'information - ce
                  n'est pas un outil medical, ne remplace pas un avis medical
                  professionnel.
                </span>
              </div>
            </div>
          </section>

          {/* Results Cards */}
          <main id="main-content" className="space-y-4">
            <h2 className="sr-only">Détails des résultats médicaux - Utilisez les flèches haut/bas pour naviguer entre les résultats</h2>
            {results.map((result) => (
              <article
                key={result.id}
                tabIndex={0}
                data-result-id={result.id}
                onKeyDown={(e) => handleKeyDown(e, result.id)}
                onFocus={() => setFocusedResultId(result.id)}
                onBlur={() => setFocusedResultId(null)}
                className={`border-l-4 ${result.color} bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition ${
                  focusedResultId === result.id ? "ring-2 ring-purple-500 ring-offset-2" : ""
                }`}
                role="region"
                aria-label={`Résultat: ${result.name} - Valeur: ${result.value} - Statut: ${result.status === "normal" ? "Normal" : "Anormal"}`}
              >
                <div className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">
                        {result.name}
                      </h3>
                      <div className="flex items-center">
                        <p className="text-3xl font-bold text-gray-900 mt-1">
                          {result.value}
                        </p>
                        <div
                          className="mx-4"
                          aria-label={
                            result.status === "normal"
                              ? "Résultat normal"
                              : "Résultat anormal"
                          }
                          role="img"
                        >
                          {result.resultIcon}
                        </div>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${result.statusColor}`}
                      aria-label={`Statut: ${
                        result.status === "normal" ? "Normal" : "Anormal"
                      }`}
                    >
                      {result.status === "normal" ? "✓ Normal" : "⚠ Abnormal"}
                    </span>
                  </div>

                  <div className={`${result.bgColor} p-4 rounded-lg`}>
                    <h4 className="font-semibold text-gray-900 text-sm mb-2">
                      Que cela signifie:
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {result.explanation}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </main>

          {/* Footer Buttons */}
          <nav className="flex flex-wrap gap-4 mt-8" aria-label="Navigation des résultats">
            <UiButton bg="raspberry" text="white">
              <a
                href="/"
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current rounded px-2 py-1"
              >
                ← Retour à l'accueil
              </a>
            </UiButton>
            <UiButton bg="raspberry" text="white">
              <button
                onClick={() => {
                  /* Handle PDF export */
                }}
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current rounded px-2 py-1"
                aria-label="Exporter les résultats en PDF"
              >
                ↓ Export en PDF
              </button>
            </UiButton>
          </nav>

          {/* Disclaimer Footer */}
          <footer className="text-xs text-gray-500 text-center mt-6 border-t pt-4">
            <p>
              Cet outil est à but informatif uniquement et ne remplace pas un avis
              médical professionnel.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
