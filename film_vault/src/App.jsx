import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import Banner from "./components/Banner";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  let [watchlist, setwatchlist] = useState([]);

  let handleAddToWatchlist = (movieobj) => {
    let newWatchlist = [...watchlist, movieobj];
    localStorage.setItem("moviesApp", JSON.stringify(newWatchlist));
    setwatchlist(newWatchlist);
    console.log(newWatchlist);
  };
  let handleRemovefromWatchlist = (movieobj) => {
    let filteredwatchlist = watchlist.filter((movie) => {
      return movie.id != movieobj.id;
    });
    localStorage.setItem("moviesApp", JSON.stringify(filteredwatchlist));
    setwatchlist(filteredwatchlist);
    console.log(filteredwatchlist);
  };
  useEffect(() => {
    let moviesfromlocalstorage = localStorage.getItem("moviesApp");
    if (!moviesfromlocalstorage) {
      return;
    }
    setwatchlist(JSON.parse(moviesfromlocalstorage));
  }, []);
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  watchlist={watchlist}
                  handleAddToWatchlist={handleAddToWatchlist}
                  handleRemovefromWatchlist={handleRemovefromWatchlist}
                />
              </>
            }
          />

          <Route
            path="/watchlist"
            element={
              <Watchlist
                watchlist={watchlist}
                setwatchlist={setwatchlist}
                handleRemovefromWatchlist={handleRemovefromWatchlist}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
