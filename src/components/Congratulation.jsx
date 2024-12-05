import React, { useState } from "react";
import { FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Congratulation = ({ data }) => {
  const [copied, setCopied] = useState(false);

  // Copy referral link to clipboard
  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(data.referral_link)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      })
      .catch(() => alert("Failed to copy referral link. Please try again."));
  };

  // Social media share URLs
  const twitterShareUrl = `https://twitter.com/intent/tweet?text=Join%20me%20on%20SLATY!%20Here%20is%20my%20referral%20link:%20${encodeURIComponent(
    data.referral_link
  )}`;
  const whatsappShareUrl = `https://api.whatsapp.com/send?text=Join%20me%20on%20SLATY!%20Here%20is%20my%20referral%20link:%20${encodeURIComponent(
    data.referral_link
  )}`;

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen p-6 mt-28 text-white bg-gray-900 animate-fadeIn">
      <h1 className="text-3xl font-bold text-orange-500 mb-4 animate-bounce">
        Congratulations!
      </h1>
      <p className="text-lg font-medium mb-6">
        You've successfully signed up for SLATY!
      </p>

      {/* Referral Link Section */}
      <div className="relative p-4 bg-gray-800 border border-gray-600 rounded-md shadow-md w-full max-w-md">
        <p className="mb-2 text-sm font-semibold">Referral link:</p>
        <p
          onClick={handleCopyLink}
          className="break-all text-orange-500 cursor-pointer hover:text-orange-500"
        >
          {data.referral_link}
        </p>
        {copied && (
          <span className="absolute top-2 right-2 text-green-500 text-sm animate-pulse">
            Copied!
          </span>
        )}
      </div>

      {/* Position Info */}
      <div className="mt-6 p-4 bg-gray-800 border border-gray-600 rounded-md w-full max-w-md">
        <p className="font-medium text-lg">Your position:</p>
        <p className="text-2xl font-extrabold text-indigo-400">
          #{data.priority}
        </p>
      </div>

      {/* Total Referrals */}
      <div className="mt-6 p-4 bg-gray-800 border border-gray-600 rounded-md w-full max-w-md">
        <p className="font-medium text-lg">Total referrals:</p>
        <p className="text-2xl font-extrabold text-orange-500">
          {data.total_referrals}
        </p>
      </div>

      {/* Social Media Share Buttons */}
      <p className="mt-6 text-sm text-gray-300">
        Share your link to climb the leaderboard!
      </p>
      <div className="flex justify-center gap-6 mt-4">
        <a
          href={twitterShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-blue-500 rounded-full hover:bg-blue-600 shadow-lg hover:scale-110 transform transition duration-300"
          title="Share on Twitter"
        >
          <FaTwitter size={28} className="text-white" />
        </a>
        <a
          href={whatsappShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-green-500 rounded-full hover:bg-green-600 shadow-lg hover:scale-110 transform transition duration-300"
          title="Share on WhatsApp"
        >
          <FaWhatsapp size={28} className="text-white" />
        </a>
      </div>

      {/* Return Button */}
      <Link
        to="/"
        className="mt-8 px-6 py-3 bg-orange-500 rounded-md text-white text-lg hover:bg-orange-500 transform hover:scale-105 transition duration-300"
      >
        Return to Signup
      </Link>
    </div>
  );
};

export default Congratulation;
