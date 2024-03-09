import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import { useContext } from "react";
import FavouritesContext from "../../store/favourties-context";

function MeetupItem(props) {
  const favContext = useContext(FavouritesContext);
  const isFav = favContext.itemIsFavourite(props.id);

  function toggleFavouriteButton() {
    if (isFav) {
      favContext.removeFavourite(props.id);
    } else {
      favContext.addFavourite({
        id: props.id,
        title: props.title,
        description: props.description,
        address: props.address,
        image: props.image,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavouriteButton}>
            {isFav ? "Remove from Favourties" : "To Favourites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
