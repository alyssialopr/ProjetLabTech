export default function TestValueCard({ name }) {
  const safeId = name.replace(/\s+/g, "-").toLowerCase();

  return (
    <fieldset
      className="
        bg-white
        rounded-xl
        border-2 border-raspberry-200
        p-6
        flex flex-col gap-4
        shadow-sm
      "
      aria-labelledby={`${safeId}-title`}
    >
      <legend className="sr-only">{name}</legend>

      <h2
        id={`${safeId}-title`}
        className="text-sm font-semibold text-raspberry-900"
      >
        {name}
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label
            htmlFor={`${safeId}-value`}
            className="text-sm font-medium text-raspberry-900"
          >
            Votre valeur
          </label>

          <input
            id={`${safeId}-value`}
            type="text"
            inputMode="decimal"
            placeholder="e.g., 14.2"
            className="
              border-2 border-raspberry-200
              rounded-lg
              px-3 py-2
              text-sm
              focus:outline-none
              focus:ring-2
              focus:ring-raspberry-500
            "
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor={`${safeId}-unit`}
            className="text-sm font-medium text-raspberry-900"
          >
            Unité
          </label>

          <select
            id={`${safeId}-unit`}
            defaultValue=""
            className="
              border-2 border-raspberry-200
              rounded-lg
              px-3 py-2
              text-sm
              bg-white
              focus:outline-none
              focus:ring-2
              focus:ring-raspberry-500
            "
          >
            <option value="" disabled>
              Selectionnez une unité
            </option>
            <option value="g/dL">g/dL</option>
            <option value="mg/dL">mg/dL</option>
            <option value="mmol/L">mmol/L</option>
            <option value="µmol/L">µmol/L</option>
            <option value="10^9/L">10⁹/L</option>
            <option value="U/L">U/L</option>
            <option value="%">%</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium text-raspberry-900">
          Plage de référence (optionnel)
        </span>

        <div className="flex items-center gap-2">
          <label htmlFor={`${safeId}-min`} className="sr-only">
            Valeur minimale de référence
          </label>

          <input
            id={`${safeId}-min`}
            type="text"
            placeholder="Min"
            className="
              w-full
              border-2 border-raspberry-200
              rounded-lg
              px-3 py-2
              text-sm
              focus:outline-none
              focus:ring-2
              focus:ring-raspberry-500
            "
          />

          <span className="text-sm text-raspberry-700" aria-hidden="true">
            à
          </span>

          <label htmlFor={`${safeId}-max`} className="sr-only">
            Valeur maximale de référence
          </label>

          <input
            id={`${safeId}-max`}
            type="text"
            placeholder="Max"
            className="
              w-full
              border-2 border-raspberry-200
              rounded-lg
              px-3 py-2
              text-sm
              focus:outline-none
              focus:ring-2
              focus:ring-raspberry-500
            "
          />
        </div>
      </div>
    </fieldset>
  );
}
