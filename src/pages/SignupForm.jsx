import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion for animations
import Congratulation from "../components/Congratulation"; // Adjust path if needed


   // Function to validate the email on the FE.
function validateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  }

    // Function to validate phone number
    function validatePhone(phone) {
        // Regular expression to validate phone number starting with +
        const phoneRegex = /^\+\d{1,15}$/;
      
        // Check if the phone number matches the pattern
        if (phoneRegex.test(phone)) {
          return true; // Valid phone number
        } else {
          return false; // Invalid phone number
        }
      }

  

const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    first_name: "",
    last_name: "",
  });
  const [error, setError] = useState(null);
  const [successData, setSuccessData] = useState(null);

  const submitWaitlistData = async (data) => {
    if(!data.email){
        setError("Please enter your email")
        return;
    }

    if(validateEmail(data.email) === false){
        setError("Please enter a valid email")
        return;
    }

    if(!data.phone){
        setError("Please enter phone number")
        return;
    }

    if(validatePhone(data.phone) === false){
        setError("Please enter a valid number starting with a '+' ")
        return;
    }


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
        className="w-full max-w-lg px-6 py-8 mx-auto mt-36 rounded-lg shadow-lg"
      >
        <h1 className="text-3xl font-bold text-center text-orange-600 mb-6">
          Join the Waitlist
        </h1>

        <div className="space-y-4">
  {/* First Name */}
  <label className="block text-gray-700 font-medium">
    First Name
    <input
      type="text"
      name="first_name"
      placeholder="First Name"
      value={formData.first_name}
      onChange={handleChange}
      className="w-full p-3 border rounded bg-gray-400 focus:ring-2 focus:ring-orange-500 mt-1"
    />
  </label>

  {/* Last Name */}
  <label className="block text-gray-700 font-medium">
    Last Name
    <input
      type="text"
      name="last_name"
      placeholder="Last Name"
      value={formData.last_name}
      onChange={handleChange}
      className="w-full p-3 border rounded bg-gray-400 focus:ring-2 focus:ring-orange-500 mt-1"
    />
  </label>

  {/* Email */}
  <label className="block text-gray-700 font-medium">
    Email
    <input
      type="email"
      name="email"
      placeholder="Email"
      value={formData.email}
      onChange={handleChange}
      className="w-full p-3 border rounded bg-gray-400 focus:ring-2 focus:ring-orange-500 mt-1"
    />
  </label>

  {/* Phone Number */}
  <label className="block text-gray-700 font-medium">
    Phone Number
    <input
      type="text"
      name="phone"
      placeholder="Phone Number"
      value={formData.phone}
      onChange={handleChange}
      className="w-full p-3 border rounded bg-gray-400 focus:ring-2 focus:ring-orange-500 mt-1"
    />
  </label>
</div>


        <button
          type="button"
          onClick={handleSubmit}
          disabled={mutation.isLoading}
          className={`w-full px-4 py-3 mt-4 text-white rounded ${
            mutation.isLoading ? "bg-gray-400" : "bg-orange-600 hover:bg-orange-500"
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
