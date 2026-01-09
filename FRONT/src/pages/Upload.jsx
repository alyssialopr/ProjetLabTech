import { useRef, useState } from "react";
import { X, UploadCloud, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import FooterAnalysis from "../components/FooterAnalisys";
import Card from "../components/Card";
import UiButton from "../components/UiButton";

export default function Upload() {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [file, setFile] = useState(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
    }
  };

  const removeFile = () => {
    setFile(null);
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  return (
    <div className="min-h-screen bg-raspberry-50 flex flex-col">
      <Header />

      <main
        id="main-content"
        className="flex-1 flex items-center justify-center px-4"
      >
        <div className="max-w-[560px] w-full flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h1 className="text-base font-normal text-raspberry-900">
              Téléchargez votre rapport de laboratoire
            </h1>

            <button
              type="button"
              onClick={() => navigate("/analysis")}
              aria-label="Fermer la page de téléchargement"
              className="
                p-2
                rounded
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-raspberry-500
              "
            >
              <X className="text-raspberry-900" aria-hidden="true" />
            </button>
          </div>

          <Card
            onClick={!file ? handleClick : undefined}
            className="w-full h-[248px]"
            icon={
              file ? (
                <CheckCircle
                  size={48}
                  className="text-green-600"
                  aria-hidden="true"
                />
              ) : (
                <UploadCloud
                  size={48}
                  className="text-raspberry-700"
                  aria-hidden="true"
                />
              )
            }
            title={
              file
                ? "Fichier téléchargé avec succès"
                : "Téléversez votre fichier"
            }
            description={
              file
                ? file.name
                : "Appuyez sur Entrée ou Espace pour parcourir les fichiers. Formats pris en charge : PDF, CSV, TXT, PNG, JPG"
            }
          />

          <input
            ref={inputRef}
            id="file-upload"
            type="file"
            accept=".pdf,.csv,.txt,.png,.jpg,.jpeg"
            onChange={handleFileChange}
            className="sr-only"
            aria-describedby="file-upload-hint"
          />

          <p id="file-upload-hint" className="sr-only">
            Formats pris en charge : PDF, CSV, TXT, PNG, JPG
          </p>

          {file && (
            <div className="flex justify-center">
              <button
                type="button"
                onClick={removeFile}
                className="
                  text-sm
                  text-raspberry-700
                  underline
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-raspberry-500
                "
              >
                Supprimer le fichier
              </button>
            </div>
          )}

          {file && (
            <UiButton
              bg="raspberry"
              text="white"
              onClick={() => navigate("/results")}
              className="w-full py-3 text-base"
            >
              Analyser ce rapport
            </UiButton>
          )}
        </div>
      </main>

      <FooterAnalysis />
    </div>
  );
}
