import React from "react";
import { Card, Button } from "react-bootstrap";
import { useAnimeContext } from "../context/AnimeContext";

function AnimeCard({ anime }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useAnimeContext();
  const favorite = isFavorite(anime.mal_id); 

  const onAddToFav = (e) => {
    e.preventDefault();
    if (favorite) {
      removeFromFavorites(anime.mal_id);
    } else {
      addToFavorites(anime);
    }
  };

  return (
    <Card
      style={{
        width: "15rem",
        height: "430px",
        borderRadius: "12px",
        // boxShadow: favorite ? "2px 5px 10px red" : "2px 5px 5px black",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        
      }}
    >
      <Card.Img
        variant="top"
        src={anime.imageUrl}
        style={{
          height: "250px",
          objectFit: "cover",
        }}
      />
      <Card.Body
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          paddingBottom: "1rem",
        }}
      >
        <Card.Title style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
          {anime.title}
        </Card.Title>
        <Card.Text style={{ fontSize: "0.9rem" }}>
          <strong>Score: {anime.score} </strong>{" "}
          <strong>Episodes: {anime.episodes}</strong>
        </Card.Text>
        <div style={{ display: "flex", gap: "5px" }}>
          <Button
            variant="primary"
            href={anime.url}
            // target="_blank"
            rel="noopener noreferrer"
            style={{
              width: "80%",
              marginTop: "0",
            }}
          >
            More Info
          </Button>
          <Button
            variant={favorite ? "danger" : "warning"}
            onClick={onAddToFav}
          >
            <i className={favorite ? "bi bi-heart-fill" : "bi bi-heart"}></i> 
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default AnimeCard;
