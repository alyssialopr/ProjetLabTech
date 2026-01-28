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

  return (
    <div className="min-h-screen bg-raspberry-50 flex flex-col">
      <Header />

<main
  id="main-content"
  tabIndex={-1}
  className="flex-1 flex justify-center px-4 pt-28 scroll-mt-28"
>


        <div className="max-w-180 w-full flex flex-col gap-6">

          <header className="flex items-start gap-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              aria-label="Go back to test list"
              className="focus:outline-none focus:ring-2 focus:ring-raspberry-500 rounded"
            >
              <ArrowLeft
                className="text-raspberry-900"
                aria-hidden="true"
              />
            </button>

            <div>
              <h1 className="text-base font-normal text-raspberry-900">
                Entrez vos valeurs de test
              </h1>
              <p className="text-base font-normal text-raspberry-700">
                Remplissez les valeurs de votre rapport de laboratoire pour chaque test que vous avez ajouté
              </p>
            </div>
          </header>

          <section
            aria-labelledby="test-values-title"
            className="flex flex-col gap-4"
          >
            <h2 id="test-values-title" className="sr-only">
              Formulaire de valeurs de test
            </h2>

            <ul
              className="flex flex-col gap-4"
              aria-live="polite"
            >
              {tests.map((test) => (
                <li key={test}>
                  <TestValueCard name={test} />
                </li>
              ))}
            </ul>
          </section>

          <UiButton
            bg="raspberry"
            text="white"
            className="w-full py-3 text-base"
            onClick={() => navigate("/results")}
          >
            Analyse des résultats
          </UiButton>
        </div>
      </main>

      <FooterAnalysis />
    </div>
  );
}