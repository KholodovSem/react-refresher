import { createContext, useState, PropsWithChildren } from "react";
import { Meetup } from "../components/models/Meetup";

export interface IFavoritesContext {
  favorites: Meetup[];
  totalFavorites: number;
  addToFavorites: (meet: Meetup) => void;
  removeFromFavorites: (meetId: string) => void;
  isFavorite: (meetId: string) => boolean;
}

export const FavoritesContext = createContext<IFavoritesContext>({
  favorites: [],
  totalFavorites: 0,
  addToFavorites: (meet: Meetup) => {},
  removeFromFavorites: (meetId: string) => {},
  isFavorite: (meetId: string) => false,
});

export const ContextProvider = ({ children }: PropsWithChildren) => {
  const [userFavorits, setUserFavorits] = useState<Meetup[]>([]);

  const handleAddToFavorites = (meet: Meetup) => {
    setUserFavorits([...userFavorits, meet]);
  };
  const handleRemoveToFavorites = (meetId: string) => {
    setUserFavorits(userFavorits.filter((meet) => meet.id !== meetId));
  };
  const handleItemIsFavorites = (meetId: string) => {
    return userFavorits.some((meet) => meet.id === meetId);
  };

  const context: IFavoritesContext = {
    favorites: userFavorits,
    totalFavorites: userFavorits.length,
    addToFavorites: handleAddToFavorites,
    removeFromFavorites: handleRemoveToFavorites,
    isFavorite: handleItemIsFavorites,
  };
  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
};
