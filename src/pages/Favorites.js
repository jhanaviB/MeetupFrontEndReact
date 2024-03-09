import { useEffect } from "react";
import { useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { useContext } from "react";
import FavouritesContext from "../store/favourties-context";

function FavouritesPage() {
  const favContext = useContext(FavouritesContext);
  let content;

  if (favContext.totalFavourites == 0) {
    content = (
      <p>You've got no favourites! See something you like? Add it, maybe? </p>
    );
  } else {
    content = (
      <section>
        <h1>My favourites</h1>
        <MeetupList meetups={favContext.favourites} />
      </section>
    );
  }

  return content;
}

export default FavouritesPage;
