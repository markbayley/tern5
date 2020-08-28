import React, { useState } from "react";

// TODO to be implemented later!
const Favourite = () => {
  const [favourites] = useState([]);

  const favs = favourites.map((favourite) => (
    <li key={favourite.favourites_id}>
      {" "}
      <button
        onClick={() => { }}
        type="button"
      >
        {favourite.user_id}
        {" "}
        {favourite.favourite_name}
        {"("}
        {favourite.favourites_id}
        {")"}
      </button>
    </li>
  ));

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
