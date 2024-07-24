import React from "react";

function Banner() {
  return (
    <div
      className="h-[20vh] md:h-[70vh] bg-cover flex items-end "
      style={{
        backgroundImage:
          "url(https://cdn.marvel.com/content/1x/theavengers_lob_mas_dsk_03_1.jpg)",
      }}
    >
      <div className="text-white text-xl bg-gray-900/50 text-center w-full p-4">
        Avengers
      </div>
    </div>
  );
}

export default Banner;
