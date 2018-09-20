import React from "react";
import {
  Route,
  Link
} from "react-router-dom";
import UserAlbumItem from "./user_album_item";

const UserAlbumItemList = (props) => {
  const albumItems = () => {
    return props.userAlbums.map( (album, idx) => {
      return (
        <UserAlbumItem
          className={`${idx % 2 === 0 ? "leftmost-album" : ""}`}
          key={idx}
          album={album}
          albums={props.userAlbums}
          pageUserId={props.pageUserId}
        />
      );
    });
  };

  return (
    <div className="user-album">
      {albumItems}
    </div>
  );
};

export default UserAlbumItemList;