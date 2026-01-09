import React, { useState } from "react";
import UiButton from "../components/UiButton";
import { Smile, Frown, Meh } from "lucide-react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";


export default function LabResultsPage() {
  const navigate = useNavigate();

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
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <div className="w-full h-full">
          {/* Header */}
          <Header />

          {/* New Analysis Button */}
          <div className="mt-24 flex justify-end">
            <button className="px-6 py-2 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition flex items-center gap-2">
              <a href="/help">
                Help
              </a>
            </button>
          </div>

          {/* Results Summary */}
          <div className="p-6 mb-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 bg-raspberry-700 rounded flex items-center justify-center text-white text-lg">
                🏥
              </div>
              <div className="flex-1">
                <h2 className="font-bold text-gray-900 text-lg">
                  Vos Résultats
                </h2>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-2 text-green-700 bg-green-50 p-3 rounded-lg">
                <span className="mt-0.5">✅</span>
                <span className="text-sm">1 valeur est dans la normale.</span>
              </div>

              <div className="flex items-start gap-2 text-green-700 bg-green-50 p-3 rounded-lg">
                <span className="mt-0.5">✅</span>
                <span className="text-sm">
                  Bonne nouvelle ! Toutes vos valeurs sont bonnes. Continuez à
                  maintenir un mode de vie sain ! N'oubliez pas de discuter de
                  ces résultats avec votre professionnel de santé lors de votre
                  prochaine visite.
                </span>
              </div>

              <div className="flex items-start gap-2 text-gray-600 bg-gray-50 p-3 rounded-lg text-xs">
                <span className="mt-0.5">⚠️</span>
                <span>
                  Disclaimer: Ce site sert principalement d'information - ce
                  n'est pas un outil medical, ne remplace pas un avis medical
                  professionnel.
                </span>
              </div>
            </div>
          </div>

          {/* Results Cards */}
          <div className="space-y-4">
            {results.map((result) => (
              <div
                key={result.id}
                className={`border-l-4 ${result.color} bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition`}
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
                        <p className="mx-4">{result.resultIcon}</p>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${result.statusColor}`}
                    >
                      {result.status === "normal" ? "✓ Normal" : "⚠ Abnormal"}
                    </span>
                  </div>

                  <div className={`${result.bgColor} p-4 rounded-lg`}>
                    <h4 className="font-semibold text-gray-900 text-sm mb-2">
                      What this means:
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {result.explanation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Buttons */}
          <div className="flex gap-4 mt-8">
            <UiButton bg="raspberry" text="white">
              <a href="/">← Retour à l'accueil</a>
            </UiButton>
            <UiButton bg="raspberry" text="white">
              <a href="/">↓ Export en PDF</a>
            </UiButton>
            {/* <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 text-white font-semibold rounded-lg transition">
              ↓ Export en PDF
            </button> */}
          </div>

          {/* Disclaimer Footer */}
          <p className="text-xs text-gray-500 text-center mt-6 border-t pt-4">
            Cet outil est à but informatif uniquement et ne remplace pas un avis
            médical professionnel.
          </p>
        </div>
      </div>
    </div>
  );
}
