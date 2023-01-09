import { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../../store/favorites-context";
import s from "./MainNavigation.module.css";

const MainNavigation = () => {
  const { totalFavorites } = useContext(FavoritesContext);

  return (
    <header className={s.header}>
      <div className={s.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Meetups</Link>
          </li>
          <li>
            <Link to='/new-meetup'>Add New Meetup</Link>
          </li>
          <li>
            <Link to='/favorites'>
              My Favorites
              <span className={s.badge}>{totalFavorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
