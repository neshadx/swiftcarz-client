

// // src/pages/Privacy.jsx
// import React from "react";
// import { Helmet } from "react-helmet-async";

// const Privacy = () => {
//   return (
//     <div className="min-h-[80vh] px-4 sm:px-6 md:px-10 py-12 max-w-4xl mx-auto">
//       <Helmet>
//         <title>Privacy Policy | SwiftCarz</title>
//       </Helmet>

//       <h2 className="text-3xl font-bold text-[#DD6B20] mb-6">Privacy Policy</h2>

//       <p className="text-gray-700 dark:text-gray-300 mb-4">
//         At <span className="font-semibold">SwiftCarz</span>, your privacy is our top priority. This policy outlines how we collect, use, and protect your personal information while using our platform.
//       </p>

//       <h3 className="text-xl font-semibold text-[#DD6B20] mt-6 mb-2">1. Information We Collect</h3>
//       <p className="text-gray-700 dark:text-gray-300 mb-4">
//         We may collect your name, email, profile picture, and car booking history. This information is gathered when you sign up, log in, or interact with our booking features.
//       </p>

//       <h3 className="text-xl font-semibold text-[#DD6B20] mt-6 mb-2">2. How We Use Your Data</h3>
//       <p className="text-gray-700 dark:text-gray-300 mb-4">
//         Your data is used to:
//         <ul className="list-disc list-inside ml-4 mt-2">
//           <li>Authenticate your identity</li>
//           <li>Enable car booking, modification, and cancellation</li>
//           <li>Provide a personalized user experience</li>
//         </ul>
//       </p>

//       <h3 className="text-xl font-semibold text-[#DD6B20] mt-6 mb-2">3. Data Protection</h3>
//       <p className="text-gray-700 dark:text-gray-300 mb-4">
//         We store your information securely using encryption and limited-access databases. Sensitive data like JWT tokens are handled through HTTP-only cookies for enhanced protection.
//       </p>

//       <h3 className="text-xl font-semibold text-[#DD6B20] mt-6 mb-2">4. Third-Party Sharing</h3>
//       <p className="text-gray-700 dark:text-gray-300 mb-4">
//         SwiftCarz does <span className="font-semibold">not</span> sell, rent, or share your personal information with any third party without your explicit consent, unless required by law.
//       </p>

//       <h3 className="text-xl font-semibold text-[#DD6B20] mt-6 mb-2">5. Account & Data Deletion</h3>
//       <p className="text-gray-700 dark:text-gray-300 mb-4">
//         You have the right to delete your account and all associated data at any time. Simply contact our support team at <span className="font-medium">support@swiftcarz.com</span>.
//       </p>

//       <h3 className="text-xl font-semibold text-[#DD6B20] mt-6 mb-2">6. Policy Updates</h3>
//       <p className="text-gray-700 dark:text-gray-300">
//         We may occasionally update our privacy policy. Continued use of the platform indicates your acceptance of any changes.
//       </p>
//     </div>
//   );
// };

// export default Privacy;


import React from "react";
import { Helmet } from "react-helmet-async";

const Privacy = () => {
  return (
    <div className="min-h-[80vh] px-4 sm:px-6 md:px-10 py-12 max-w-4xl mx-auto">
      <Helmet>
        <title>Privacy Policy | SwiftCarz</title>
      </Helmet>

      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
          Privacy Policy
        </h2>
        <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full"></div>
        <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 sm:p-8">
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
          At <span className="font-semibold text-amber-600 dark:text-amber-500">SwiftCarz</span>, your privacy is our top priority. This policy outlines how we collect, use, and protect your personal information while using our platform.
        </p>

        <div className="space-y-8">
          {/* Section 1 */}
          <div className="border-l-4 border-amber-500 pl-4">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              1. Information We Collect
            </h3>
            <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
              We may collect your name, email, profile picture, and car booking history. This information is gathered when you:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2 text-gray-700 dark:text-gray-400">
              <li>Create an account or log in</li>
              <li>Make or modify bookings</li>
              <li>Interact with our customer support</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="border-l-4 border-amber-500 pl-4">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              2. How We Use Your Data
            </h3>
            <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-2">
              Your data helps us provide and improve our services:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-amber-50 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="font-medium text-amber-700 dark:text-amber-400 mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Authentication
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Secure login and identity verification
                </p>
              </div>
              <div className="bg-amber-50 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="font-medium text-amber-700 dark:text-amber-400 mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                  Booking Management
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Process reservations and modifications
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="border-l-4 border-amber-500 pl-4">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              3. Data Protection
            </h3>
            <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
              We implement industry-standard security measures:
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">
                Encryption
              </span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                Access Controls
              </span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full">
                HTTP-only Cookies
              </span>
            </div>
          </div>

          {/* Section 4 */}
          <div className="border-l-4 border-amber-500 pl-4">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              4. Third-Party Sharing
            </h3>
            <div className="bg-red-50 dark:bg-gray-700 p-4 rounded-lg">
              <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                <span className="font-semibold text-red-600 dark:text-red-400">SwiftCarz does not sell</span> your personal information to third parties. We only share data when:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-gray-700 dark:text-gray-400">
                <li>Required by law enforcement</li>
                <li>With your explicit consent</li>
                <li>For essential service providers (payment processors)</li>
              </ul>
            </div>
          </div>

          {/* Section 5 */}
          <div className="border-l-4 border-amber-500 pl-4">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              5. Account & Data Deletion
            </h3>
            <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
              You can request account deletion by contacting:
            </p>
            <div className="mt-3 inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <svg className="w-5 h-5 mr-2 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="font-medium text-gray-800 dark:text-gray-200">support@swiftcarz.com</span>
            </div>
          </div>

          {/* Section 6 */}
          <div className="border-l-4 border-amber-500 pl-4">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              6. Policy Updates
            </h3>
            <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
              We may update this policy periodically. Significant changes will be notified via:
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <span className="inline-flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                <svg className="w-4 h-4 mr-1 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
                Platform Notifications
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                <svg className="w-4 h-4 mr-1 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Announcements
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} SwiftCarz. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
