// src/api/waitlistApi.js
import { useQuery, useMutation } from "@tanstack/react-query";



// Fetch Waitlist Data
export const useFetchWaitlist = () => {
  return useQuery(["waitlist"], async () => {
    const response = await fetch("https://api.getwaitlist.com/api/v1/waiter");
    if (!response.ok) {
      throw new Error("Failed to fetch waitlist data");
    }
    return response.json();
  });
};

// Submit to Waitlist
export const useSubmitWaitlist = () => {
  return useMutation(async (data) => {
    const response = await fetch("https://api.getwaitlist.com/api/v1/waiter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Failed to submit waitlist data");
    }
    return response.json();
  });
};
