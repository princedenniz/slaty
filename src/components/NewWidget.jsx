import React, { useEffect } from "react";
import Helmet from "react-helmet";

const NewWidget = () => {
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

  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Container for the widget */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-xl font-semibold text-center mb-4">Join Our Waitlist</h1>
        <div
          id="getWaitlistContainer"
          data-waitlist_id="22656"
          data-widget_type="WIDGET_1"
        ></div>
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
