import React from "react";

function PageTitle({ title }) {
  return (
    <div className="mt-2 text-xl pb-4 mx-6 max-sm:text-center">
      <h1 className="font-semibold">{title}</h1>
    </div>
  );
}

export default PageTitle;
