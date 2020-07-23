import React from "react";
const Favourite = ({ favourites, handleFavourite }) => {
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
