import { useContext } from "react";
import { FavoritesContext } from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

const Favorites = () => {
  const { favorites, totalFavorites } = useContext(FavoritesContext);

  let content;
  if (!totalFavorites) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = <MeetupList meetups={favorites} />;
  }
  return (
    <div>
      <h1>My Favorites</h1>
      {content}
    </div>
  );
};

export default Favorites;
