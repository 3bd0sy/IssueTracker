import { useState } from "react";
import { login } from "../Services/authService.js";
import AlertMessage from "../Components/AlertMessage.js";
import Messages from "../Services/messages.js";
import { useNavigate } from "react-router-dom";
import { alertType } from "../Services/types/index.js";
const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [alert, setAlert] = useState<alertType>({
    show: false,
    type: "success",
    message: "",
  });
  const handleCloseMessage = () => {
    if (alert.type === "success") {
      navigate("/");
    }
    setAlert({ show: false, type: "success", message: "" });
  };
  const showMessage = (type: "success" | "error", message: string) => {
    setAlert({ show: true, type, message });
  };

  const handelSubmit = async () => {
    try {
      const response = await login(formData.email, formData.password);
      console.log(response);
      localStorage.setItem("token", response.jwt);
      showMessage("success", Messages.loginSuccess);
    } catch (error) {
      showMessage("error", Messages.loginField);
      console.log(error);
    }
  };

  return (
    <>
      {alert.show && (
        <AlertMessage
          type={alert.type}
          message={alert.message}
          onClose={handleCloseMessage}
        />
      )}
      <div className="min-h-screen  py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className=" animate-vibrate absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">Login</h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="email"
                      name="email"
                      onChange={handleChange}
                      value={formData.email}
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Email address"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Email Address
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="password"
                      name="password"
                      type="password"
                      onChange={handleChange}
                      value={formData.password}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <button
                      onClick={handelSubmit}
                      className="bg-cyan-500 text-white rounded-md px-2 py-1"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center">
              <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                <span>
                  <a href="/register">Dont have an account?</a>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
