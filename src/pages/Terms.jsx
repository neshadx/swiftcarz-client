


// src/pages/Terms.jsx
import React from "react";
import { Helmet } from "react-helmet-async";

const Terms = () => {
  return (
    <div className="min-h-[80vh] px-4 sm:px-8 py-12 max-w-4xl mx-auto">
      <Helmet>
        <title>Terms & Conditions | Craflin</title>
      </Helmet>

      <h2 className="text-3xl font-bold text-[#DD6B20] mb-6">Terms & Conditions</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Welcome to Craflin! By using our platform, you agree to the following terms and conditions. Our service is designed to help users discover, join, and create local hobby groups.
      </p>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Users must provide accurate information during account creation and group registration. Craflin reserves the right to modify listings or remove inappropriate content.
      </p>
      <p className="text-gray-700 dark:text-gray-300">
        For group organizers, all group details must be genuine. Misleading content may result in removal from the platform. Craflin will not be held liable for any group disputes or cancellations.
      </p>
    </div>
  );
};

export default Terms;
