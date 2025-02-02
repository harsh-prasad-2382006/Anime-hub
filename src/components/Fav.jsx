import React from "react";
import { Button } from "react-bootstrap";
import { useAnimeContext } from "../context/AnimeContext";
import AnimeCard from "./AnimeCard";

function Fav() {
  const { favorites } = useAnimeContext();

  return (
    <div
      style={{
        paddingTop: "70px",
        backgroundColor: "#f4f4f4",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      {favorites.length > 0 ? (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {favorites.map((anime) => (
            <AnimeCard
              key={anime.mal_id}
              anime={{
                mal_id: anime.mal_id,
                title: anime.title,
                imageUrl: anime.imageUrl,
                score: anime.score,
                episodes: anime.episodes,
                url: `https://myanimelist.net/anime/${anime.mal_id}`,
              }}
            />
          ))}
        </div>
      ) : (
        <>
          <h1
            style={{
              fontSize: "2.5rem",
              color: "#333",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            No Favorite Animes Yet
          </h1>
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 4px 6px black",
              width: "80%",
              maxWidth: "600px",
              marginBottom: "30px",
            }}
          >
            <p
              style={{
                fontSize: "1rem",
                color: "#777",
              }}
            >
              It looks like you haven't added any favorite anime yet. You can go back to the Anime section and click the
              heart icon to add your favorite shows here!
            </p>
          </div>
          <Button
            style={{
              padding: "12px 24px",
            }}
            onClick={() => (window.location.href = "/anime")}
          >
            Go to Anime List
          </Button>
        </>
      )}
    </div>
  );
}

export default Fav;
