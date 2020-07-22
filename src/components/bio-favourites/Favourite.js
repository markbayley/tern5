import React from "react";
const Favourite = ({
  user_id,
  favourite_name,
  favourites_id,
  index,
  handleFavourite,
}) => {
  return (
    <li key={index}>
      {" "}
      <button onClick={handleFavourite}>
        {user_id} {favourite_name} ({favourites_id})
      </button>
    </li>
  );
};
export default Favourite;
