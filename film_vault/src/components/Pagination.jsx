import React from "react";

function Pagination({ HandlePrev, HandleNex, pageNo }) {
  return (
    <div className="bg-gray-400 p-2 mt-8 flex justify-center">
      <div onClick={HandlePrev} className="px-8 hover:cursor-pointer">
        <i class="fa-solid fa-backward"></i>
      </div>
      <div className="font-bold">{pageNo}</div>
      <div onClick={HandleNex} className="px-8 hover:cursor-pointer">
        <i class="fa-solid fa-forward"></i>
      </div>
    </div>
  );
}

export default Pagination;
