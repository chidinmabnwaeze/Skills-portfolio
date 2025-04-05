import React, { useState } from "react";
import api from "../api";

const CreateAccount = () => {
  const formInputs = [
    {
      label: "Full Name",
      placeholder: "Enter your name",
      name: "name",
      id: "name",
    },
    {
      label: "Email Address",
      placeholder: "Enter your email",
      name: "email",
      id: "email",
    },
    {
      label: "Role",
      placeholder: "Enter your role",
      name: "role",
      id: "role",
    },
    {
      label: "Address",
      placeholder: "Enter your address",
      name: "address",
      id: "address",
    },
    {
      label: "Phone Number",
      placeholder: "Enter your name",
      name: "phone ",
      id: "phone ",
    },
    {
      label: "LinkedIn",
      placeholder: "Enter your linkedin url",
      name: "linkedin",
      id: "linkedin",
    },
    {
      label: "GitHub Link",
      placeholder: "Enter your github link",
      name: "github",
      id: "github",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    address: "",
    phone: "",
    linkedin: "",
    github: "",
  });

  const [message, setMessage] = useState(null);
  const handleMessage = () => {
    if (message.trim()) {
    }
  };

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    console.log(formData);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("", formData);
      setLoading(true);
      setMessage({ type: "success", text: "Account created successfully" });
      setFormData({
        name: " ",
        role: "",
        address: "",
        email: "",
        linkedin: "",
        github: "",
      });
    } catch (error) {
      setMessage({ type: "error", text: "Account created failed" });
      console.error("Error occurred:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold m-6">Welcome create a free account!</h1>

      {message && <div>{message.text}</div>}
      <form
        className="p-8 border w-2/5 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        {formInputs.map((input, index) => (
          <div className="m-2" key={index}>
            <div>
              <label htmlFor="position" className="font-medium">
                {input.label}
              </label>
            </div>
            <input
              type="text"
              name={input.name}
              id={input.id}
              className="border"
              style={{ padding: "1rem", width: "100%" }}
              placeholder={input.placeholder}
              value={input.name[formData]}
              onChange={handleChange}
            />
          </div>
        ))}
        <div>
          <button
            className="rounded-lg bg-purple-700 text-white m-3 p-3 w-full"
            type="submit"
            disabled={loading}
          >
            {loading ? "Submitting" : " Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAccount;
