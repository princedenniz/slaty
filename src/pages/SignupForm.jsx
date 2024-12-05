// src/components/SignupForm.jsx
import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import Congratulation from "../components/Congratulation"; // Import the Congratulation component

const submitWaitlistData = async (data) => {
  const response = await fetch("https://api.getwaitlist.com/api/v1/waiter", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Failed to submit waitlist data");
  }
  return response.json();
};

const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    first_name: "",
    last_name: "",
  });
  const [error, setError] = useState(null);
  const [successData, setSuccessData] = useState(null);

  const mutation = useMutation({
    mutationFn: submitWaitlistData,
    onSuccess: (data) => {
      console.log("Signed up successfully:", data);
      setSuccessData(data); // Store data for success display
    },
    onError: (err) => {
      setError("Failed to sign up. Please try again.");
      console.error(err);
    },
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setError(null);
    setSuccessData(null);
    mutation.mutate({ ...formData, waitlist_id: 22656 });
  };

  if (successData) {
    return (
      <Congratulation data={successData}
        
        // referralLink={successData.referralLink || document.URL}
        // position={successData.position || "Unknown"}
      />
    );
  }

  return (
    <div className="px-20- w-screen flex flex-col justify-center items-center mx-auto mt-36">
      <h1 className="text-2xl font-bold mb-4">Sign Up for the Waitlist</h1>
      <input
        type="text"
        name="first_name"
        placeholder="First Name"
        value={formData.first_name}
        onChange={handleChange}
        className="block w-full p-2 mb-2 bg-gray-400 border rounded"
      />
      <input
        type="text"
        name="last_name"
        placeholder="Last Name"
        value={formData.last_name}
        onChange={handleChange}
        className="block w-full p-2 mb-2 bg-gray-400 border rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="block w-full p-2 mb-2 bg-gray-400 border rounded"
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className="block w-full p-2 mb-4 bg-gray-400 border rounded"
      />
      <button
        type="button"
        onClick={handleSubmit}
        disabled={mutation.isLoading}
        className="bg-indigo-600 text-white w-full px-4 py-2 rounded"
      >
        {mutation.isLoading ? "Submitting..." : "Sign Up"}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default SignupForm;
