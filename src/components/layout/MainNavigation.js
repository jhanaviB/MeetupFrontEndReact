import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import FavouritesContext from "../../store/favourties-context";

function MainNavigation() {
  const favCntxt = useContext(FavouritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Meetups!</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/newmeetup">New Meetup</Link>
          </li>
          <li>
            <Link to="/favourites">Favourites</Link>
            <span className={classes.badge}>{favCntxt.totalFavourites}</span>
          </li>
          <li></li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
