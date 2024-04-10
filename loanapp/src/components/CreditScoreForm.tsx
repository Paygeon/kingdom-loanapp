import React from 'react';

const CreditScoreForm: React.FC = () => {
  return (
    <div className="button-pap">
      <h2>What's your credit score?</h2>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 mr-4">
        Excellent (720+)
      </button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 mr-4">
        Good (680 - 719)
      </button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 mr-4">
        Fair (640 - 679)
      </button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
        Poor (639 or less)
      </button>
    </div>
  );
};

export default CreditScoreForm;
