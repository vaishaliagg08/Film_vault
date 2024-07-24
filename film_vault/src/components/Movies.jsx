import React from "react";
import Moviecard from "./Moviecard";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Pagination from "./Pagination";

function Movies({
  handleAddToWatchlist,
  handleRemovefromWatchlist,
  watchlist,
}) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setpageno] = useState(1);

  const HandlePrev = () => {
    if (pageNo === 1) {
      setpageno(1);
    } else {
      setpageno(pageNo - 1);
    }
  };
  const HandleNex = () => {
    setpageno(pageNo + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=12014f1958c415db1392f5364368b1b4&language=en-US&page=${pageNo}`
      )
      .then(function (res) {
        setMovies(res.data.results);
      });
  }, [pageNo]);
  return (
    <div className="p-5">
      <div className="text-2xl font-bold text-center m-5">Trending Movies</div>
      <div className="flex flex-row flex-wrap justify-around gap-7">
        {movies.map((movieobj) => {
          return (
            <Moviecard
              key={movieobj.id}
              movieobj={movieobj}
              poster_path={movieobj.poster_path}
              name={movieobj.original_title}
              handleAddToWatchlist={handleAddToWatchlist}
              handleRemovefromWatchlist={handleRemovefromWatchlist}
              watchlist={watchlist}
            />
          );
        })}
      </div>
      <Pagination
        pageNo={pageNo}
        HandlePrev={HandlePrev}
        HandleNex={HandleNex}
      />
    </div>
  );
}

export default Movies;

// https://api.themoviedb.org/3/movie/popular?api_key=12014f1958c415db1392f5364368b1b4&language=en-US&page=1
