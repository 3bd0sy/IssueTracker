import { useState } from "react";
import {
  filtersPropsType,
  Dropdown,
  filterType,
} from "../../Services/types/index";

const dropdowns: Dropdown[] = [
  {
    name: "status",
    label: "Status",
    items: [
      { value: "Open", label: "Open" },
      { value: "Closed", label: "Closed" },
      { value: "In-progress", label: "In-progress" },
    ],
  },
  {
    name: "date",
    label: "Date",
    items: [
      { value: "Oldest", label: "Oldest" },
      { value: "Newest", label: "Newest" },
    ],
  },
];

const Filters = ({ filtering, children }: filtersPropsType) => {
  const [selectedFilters, setSelectedFilters] = useState<filterType>({
    status: "Open",
    date: "Newest",
  });
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleSelect = (name: string, value: string) => {
    setSelectedFilters((prev: filterType) => ({
      ...prev,
      [name]: value,
    }));
    setOpenDropdown(null);
  };

  const handleFilter = () => {
    filtering(selectedFilters);
  };
  return (
    <div className="text-gray-700 min-h-[150px]p-4 md:p-8">
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {dropdowns.map((dropdown) => (
          <div key={dropdown.name} className="relative w-full md:w-auto">
            <button
              type="button"
              className="flex justify-between w-full md:w-48 px-2 py-2 text-base text-stone-500 bg-gray-50 border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-rose-200"
              onClick={() =>
                setOpenDropdown(
                  openDropdown === dropdown.name ? null : dropdown.name
                )
              }
            >
              <span className="truncate mx-2">
                {dropdown.label}
                {selectedFilters[dropdown.name]?.length
                  ? `: ${selectedFilters[dropdown.name]}`
                  : ""}
              </span>
              <svg
                className="w-5 h-5 flex-shrink-0"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {openDropdown === dropdown.name && (
              <div className="absolute z-10 w-full mt-2 rounded bg-white border border-rose-500 ring-2 ring-rose-200">
                <div className="max-h-60 overflow-y-auto">
                  {dropdown.items.map((item) => (
                    <div
                      key={item.value}
                      onClick={() => handleSelect(dropdown.name, item.value)}
                      className={`block px-6  py-2 cursor-pointer hover:bg-rose-200 text-gray-700 ${
                        selectedFilters[dropdown.name]?.includes(item.value)
                          ? "bg-rose-200"
                          : ""
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          checked={selectedFilters[dropdown.name]?.includes(
                            item.value
                          )}
                          readOnly
                          className="w-4 h-4 border-gray-300 rounded"
                        />
                        <span>{item.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
        <button
          type="submit"
          onClick={handleFilter}
          className="w-full md:w-auto inline-flex justify-center px-8 py-2 text-base text-white bg-blue-500 border border-blue-500 rounded hover:bg-blue-600"
        >
          Apply Filters
        </button>
        {children}
      </div>
    </div>
  );
};

export default Filters;
