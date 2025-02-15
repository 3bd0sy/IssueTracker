interface AlertType {
  type: "success" | "error";
  message: string;
  onClose: () => void;
}

const AlertMessage = ({ type, message, onClose }: AlertType) => {
  const alertStyles = {
    success: "border-green-500 text-green-400",
    error: "border-red-500 text-red-500",
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
      <div
        className={`relative p-6 rounded-lg border-4 shadow-lg max-w-xl w-full
              ${alertStyles[type]}`}
        style={{
          background:
            type === "success"
              ? "rgba(240, 253, 244, 0.4)" // Light green with opacity
              : "rgba(254, 242,242, 0.4)", // Light red with opacity
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="flex justify-between items-center mb-4">
          {/* <h3
            className="text-lg px-5  bg-gray-500 rounded-xl font-semibold shadow-2xl drop-shadow-[0_0_10px_#ffffff]"
          >
            {type === "error" ? "Error" : "Success"}
          </h3> */}
        </div>
        <div className=" font-bold   text-black drop-shadow-[0_0_2px_#ffffff]">
          <p>{message}</p>
        </div>
        <div className="mt-4 text-right">
          <button
            onClick={onClose}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertMessage;
