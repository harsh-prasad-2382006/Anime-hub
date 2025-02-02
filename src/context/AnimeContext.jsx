import { useContext, useState, useEffect, createContext } from "react";

const AnimeContext = createContext();

export const useAnimeContext = () => useContext(AnimeContext);

export const AnimeProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const storedFav = localStorage.getItem("favorites");
    return storedFav ? JSON.parse(storedFav) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (anime) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some((fav) => fav.mal_id === anime.mal_id)) {
        return prevFavorites;
      }
      const updatedFavorites = [...prevFavorites, anime];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  const removeFromFavorites = (animeID) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.filter((fav) => fav.mal_id !== animeID);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); 
      return updatedFavorites;
    });
  };

  const isFavorite = (animeID) => {
    return favorites.some((fav) => fav.mal_id === animeID);
  };

  return (
    <AnimeContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}>
      {children}
    </AnimeContext.Provider>
  );
};
