import { useContext } from "react";
import { FavoritesContext } from "../../store/favorites-context";
import { Meetup } from "../models/Meetup";
import Card from "../ui/Card";
import s from "./MeetupItem.module.css";

interface MeetupItemProps {
  meetup: Meetup;
}

const MeetupItem = ({ meetup }: MeetupItemProps) => {
  const { addToFavorites, removeFromFavorites, isFavorite } =
    useContext(FavoritesContext);

  const itemIsFavorite = isFavorite(meetup.id!);

  const toggleFavoriteStatus = () => {
    if (itemIsFavorite) {
      removeFromFavorites(meetup.id!);
    } else {
      addToFavorites(meetup);
    }
  };

  return (
    <li className={s.item}>
      <Card>
        <div className={s.image}>
          <img src={meetup.image} alt='Something' />
        </div>
        <div className={s.content}>
          <h3>{meetup.title}</h3>
          <address>{meetup.address}</address>
          <p>{meetup.description}</p>
        </div>
        <div className={s.actions}>
          <button onClick={toggleFavoriteStatus}>
            {itemIsFavorite ? "Remove From Favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
