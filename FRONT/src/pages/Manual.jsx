import { useState } from "react";
import { X, Plus, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import FooterAnalysis from "../components/FooterAnalisys";
import UiButton from "../components/UiButton";

export default function Manual() {
  const navigate = useNavigate();

  const [testName, setTestName] = useState("");
  const [tests, setTests] = useState([]);

  const commonTests = ["Hemoglobin", "White Blood Cell Count", "Glucose"];

  const addTest = (name) => {
    if (!name.trim()) return;
    setTests((prev) => [...prev, name.trim()]);
    setTestName("");
  };

  const removeTest = (index) => {
    setTests((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-raspberry-50 flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-[640px] w-full flex flex-col gap-6">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-base font-normal text-raspberry-900">
                Build Your Test List
              </h1>
              <p className="text-base font-normal text-raspberry-700">
                Add the tests you want to analyze
              </p>
            </div>

            <button type="button" onClick={() => navigate("/analysis")}>
              <X className="text-raspberry-900" />
            </button>
          </div>

          {/* Add test card */}
          <div className="bg-white rounded-xl border-2 border-raspberry-200 p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-raspberry-900">
                Test Name
              </label>

              <button
                type="button"
                onClick={() => addTest(testName)}
                className="flex items-center gap-1 text-raspberry-700"
              >
                <Plus size={18} />
                <span className="text-sm">Add</span>
              </button>
            </div>

            <input
              value={testName}
              onChange={(e) => setTestName(e.target.value)}
              placeholder="e.g., Hemoglobin, Glucose, etc."
              className="w-full border-2 border-raspberry-200 rounded-lg px-3 py-2 text-sm"
            />

            <div className="flex flex-wrap gap-2">
              {commonTests.map((test) => (
                <button
                  key={test}
                  type="button"
                  onClick={() => addTest(test)}
                  className="px-3 py-1 rounded-full bg-raspberry-100 border border-raspberry-200 text-sm"
                >
                  {test}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl border-2 border-raspberry-200 p-6 flex flex-col gap-4">
            <h2 className="text-sm font-medium text-raspberry-900">
              Your Tests ({tests.length})
            </h2>

            {tests.map((test, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-raspberry-100 border-2 border-raspberry-200 rounded-lg px-3 py-2"
              >
                <span className="text-sm">{test}</span>

                <button type="button" onClick={() => removeTest(index)}>
                  <Trash2 className="text-raspberry-700" size={18} />
                </button>
              </div>
            ))}
          </div>

          {tests.length > 0 && (
            <UiButton
              bg="raspberry"
              text="white"
              onClick={() => navigate("/manual/values", { state: { tests } })}
              className="w-full py-3 text-base"
            >
              Next: Enter Values
            </UiButton>
          )}
        </div>
      </main>

      <FooterAnalysis />
    </div>
  );
}
