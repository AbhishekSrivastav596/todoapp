import React from "react";

function Filters({ filterStatus, setFilterStatus, filterColors, setFilterColors }) {
  const toggleColor = (color) => {
    setFilterColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  return (
    <div>
      <h3 className="font-semibold">Filter by Status</h3>
      <div className="flex gap-3 my-2">
        <button onClick={() => setFilterStatus("All")} className="text-blue-500">
          All
        </button>
        <button onClick={() => setFilterStatus("Active")} className="text-blue-500">
          Active
        </button>
        <button
          onClick={() => setFilterStatus("Completed")}
          className="text-blue-500"
        >
          Completed
        </button>
      </div>

      <h3 className="font-semibold">Filter by Color</h3>
      <div className="flex gap-3">
        {["Green", "Blue", "Purple", "Orange", "Red"].map((color) => (
          <label key={color} className="flex items-center gap-1">
            <input
              type="checkbox"
              onChange={() => toggleColor(color)}
              checked={filterColors.includes(color)}
            />
            {color}
          </label>
        ))}
      </div>
    </div>
  );
}

export default Filters;
