import React, { useState } from "react";
import { createIssue } from "../Services/authService";
import AlertMessage from "../Components/AlertMessage.js";
import Messages from "../Services/messages.js";
import { alertType, formType } from "../Services/types/index.js";
const AddForm = ({ PageTitle }: { PageTitle: string }) => {


  const [formData, setFormData] = useState<formType>({
    title: "",
    description: "",
    imageUrl: "",
    counter: 0,
    issueStatus: "Open",
  });
  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      imageUrl: "",
      counter: 0,
      issueStatus: "Open",
    });
  };

  const [alert, setAlert] = useState<alertType>({
    show: false,
    type: "success",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await createIssue(formData);
      console.log("response:", response);
      showMessage("success", Messages.issueAdded);
      resetForm();
    } catch (error) {
      console.log("error:", error);
      showMessage("error", Messages.issueAddError);
    }
  };

  const handleCloseMessage = () => {
    setAlert({ show: false, type: "success", message: "" });
  };
  const showMessage = (type: "success" | "error", message: string) => {
    setAlert({ show: true, type, message });
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
      <div className=" min-h-screen flex my-10 items-center">
        <div className="w-full">
          <div className="bg-gray-900 p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
            <h2 className="text-center text-white font-bold text-2xl uppercase ">
              {PageTitle}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label
                  htmlFor="title"
                  className="block capitalize mb-2 font-bold text-gray-200"
                >
                  title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Put in your title."
                  className="border border-gray-300 shadow px-3 py-2 w-full rounded mb-"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="description"
                  className="block mb-2 capitalize font-bold text-gray-200"
                >
                  description
                </label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Put in your description."
                  className="border border-red-300 shadow px-3 py-2 w-full rounded mb-"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="imageUrl"
                  className="block capitalize mb-2 font-bold text-gray-200"
                >
                  imageUrl
                </label>
                <input
                  type="text"
                  id="imageUrl"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  placeholder="Put in your title."
                  className="border capitalize border-gray-300 shadow px-3 py-2 w-full rounded mb-"
                />
              </div>

              <div className="flex gap-3 justify-stretch w-full">
                <div className="mb-5 w-1/2">
                  <label
                    htmlFor="counter"
                    className="block mb-2 capitalize font-bold text-gray-200"
                  >
                    counter
                  </label>
                  <input
                    type="text"
                    id="counter"
                    name="counter"
                    value={formData.counter}
                    onChange={handleChange}
                    placeholder="Put in your title."
                    className="border border-gray-300 shadow px-3 py-2 w-full rounded mb-"
                  />
                </div>

                <div className="mb-4 w-1/2">
                  <label
                    htmlFor="issueStatus"
                    className="block mb-2 capitalize font-bold text-gray-200"
                  >
                    issueStatus
                  </label>
                  <select
                    id="issueStatus"
                    name="issueStatus"
                    value={formData.issueStatus}
                    onChange={handleChange}
                    className="border border-gray-300 shadow px-3 py-2 w-full rounded mb-"
                    required
                  >
                    <option value="">Select state</option>
                    <option value="Open">Open</option>
                    <option value="Closed">Closed</option>
                    <option value="In-progress">In-progress</option>
                  </select>
                </div>
              </div>
              <button className="block  w-1/2 mx-auto bg-blue-500 text-white font-bold p-4 rounded-lg">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddForm;
