import { useNavigate } from "react-router-dom";
import { UploadCloud, Edit3 } from "lucide-react";
import Header from "../components/Header";
import FooterAnalysis from "../components/FooterAnalisys";
import Card from "../components/Card";

export default function Analysis() {
  const navigate = useNavigate();

  const handleUpload = () => navigate("/upload");
  const handleManual = () => navigate("/manual");

  return (
    <div className="min-h-screen bg-raspberry-50 flex flex-col">
      <Header />

      <main
        id="main-content"
        className="
          flex-1
          flex flex-col items-center justify-center
          gap-6
          px-4
          text-center
          pt-28
        "
      >
        <h1 className="text-4xl font-semibold text-raspberry-900">
          How would you like to start?
        </h1>

        <p className="text-base font-normal text-raspberry-700 max-w-xl">
          Upload your lab report for instant analysis, or manually enter your test results
        </p>

        <div
          className="flex flex-col sm:flex-row gap-6 mt-6"
          role="group"
          aria-label="Choose how to start your analysis"
        >
          <Card
            icon={<UploadCloud size={48} className="text-raspberry-700" />}
            title="Upload Your Lab Report"
            description="PDF, CSV, TXT, or images — we'll analyze it for you"
            onClick={handleUpload}
          />

          <Card
            icon={<Edit3 size={48} className="text-raspberry-700" />}
            title="Enter Results Manually"
            description="Build your own test list and fill in your values"
            onClick={handleManual}
          />
        </div>
      </main>

      <FooterAnalysis />
    </div>
  );
}
