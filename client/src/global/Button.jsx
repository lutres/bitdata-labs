import React from "react";

const Button = ({action, children}) => {
  return (
    <button
      className="bg-[#2952e3] w-44 py-2 px-7 rounded-full cursos-pointer hover:bg-[#2546bd]"
      onClick={action}
    >
      {children}
    </button>
  );
};

export default Button;
