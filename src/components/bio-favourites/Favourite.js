import React, { useState } from "react";
import { CONFIG } from "../../config.js";

//TODO to be implemented later!
const Favourite = () => {
  const [favourites, setFavourites] = useState([]);

  // const [error, setError] = useState({
  //   isError: false,
  //   error: null,
  // });

  // TODO to be implement properly in its time!
  const fetchFavourites = async () => {
    try {
      const apiRes = await fetch(CONFIG.API_BASE_URL + "favourites");
      const resJSON = await apiRes.json();
      setFavourites(resJSON);
    } catch (error) {
      console.log("Error getting favourites,", error.message);
      // setError({
      //   isError: true,
      //   error: error,
      // });
    }
  };

  const handleFavourite = (i) => {
    // const favourites = this.state.favourites;
    // TODO Impliment later!
    console.log("in handleFavourite() i =" + i);
    alert(i); //image_type=photopoint
  };

  const favs = favourites.map((favourite, index) => {
    return (
      <li key={index}>
        {""}
        <button onClick={() => handleFavourite(favourite.favourite_name)}>
          {favourite.user_id} {favourite.favourite_name} (
          {favourite.favourites_id})
        </button>
      </li>
    );
  });

  // return (
  //   <li key={index}>
  //     {" "}
  //     <button onClick={handleFavourite}>
  //       {user_id} {favourite_name} ({favourites_id})
  //     </button>
  //   </li>
  // );
  return <ul>{favs}</ul>;
};
export default Favourite;
