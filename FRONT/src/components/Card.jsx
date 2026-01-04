export default function Card({ icon, title, description, className, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        w-[480px] h-[248.8px]
        bg-white
        border-2 border-raspberry-700
        rounded-xl
        shadow-md
        flex flex-col items-center justify-center
        p-6
        cursor-pointer
        transition
        hover:shadow-lg

        focus:outline-none
        focus-visible:ring-4
        focus-visible:ring-raspberry-500
        focus-visible:ring-offset-2

        ${className || ""}
      `}
      aria-label={title}
    >
      {/* Icône décorative */}
      <div className="mb-4" aria-hidden="true">
        {icon}
      </div>

      {/* Texte */}
      <h2 className="text-xl font-semibold text-raspberry-900 mb-2 text-center">
        {title}
      </h2>

      <p className="text-base font-normal text-raspberry-700 text-center max-w-[400px]">
        {description}
      </p>
    </button>
  );
}
