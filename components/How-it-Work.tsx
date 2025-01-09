import React from "react";

function App() {
  const steps = [
    {
      number: "1",
      text: "Reach out to our Zolvit expert team",
    },
    {
      number: "2",
      text: "Schedule your call to avail CA online services",
    },
    {
      number: "3",
      text: "Talk to a CA online",
    },
    {
      number: "4",
      text: "Get all your queries resolved",
    },
  ];

  return (
    <div className="min-h-screen bg-white p-8 flex flex-col justify-center items-center">
      <h1 className="text-5xl text-center mb-16 text-gray-300 font-bold">
        Here's How It Works
      </h1>

      <div className="flex flex-wrap justify-center items-center gap-6">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <div className="w-64 h-48 bg-[#1a2942] rounded-lg p-6 flex flex-col justify-center items-start relative">
              <span className="text-yellow-400 text-4xl font-bold">
                {step.number}
              </span>
              <p className="text-white mt-4 text-lg leading-relaxed">
                {step.text}
              </p>
            </div>
            {index < steps.length - 1 && (
              <div className="text-gray-400 text-4xl font-bold flex items-center">
                »
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default App;
