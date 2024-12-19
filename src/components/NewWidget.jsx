import React, { useEffect } from "react";
import Helmet from "react-helmet";
import { useNavigate } from "react-router-dom"; // Assuming you're using React Router for navigation

const NewWidget = () => {
  const navigate = useNavigate(); // React Router hook for navigation

  useEffect(() => {
    const initializeWidget = () => {
      const existingScript = document.querySelector(
        'script[src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"]'
      );

      if (existingScript) {
        if (window.GetWaitlist) {
          window.GetWaitlist.init();
        }
      } else {
        const script = document.createElement("script");
        script.src = "https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js";
        script.async = true;
        script.onload = () => {
          if (window.GetWaitlist) {
            window.GetWaitlist.init();
          }
        };
        script.onerror = () => console.error("Failed to load Waitlist widget script");
        document.body.appendChild(script);
      }
    };

    initializeWidget();
  }, []);

  const handleNavigate = () => {
    navigate("/newwidgettuto"); // Replace with your private form route
  };

  return (
    <div className="flex items-center justify-center mt-24 min-h-screen">
      {/* Container for the widget */}
      <div className="p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-xl font-semibold text-center text-white mb-4">Join Our Waitlist</h1>
        <div
          id="getWaitlistContainer"
          data-waitlist_id="23213"
          data-widget_type="WIDGET_1"
        ></div>
        {/* Button to private form page */}
        <button
          onClick={handleNavigate}
          className="mt-6 w-full py-2 px-4 bg-orange-500 text-white font-bold rounded-md hover:bg-orange-600 transition duration-200"
        >
          Go to Tuto's Form
        </button>
      </div>

      {/* Inject styles using Helmet */}
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"
        />
      </Helmet>
    </div>
  );
};

export default NewWidget;
