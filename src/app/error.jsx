"use client";

import React, { useEffect } from "react";

export default function error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center mx-auto p-3 space-y-4">
      <h1>Something when wrong. Please try again.</h1>
      <button className="hover:text-amber-600" onClick={() => reset()}>Try again</button>
    </div>    

  );
}
