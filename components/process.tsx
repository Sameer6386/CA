import React from "react";

function Process() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-400 text-center mb-4">
          Process - How to Get in Touch With a CA Through Zolvit?
        </h1>

        <p className="text-gray-600 text-center mb-12">
          Now get in touch with a CA from zolvit to resolve all your queries in
          just 3 easy steps.
        </p>

        <div className="space-y-8">
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-lg shadow-sm flex items-start space-x-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7l4-4m0 0l4 4m-4-4v18"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Step 1: Reach Out to Our Experts
              </h3>
              <p className="text-gray-600">
                You can easily book a call with the best chartered accountant in
                the market by getting in touch with experts at Zolvit. Our
                experts will fix a call.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-lg shadow-sm flex items-start space-x-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Step 2: Get in Touch With a Chartered Accountant
              </h3>
              <p className="text-gray-600">
                As per your request a chartered accountant will get in touch
                with you and you can resolve all your queries. Make sure to have
                all the queries listed out before the on call appointment.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-lg shadow-sm flex items-start space-x-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Step 3: Get Expert Solutions
              </h3>
              <p className="text-gray-600">
                Our experienced chartered accountants will provide you with
                expert solutions and guidance for all your financial and
                tax-related queries. Get comprehensive advice tailored to your
                specific needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process;
