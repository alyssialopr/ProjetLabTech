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

      <main className="flex-1 flex justify-center px-4 pt-28">
        <div className="max-w-[720px] w-full flex flex-col gap-6">

          {/* Header */}
          <div className="flex items-start gap-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="text-raspberry-900" />
            </button>

            <div>
              <h1 className="text-base font-normal text-raspberry-900">
                Enter Your Test Values
              </h1>
              <p className="text-base font-normal text-raspberry-700">
                Fill in the values from your lab report
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-4">
            {tests.map((test) => (
              <TestValueCard key={test} name={test} />
            ))}
          </div>

          {/* Analyze */}
          <UiButton
            bg="raspberry"
            text="white"
            className="w-full py-3 text-base"
            onClick={() => navigate("/results")}
          >
            Analyze Results
          </UiButton>
        </div>
      </main>

      <FooterAnalysis />
    </div>
  );
}
