import { useState } from "react";
import TextSizeControl from "./TextSizeControl";
import UiButton from "./UiButton";

export default function Header() {
  const [fontSize, setFontSize] = useState(16);

  return (
    <>
      <a
        href="#main-content"
        className="
          absolute
          top-0
          left-0
          z-[100]
          -translate-y-full
          focus:translate-y-0
          transition-transform
          bg-white
          text-raspberry-900
          px-4
          py-2
          rounded-br-md
          shadow-lg
          focus:outline-none
          focus:ring-2
          focus:ring-raspberry-500
        "
      >
        Aller au contenu principal
      </a>

      <header
        className="
          fixed top-0 left-0 w-full
          flex items-center justify-between
          px-6 py-4
          bg-white
          shadow-md
          border-b-2 border-raspberry-700
          z-50
        "
      >
        <div className="flex items-center gap-3">
          <img
            src="/leogo.svg"
            alt="Lab Result Assistant"
            className="h-10 w-10"
          />

          <div
            className="flex flex-col text-left"
            style={{ fontSize: `${fontSize}px` }}
          >
            <p className="text-xl font-medium text-raspberry-900">
              Assistant d’analyse de résultats médicaux
            </p>

            <p className="text-sm text-raspberry-700">
              Une analyse simple et claire de vos données de santé
            </p>
          </div>
        </div>

        <nav
          className="flex items-center gap-4"
          aria-label="Actions de l’en-tête"
        >
          <TextSizeControl
            fontSize={fontSize}
            setFontSize={setFontSize}
          />

          <UiButton
            bg="raspberry"
            text="white"
            onClick={() => console.log("Nouvelle analyse")}
          >
            Nouvelle analyse
          </UiButton>
        </nav>
      </header>
    </>
  );
}
