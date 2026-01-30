import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import FooterAnalysis from "../components/FooterAnalisys";
import UiButton from "../components/UiButton";
import TestValueCard from "../components/TestValueCard";

export default function ManualValues() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const tests = state?.tests || [];

  // 🧠 1️⃣ Stockage centralisé des valeurs
  const [values, setValues] = useState({});
  const [loading, setLoading] = useState(false);

  const handleValueChange = (testName, value) => {
  setValues((prev) => ({
    ...prev,
    [testName]: value,
  }));
};


  // 🧠 2️⃣ Récupération des saisies depuis chaque carte
  const handleManualAnalysis = () => {
  setLoading(true);

  try {
    const elements = Object.entries(values).map(([name, data]) => {
      const numericValue = parseFloat(data?.value);
      const hasReference =
        data?.min !== "" &&
        data?.max !== "" &&
        !isNaN(parseFloat(data.min)) &&
        !isNaN(parseFloat(data.max));

      let categorie = "abnormal";
      let explication =
        "Cette valeur mérite une attention particulière.";

      if (
        !isNaN(numericValue) &&
        hasReference &&
        numericValue >= parseFloat(data.min) &&
        numericValue <= parseFloat(data.max)
      ) {
        categorie = "normal";
        explication =
          "La valeur se situe dans la plage de référence indiquée.";
      } else if (!hasReference && !isNaN(numericValue)) {
        categorie = "normal";
        explication =
          "Aucune plage de référence fournie, la valeur semble cohérente.";
      }

      return {
        nom: name,
        taux: data?.value
          ? `${data.value} ${data.unit || ""}`.trim()
          : "-",
        categorie,
        intervalle: hasReference
          ? `${data.min} – ${data.max} ${data.unit || ""}`.trim()
          : "Non renseignée",
        explication,
      };
    });

    const analysisResult = {
      success: true,
      result: {
        elements,
        warning:
          "Analyse manuelle : interprétation simplifiée basée sur les valeurs renseignées.",
      },
    };

    localStorage.setItem(
      "analysisResult",
      JSON.stringify(analysisResult)
    );

    navigate("/results");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-raspberry-50 flex flex-col">
      <Header />

      <main
        id="main-content"
        role="main"
        aria-labelledby="page-title"
        tabIndex={-1}
        className="flex-1 flex justify-center px-4 pt-28 scroll-mt-28"
      >
        <div className="max-w-180 w-full flex flex-col gap-6">

          {/* En-tête */}
          <header className="flex items-start gap-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              aria-label="Revenir à la liste des tests"
              className="focus:outline-none focus:ring-2 focus:ring-raspberry-500 rounded"
            >
              <ArrowLeft
                className="text-raspberry-900"
                aria-hidden="true"
              />
            </button>

            <div>
              <h1
                id="page-title"
                className="text-base font-normal text-raspberry-900"
              >
                Entrez vos valeurs de test
              </h1>

              <p className="text-base font-normal text-raspberry-700">
                Renseignez manuellement les valeurs de votre rapport de laboratoire.
              </p>
            </div>
          </header>

          {/* Liste des tests */}
          <section
            aria-labelledby="test-values-title"
            className="flex flex-col gap-4"
          >
            <h2 id="test-values-title" className="sr-only">
              Formulaire de saisie des valeurs de test
            </h2>

            <ul
              className="flex flex-col gap-4"
              aria-live="polite"
              aria-label="Liste des tests à renseigner"
            >
              {tests.map((test) => (
                <li key={test}>
                  <TestValueCard
                    name={test}
                    onChange={handleValueChange}
                  />
                </li>
              ))}
            </ul>
          </section>

          {/* Bouton final */}
          <UiButton
  bg="raspberry"
  text="white"
  aria-label="Lancer l’analyse des résultats"
  onClick={handleManualAnalysis}
  disabled={loading}
  className={`w-full py-3 text-base ${
    loading ? "opacity-70 cursor-not-allowed" : ""
  }`}
>
  {loading ? "Analyse en cours..." : "Analyser les résultats"}
</UiButton>


        </div>
      </main>

      <FooterAnalysis />
    </div>
  );
}
