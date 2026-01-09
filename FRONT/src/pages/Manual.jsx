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

  const handleSubmit = (e) => {
    e.preventDefault();
    addTest(testName);
  };

  const removeTest = (index) => {
    setTests((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-raspberry-50 flex flex-col">
      <Header />

      <main
        id="main-content"
        className="flex-1 flex items-center justify-center px-4"
      >
        <div className="max-w-[640px] w-full flex flex-col gap-6">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-base font-normal text-raspberry-900">
                Build Your Test List
              </h1>
              <p className="text-base font-normal text-raspberry-700">
                Add the tests you want to analyze
              </p>
            </div>

            <button
              type="button"
              onClick={() => navigate("/analysis")}
              aria-label="Close and return to analysis"
              className="focus:outline-none focus:ring-2 focus:ring-raspberry-500 rounded"
            >
              <X className="text-raspberry-900" aria-hidden="true" />
            </button>
          </div>

          <section
            className="bg-white rounded-xl border-2 border-raspberry-200 p-6 flex flex-col gap-4"
            aria-labelledby="add-test-title"
          >
            <h2
              id="add-test-title"
              className="text-sm font-medium text-raspberry-900"
            >
              Test name
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <label htmlFor="test-name" className="sr-only">
                  Enter a test name
                </label>

                <input
                  id="test-name"
                  value={testName}
                  onChange={(e) => setTestName(e.target.value)}
                  placeholder="e.g., Hemoglobin, Glucose"
                  className="
          flex-1
          border-2 border-raspberry-200
          rounded-lg
          px-3 py-2
          text-sm
          focus:outline-none
          focus:ring-2
          focus:ring-raspberry-500
        "
                />

                <button
                  type="submit"
                  aria-label="Add test"
                  className="
          flex items-center gap-1
          text-raspberry-700
          px-3 py-2
          rounded-lg
          focus:outline-none
          focus:ring-2
          focus:ring-raspberry-500
        "
                >
                  <Plus size={18} aria-hidden="true" />
                  <span className="text-sm">Add</span>
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {commonTests.map((test) => (
                  <button
                    key={test}
                    type="button"
                    onClick={() => addTest(test)}
                    aria-label={`Add ${test}`}
                    className="
            px-3 py-1
            rounded-full
            bg-raspberry-100
            border border-raspberry-200
            text-sm
            focus:outline-none
            focus:ring-2
            focus:ring-raspberry-500
          "
                  >
                    {test}
                  </button>
                ))}
              </div>
            </form>
          </section>

          <section
            className="bg-white rounded-xl border-2 border-raspberry-200 p-6 flex flex-col gap-4"
            aria-labelledby="your-tests-title"
          >
            <h2
              id="your-tests-title"
              className="text-sm font-medium text-raspberry-900"
            >
              Your Tests ({tests.length})
            </h2>

            <ul aria-live="polite" className="flex flex-col gap-2">
              {tests.map((test, index) => (
                <li
                  key={`${test}-${index}`}
                  className="flex items-center justify-between bg-raspberry-100 border-2 border-raspberry-200 rounded-lg px-3 py-2"
                >
                  <span className="text-sm">{test}</span>

                  <button
                    type="button"
                    onClick={() => removeTest(index)}
                    aria-label={`Remove ${test}`}
                    className="focus:outline-none focus:ring-2 focus:ring-raspberry-500 rounded"
                  >
                    <Trash2
                      className="text-raspberry-700"
                      size={18}
                      aria-hidden="true"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </section>

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
