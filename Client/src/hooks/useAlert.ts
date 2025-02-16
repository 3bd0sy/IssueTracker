import { useState } from "react";

type AlertType = "success" | "error";

export const useAlert = () => {
  const [alert, setAlert] = useState<{
    show: boolean;
    type: AlertType;
    message: string;
  }>({ show: false, type: "success", message: "" });

  const showAlert = (type: AlertType, message: string) => {
    setAlert({ show: true, type, message });
  };

  const hideAlert = () => {
    setAlert((prev) => ({ ...prev, show: false }));
  };

  return { alert, showAlert, hideAlert };
};
