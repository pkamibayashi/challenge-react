import movies from "../movieArray/moviesArray.js";
import { useState } from "react";
import { Card } from "../card/card.js";
import { Poster } from "../Poster/poster.js";
import "../Section/mainCss.css";

export function Section() {
  const [poster, setPoster] = useState(" ");

  return movies.map((movie, index) => (
    <div className="main" key={index}>
      <Card
        title={movie.original_title}
        description={movie.overview}
        act={() => setPoster(movie.poster_path)}
      />
      {poster === movie.poster_path && (
        <Poster
          image={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
        />
      )}
    </div>
  ));
}
