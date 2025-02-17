import React from "react";

export default function Button({ onClickHandler, value, title }) {
  return (
    <>
      <button
        onClick={onClickHandler}
        value={value}
        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-8 rounded-md shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 border border-[#ccc] text-[#323232] hover:bg-slate-100 mt-3 lg:mt-0"
      >
        {title}
      </button>
    </>
  );
}
