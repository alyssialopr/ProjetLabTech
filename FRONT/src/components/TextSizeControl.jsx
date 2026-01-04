import UiButton from "./UiButton";

export default function TextSizeControl({ fontSize, setFontSize }) {
  const decrease = () => setFontSize((s) => Math.max(14, s - 2));
  const increase = () => setFontSize((s) => Math.min(24, s + 2));

  return (
    <UiButton
      bg="raspberryLight"
      text="black"
      ariaLabel="Contrôle de la taille du texte"
      className="flex items-center gap-3 px-3"
    >
      <span
        role="button"
        tabIndex={0}
        aria-label="Réduire la taille du texte"
        onClick={decrease}
        onKeyDown={(e) => e.key === "Enter" && decrease()}
        className="cursor-pointer select-none font-bold"
      >
        −
      </span>

      <span
        className="min-w-[40px] text-center text-sm font-medium"
        aria-live="polite"
      >
        {fontSize}px
      </span>

      <span
        role="button"
        tabIndex={0}
        aria-label="Augmenter la taille du texte"
        onClick={increase}
        onKeyDown={(e) => e.key === "Enter" && increase()}
        className="cursor-pointer select-none font-bold"
      >
        +
      </span>
    </UiButton>
  );
}
