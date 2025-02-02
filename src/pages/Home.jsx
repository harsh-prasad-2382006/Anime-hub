import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import '../styles/Home.css';

const HomePage = () => {
  const navigate = useNavigate();

  const featuredAnime = [
    { id: 3, title: "Demon Slayer", image: "https://preview.redd.it/demon-slayer-infinity-castle-movie-trilogy-announced-v0-visfj3xg7q9d1.jpeg?width=640&crop=smart&auto=webp&s=6d3c8ee4280437c76929c2ecd1af462402eae715" },
    { id: 1, title: "Solo Leveling", image: "https://m.media-amazon.com/images/I/71goH8p2ENL.jpg" },
  
    { id: 2, title: "Attack On Titan", image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10701949_b_v8_ah.jpg" },
    { id: 4, title: "Naruto", image: "https://m.media-amazon.com/images/M/MV5BNTk3MDA1ZjAtNTRhYS00YzNiLTgwOGEtYWRmYTQ3NjA0NTAwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
    { id: 5, title: "One Piece", image: "https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_.jpg" }
  ];

  return (
    <div className="homepage-container">

<h1 className="title">Welcome to Anime Hub</h1>
        <p className="subtitle">
          Discover your favorite anime, add them to your collection, and explore new ones!
        </p>

      <div className="image-section">
        <h2 className="section-title">Featured Anime</h2>
        <div className="image-grid">
          {featuredAnime.map((anime) => (
            <img key={anime.id} src={anime.image} alt={anime.title} className="anime-image" />
          ))}
        </div>
      </div>

      <div className="text-container">
        
        <div className="button-container">
          <Button
            variant="primary"
            size="lg"
            className="homepage-button"
            onClick={() => navigate("/anime")}
          >
            Start Browsing Anime
          </Button>
        </div>
      </div>


      <div className="benefits-section">
        <h2 className="section-title">Why Choose Anime Explorer?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3 className="benefit-title">Wide Variety</h3>
            <p className="benefit-text">Explore a vast collection of anime titles from all genres!</p>
          </div>
          <div className="benefit-card">
            <h3 className="benefit-title">Favorites System</h3>
            <p className="benefit-text">Save your favorite anime shows and easily access them later.</p>
          </div>
          <div className="benefit-card">
            <h3 className="benefit-title">Personalized Recommendations</h3>
            <p className="benefit-text">Get recommendations based on your tastes and favorites.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
