import React from "react";
import {
  Route,
  Link
} from "react-router-dom";

const UserAlbumItem = (props) => {
  return (
    <div>
      {
        props.album ?
          <Link
            className={`album-item ${props.className}`}
            key={props.album.id} 
            to={`/users/${props.pageUserId}/albums/${props.album.id}`}
          >
            <img 
              className="album-item-cover"
              src={props.album.cover_url}
            />
          <p className="album-item-label">
            {props.album.title}
          </p>
        </Link>
        : ""
      }
    </div>
  );
};

export default UserAlbumItem;