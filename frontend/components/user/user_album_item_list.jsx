import React from "react";
import UserAlbumItem from "./user_album_item";

const UserAlbumItemList = ({ albumItems }) => {
  const userAlbumItems = () => {
    return albumItems.map( (albumKeys, idx) => {
      return (
        <UserAlbumItem
          key={idx}
          albumKeys={albumKeys}
        />
      );
    });
  };

  return (
    <div className="user-album-items">
      {userAlbumItems()}
    </div>
  );
};

export default UserAlbumItemList;