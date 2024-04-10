import React from 'react';

const BusinessTypeSelector: React.FC = () => {
  return (
    <div className="text-center mx-auto">
      <div className="button-jqw vis-6wc">
        <h2 className="font-serif font-normal text-xl md:text-4xl mt-0 text-blue-700">
          What type of business do you own?
        </h2>
        <button className="bg-green-200 border border-green-400 text-blue-700 rounded-lg cursor-pointer font-sans text-lg md:text-xl font-normal py-4 px-6 md:px-8 block w-full max-w-screen-md mx-auto mt-8 hover:bg-green-600 hover:text-white">
          Limited Liability Company | LLC
        </button>
        <button className="bg-green-200 border border-green-400 text-blue-700 rounded-lg cursor-pointer font-sans text-lg md:text-xl font-normal py-4 px-6 md:px-8 block w-full max-w-screen-md mx-auto mt-4 hover:bg-green-600 hover:text-white">
          Sole Proprietorship
        </button>
        <button className="bg-green-200 border border-green-400 text-blue-700 rounded-lg cursor-pointer font-sans text-lg md:text-xl font-normal py-4 px-6 md:px-8 block w-full max-w-screen-md mx-auto mt-4 hover:bg-green-600 hover:text-white">
          Partnership
        </button>
        <button className="bg-green-200 border border-green-400 text-blue-700 rounded-lg cursor-pointer font-sans text-lg md:text-xl font-normal py-4 px-6 md:px-8 block w-full max-w-screen-md mx-auto mt-4 hover:bg-green-600 hover:text-white">
          C Corporation
        </button>
        <button className="bg-green-200 border border-green-400 text-blue-700 rounded-lg cursor-pointer font-sans text-lg md:text-xl font-normal py-4 px-6 md:px-8 block w-full max-w-screen-md mx-auto mt-4 hover:bg-green-600 hover:text-white">
          S Corporation
        </button>
      </div>
    </div>
  );
};

export default BusinessTypeSelector;

