import * as XLSX from "xlsx";
import { dataType } from "../../Services/types/index";

const ExportToExcel = ({ data }: dataType) => {
  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Issues");
    XLSX.writeFile(wb, "issues.xlsx");
  };

  return (
    <button
      className="w-full md:w-auto inline-flex justify-center px-8 py-2 text-base text-white bg-blue-500 border border-blue-500 rounded hover:bg-blue-600"
      onClick={exportToExcel}
    >
      Export To Excel
    </button>
  );
};

export default ExportToExcel;
