

// src/pages/Privacy.jsx
import React from "react";
import { Helmet } from "react-helmet-async";

const Privacy = () => {
  return (
    <div className="min-h-[80vh] px-4 sm:px-8 py-12 max-w-4xl mx-auto">
      <Helmet>
        <title>Privacy Policy | Craflin</title>
      </Helmet>

      <h2 className="text-3xl font-bold text-[#DD6B20] mb-6">Privacy Policy</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Your privacy is important to us. Craflin collects user information such as name, email,
        and hobby preferences solely to enhance your hobby group discovery experience.
      </p>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        We do not share your data with third parties without consent. Information is stored securely
        and used only for platform functionality, such as authentication and personalized group recommendations.
      </p>
      <p className="text-gray-700 dark:text-gray-300">
        You can request to delete your account and associated data at any time by contacting our
        support team.
      </p>
    </div>
  );
};

export default Privacy;
