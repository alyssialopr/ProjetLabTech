export default function TestValueCard({ name }) {
  return (
    <div className="bg-white rounded-xl border-2 border-raspberry-200 p-6 flex flex-col gap-4 shadow-sm">

      <h2 className="text-sm font-medium text-raspberry-900">
        {name}
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-raspberry-900">
            Your value
          </label>
          <input
            placeholder="e.g., 14.2"
            className="border-2 border-raspberry-200 rounded-lg px-3 py-2 text-sm"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-raspberry-900">
            Unit
          </label>
          <input
            placeholder="e.g., g/dL, mg/dL"
            className="border-2 border-raspberry-200 rounded-lg px-3 py-2 text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-raspberry-900">
            Reference range (optional)
          </label>

          <div className="flex items-center gap-2">
            <input
              placeholder="Min"
              className="w-full border-2 border-raspberry-200 rounded-lg px-3 py-2 text-sm"
            />
            <span className="text-sm text-raspberry-700">to</span>
            <input
              placeholder="Max"
              className="w-full border-2 border-raspberry-200 rounded-lg px-3 py-2 text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
