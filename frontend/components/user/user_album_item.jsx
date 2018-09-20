import React from "react";
import {
  Route,
  Link
} from "react-router-dom";

const UserAlbumItem = ({ albumKeys }) => {
  return (
    <div>
      {
        albumKeys.album ?
          <Link
            className={`album-item ${albumKeys.className}`}
            key={albumKeys.album.id} 
            to={`/users/${albumKeys.pageUserId}/albums/${albumKeys.album.id}`}
          >
            <img 
              className="album-item-cover"
              src={albumKeys.album.cover_url}
            />
          <p className="album-item-label">
            {albumKeys.album.title}
          </p>
        </Link>
        : ""
      }
    </div>
  );
};

export default UserAlbumItem;