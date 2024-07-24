import React, { useEffect, useState } from "react";
import genreIds from "../Utility/genre";

function Watchlist({ watchlist, setwatchlist, handleRemovefromWatchlist }) {
  const [search, setsearch] = useState("");
  const [genrelist, setgenrelist] = useState(["All Genres"]);
  const [currgenre, setcurrgenre] = useState(["All Genres"]);

  let handlesearch = (e) => {
    setsearch(e.target.value);
  };
  let handlefilter = (genre) => {
    setcurrgenre(genre);
  };

  let sortincreasing = () => {
    let sortedinc = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setwatchlist([...sortedinc]);
  };
  let sortdecreasing = () => {
    let sorteddec = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setwatchlist([...sorteddec]);
  };
  useEffect(() => {
    let temp = watchlist.map((movieobj) => {
      return genreIds[movieobj.genre_ids[0]];
    });
    temp = new Set(temp);
    setgenrelist(["All Genres", ...temp]);
  }, [watchlist]);

  return (
    <>
      <div className="flex justify-center gap-4 m-4 flex-wrap ">
        {genrelist.map((genre) => {
          return (
            <div
              onClick={() => handlefilter(genre)}
              className={
                currgenre == genre
                  ? "flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white font-bold"
                  : "flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400/50 rounded-xl text-white font-bold"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>
      <div className="flex justify-center my-4">
        <input
          onChange={handlesearch}
          value={search}
          type="text"
          placeholder="Search movies"
          className="h-[3rem] w-[18rem] bg-gray-200 outline-none p-4"
        ></input>
      </div>
      <div className=" overflow-hidden rounded-lg border border-gray-200 m-8 ">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th className="flex justify-center">
                <div onClick={sortincreasing} className="p-2">
                  <i class="fa-solid fa-arrow-up"></i>
                </div>

                <div className="p-2">Ratings</div>

                <div onClick={sortdecreasing} className="p-2">
                  <i class="fa-solid fa-arrow-down"></i>
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist
              .filter((movieobj) => {
                if (currgenre == "All Genres") {
                  return true;
                } else {
                  return genreIds[movieobj.genre_ids[0]] == currgenre;
                }
              })
              .filter((movieobj) => {
                return movieobj.title
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((movieobj) => {
                return (
                  <tr className="border-b-2">
                    <td className="flex items-center px-6 py-4">
                      <img
                        className="h-[6rem] w-[10rem] "
                        src={`http://image.tmdb.org/t/p/original/${movieobj.poster_path}`}
                      />
                      <div className="mx-10">{movieobj.title}</div>
                    </td>
                    <td>{movieobj.vote_average}</td>
                    <td>{movieobj.popularity}</td>
                    <td>{genreIds[movieobj.genre_ids[0]]}</td>
                    <td
                      onClick={() => handleRemovefromWatchlist(movieobj)}
                      className="text-red-800"
                    >
                      Delete
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
