import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion for animations
import Congratulation from "../components/Congratulation"; // Adjust path if needed

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
      setSuccessData(data);
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
    return <Congratulation data={successData} />;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg px-6 py-8 mx-auto mt-36 bg-white rounded-lg shadow-lg"
      >
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Join the Waitlist
        </h1>

        <div className="space-y-4">
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            value={formData.first_name}
            onChange={handleChange}
            className="w-full p-3 border rounded bg-gray-50 focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={formData.last_name}
            onChange={handleChange}
            className="w-full p-3 border rounded bg-gray-50 focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded bg-gray-50 focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border rounded bg-gray-50 focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={mutation.isLoading}
          className={`w-full px-4 py-3 mt-4 text-white rounded ${
            mutation.isLoading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"
          }`}
        >
          {mutation.isLoading ? "Submitting..." : "Sign Up"}
        </button>
        {error && <p className="mt-4 text-sm text-red-500">{error}</p>}
      </motion.div>
    </AnimatePresence>
  );
};

export default SignupForm;
