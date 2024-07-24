import React from "react";

function Moviecard({
  movieobj,
  poster_path,
  name,
  handleAddToWatchlist,
  handleRemovefromWatchlist,
  watchlist,
}) {
  function doescontain(movieobj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieobj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className="h-[40vh] w-[150px] bg-center bg-cover rounded-xl hover:cursor-pointer hover:scale-110 duration-300 flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doescontain(movieobj) ? (
        <div
          onClick={() => handleRemovefromWatchlist(movieobj)}
          className="m-2 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-600/60 "
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => handleAddToWatchlist(movieobj)}
          className="m-2 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-600/60 "
        >
          &#128525;
        </div>
      )}

      <div className="text-white items-end text-xl w-full p-2 text-center bg-gray-900/50 rounded-xl">
        {name}
      </div>
    </div>
  );
}

export default Moviecard;
