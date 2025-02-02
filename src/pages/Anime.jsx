import React, { useEffect, useState } from "react";
import AnimeCard from "../components/AnimeCard";
import axios from "axios";
import NavigationBar from "../components/NavigationBar";
import Loader from "../components/Loader";
import NoResultsFound from "../components/NoResultsFound";

function Anime() {
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredAnimeList, setFilteredAnimeList] = useState([]);

  const fetchAnimeData = async (search = "") => {
    setLoading(true);
    try {
      const url = search
        ? `https://api.jikan.moe/v4/anime?q=${search}&page=1`
        : "https://api.jikan.moe/v4/anime?page=1";

      const response = await axios.get(url);
      const data = response.data.data;

      setAnimeList(data);
      setFilteredAnimeList(
        search
          ? data.filter((anime) =>
              anime.title?.toLowerCase().includes(search.toLowerCase())
            )
          : data
      );
    } catch (error) {
      console.error("Error fetching data from Jikan API:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnimeData();
  }, []);

  const handleSearchChange = (search) => {
    setSearchTerm(search);
    fetchAnimeData(search);
  };

  return (
    <>
      <NavigationBar onSearch={handleSearchChange} />
      <div style={{ paddingTop: "70px", margin: "auto 1%" }}>
        {loading ? (
          <Loader />
        ) : (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              justifyContent: "center",
            }}
          >
            {filteredAnimeList.length === 0 ? (
              <NoResultsFound/>
            ) : (
              filteredAnimeList.map((anime) => (
                <AnimeCard
                  key={anime.mal_id}
                  anime={{
                    mal_id: anime.mal_id,
                    title: anime.title,
                    imageUrl: anime.images?.jpg?.image_url || "https://via.placeholder.com/150", 
                    synopsis: anime.synopsis || "No synopsis available.",
                    score: anime.score || "N/A",
                    episodes: anime.episodes || "Unknown",
                    url: `https://myanimelist.net/anime/${anime.mal_id}`,
                  }}
                />
              ))
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Anime;
