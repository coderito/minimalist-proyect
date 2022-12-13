import React from "react";

function Title({ children, id }) {
  return (
    <h1
      id={id && id}
      className="md:text-2xl text-xl font-semibold underline underline-offset-8 decoration-4 dark:decoration-gray-500 decoration-stone-800 mb-5 text-stone-900 dark:text-white"
    >
      {children}
    </h1>
  );
}

export default Title;
