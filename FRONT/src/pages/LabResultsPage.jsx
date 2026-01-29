import React, { useState } from "react";
import UiButton from "../components/UiButton";
import { Smile, Frown, Meh } from "lucide-react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export default function LabResultsPage() {
  const navigate = useNavigate();
  const [focusedResultId, setFocusedResultId] = useState(null);

  const handlePDFExport = async () => {
    try {
      // Créer un élément temporaire pour l'export
      const exportElement = document.createElement("div");
      exportElement.style.position = "absolute";
      exportElement.style.left = "-9999px";
      exportElement.style.backgroundColor = "#ffffff";
      exportElement.style.padding = "30px";
      exportElement.style.width = "210mm";
      exportElement.style.fontFamily = "Arial, sans-serif";
      exportElement.style.lineHeight = "1.6";
      exportElement.style.color = "#333333";
      
      // Créer un titre
      const title = document.createElement("h1");
      title.textContent = "Résultats Médicaux";
      title.style.fontSize = "28px";
      title.style.fontWeight = "bold";
      title.style.marginBottom = "10px";
      title.style.color = "#1f2937";
      title.style.borderBottom = "3px solid #7c3aed";
      title.style.paddingBottom = "10px";
      exportElement.appendChild(title);
      
      // Ajouter la date
      const dateElement = document.createElement("p");
      dateElement.textContent = `Date d'export: ${new Date().toLocaleDateString("fr-FR")}`;
      dateElement.style.marginBottom = "30px";
      dateElement.style.fontSize = "13px";
      dateElement.style.color = "#666666";
      exportElement.appendChild(dateElement);
      
      // Copier la section résumé
      const resultsSection = document.querySelector("[aria-label='Résumé des résultats']");
      if (resultsSection) {
        const summaryClone = resultsSection.cloneNode(true);
        // Ajouter du style au résumé
        summaryClone.style.marginBottom = "30px";
        summaryClone.style.padding = "15px";
        summaryClone.style.backgroundColor = "#f9fafb";
        summaryClone.style.borderRadius = "8px";
        
        const summaryTitle = summaryClone.querySelector("h1");
        if (summaryTitle) {
          summaryTitle.style.fontSize = "18px";
          summaryTitle.style.marginBottom = "15px";
        }
        
        exportElement.appendChild(summaryClone);
      }
      
      // Ajouter un titre pour les résultats détaillés
      const detailsTitle = document.createElement("h2");
      detailsTitle.textContent = "Résultats Détaillés";
      detailsTitle.style.fontSize = "20px";
      detailsTitle.style.fontWeight = "bold";
      detailsTitle.style.marginTop = "30px";
      detailsTitle.style.marginBottom = "20px";
      detailsTitle.style.color = "#1f2937";
      exportElement.appendChild(detailsTitle);
      
      // Copier les cartes de résultats avec meilleure mise en forme
      const mainContent = document.querySelector("#main-content");
      if (mainContent) {
        const articles = mainContent.querySelectorAll("article");
        articles.forEach((article) => {
          const articleClone = article.cloneNode(true);
          
          // Appliquer des styles personnalisés
          articleClone.style.marginBottom = "20px";
          articleClone.style.padding = "20px";
          articleClone.style.border = "1px solid #e5e7eb";
          articleClone.style.borderRadius = "8px";
          articleClone.style.pageBreakInside = "avoid";
          articleClone.style.boxShadow = "0 1px 3px rgba(0,0,0,0.1)";
          
          // Styliser les en-têtes des résultats
          const h3 = articleClone.querySelector("h3");
          if (h3) {
            h3.style.fontSize = "16px";
            h3.style.marginBottom = "10px";
            h3.style.color = "#1f2937";
          }
          
          // Styliser les valeurs
          const values = articleClone.querySelectorAll("p");
          values.forEach((p) => {
            if (p.textContent.match(/^\d+(\.\d+)?$/)) {
              p.style.fontSize = "28px";
              p.style.fontWeight = "bold";
              p.style.color = "#7c3aed";
            }
          });
          
          // Styliser les badges de statut
          const badges = articleClone.querySelectorAll("span");
          badges.forEach((badge) => {
            if (badge.textContent.includes("Normal") || badge.textContent.includes("Abnormal")) {
              badge.style.display = "inline-block";
              badge.style.padding = "8px 12px";
              badge.style.borderRadius = "20px";
              badge.style.fontSize = "12px";
              badge.style.fontWeight = "bold";
              
              if (badge.textContent.includes("Normal")) {
                badge.style.backgroundColor = "#d1fae5";
                badge.style.color = "#065f46";
              } else {
                badge.style.backgroundColor = "#fef3c7";
                badge.style.color = "#92400e";
              }
            }
          });
          
          // Styliser les explications
          const explanations = articleClone.querySelectorAll("[class*='bg-']");
          explanations.forEach((exp) => {
            exp.style.backgroundColor = "#f3f4f6";
            exp.style.padding = "15px";
            exp.style.borderRadius = "6px";
            exp.style.marginTop = "15px";
            exp.style.fontSize = "13px";
          });
          
          exportElement.appendChild(articleClone);
        });
      }
      
      // Ajouter un pied de page
      const footer = document.createElement("div");
      footer.style.marginTop = "40px";
      footer.style.paddingTop = "20px";
      footer.style.borderTop = "1px solid #e5e7eb";
      footer.style.fontSize = "11px";
      footer.style.color = "#666666";
      footer.innerHTML = `
        <p style="margin: 5px 0;"><strong>Avis Important:</strong> Ce document à titre informatif uniquement.</p>
        <p style="margin: 5px 0;">Il ne remplace pas un avis médical professionnel.</p>
        <p style="margin: 5px 0;">Consultez toujours un professionnel de santé pour interpréter vos résultats.</p>
      `;
      exportElement.appendChild(footer);
      
      document.body.appendChild(exportElement);

      const canvas = await html2canvas(exportElement, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
        allowTaint: true,
        ignoreElements: (element) => {
          return element.tagName === "SCRIPT" || element.tagName === "STYLE";
        },
      });

      document.body.removeChild(exportElement);

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const imgWidth = 210; // Width of A4 in mm
      const pageHeight = 297; // Height of A4 in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("Resultats_Medicaux.pdf");
    } catch (error) {
      console.error("Erreur lors de l'export PDF:", error);
      alert("Erreur lors de l'export PDF: " + error.message);
    }
  };

  const handleKeyDown = (e, resultId) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      const resultIds = [1, 2, 3];
      const currentIndex = resultIds.indexOf(resultId);
      if (e.key === "ArrowDown" && currentIndex < resultIds.length - 1) {
        const nextButton = document.querySelector(
          `[data-result-id="${resultIds[currentIndex + 1]}"]`,
        );
        nextButton?.focus();
      } else if (e.key === "ArrowUp" && currentIndex > 0) {
        const prevButton = document.querySelector(
          `[data-result-id="${resultIds[currentIndex - 1]}"]`,
        );
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
          <Header />

      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <div className="w-full h-full">
          {/* Header */}

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

            <div
              className="space-y-3"
              role="region"
              aria-label="Résumé du statut des résultats"
            >
              <div
                className="flex items-start gap-2 text-green-700 bg-green-50 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition"
                role="status"
                tabIndex={0}
                aria-label="1 valeur est dans la normale"
              >
                <span className="mt-0.5" aria-hidden="true">
                  ✅
                </span>
                <span className="text-sm">1 valeur est dans la normale.</span>
              </div>

              <div
                className="flex items-start gap-2 text-green-700 bg-green-50 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition"
                role="status"
                tabIndex={0}
                aria-label="Bonne nouvelle, toutes les valeurs sont bonnes"
              >
                <span className="mt-0.5" aria-hidden="true">
                  ✅
                </span>
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
                <span className="mt-0.5" aria-hidden="true">
                  ⚠️
                </span>
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
            <h2 className="sr-only">
              Détails des résultats médicaux - Utilisez les flèches haut/bas
              pour naviguer entre les résultats
            </h2>
            {results.map((result) => (
              <article
                key={result.id}
                tabIndex={0}
                data-result-id={result.id}
                onKeyDown={(e) => handleKeyDown(e, result.id)}
                onFocus={() => setFocusedResultId(result.id)}
                onBlur={() => setFocusedResultId(null)}
                className={`border-l-4 ${result.color} bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition ${
                  focusedResultId === result.id
                    ? "ring-2 ring-purple-500 ring-offset-2"
                    : ""
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
          <nav
            className="flex flex-wrap gap-4 mt-8"
            aria-label="Navigation des résultats"
          >
            <UiButton bg="raspberry" text="white">
              <a
                href="/"
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current rounded px-2 py-1"
              >
                ← Retour à l'accueil
              </a>
            </UiButton>
            <UiButton
              bg="raspberry"
              text="white"
              onClick={handlePDFExport}
              aria-label="Exporter les résultats en PDF"
            >
              ↓ Export en PDF
            </UiButton>
          </nav>

          {/* Disclaimer Footer */}
          <footer className="text-xs text-gray-500 text-center mt-6 border-t pt-4">
            <p>
              Cet outil est à but informatif uniquement et ne remplace pas un
              avis médical professionnel.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
