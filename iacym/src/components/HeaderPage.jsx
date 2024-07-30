import React from "react";

export function HeaderPage({ data }) {
  return (
    <div className="relative bg-black p-10 py-16">
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${data.url_img})` }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex items-center justify-center text-center w-full h-full">
        <div className="font-bold text-4xl text-white z-10">{data.titulo}</div>
      </div>
    </div>
  );
}
