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
          key={props.album.id} 
          to={`/users/${props.pageUserId}/albums/${props.album.id}`}
        >
          <img 
            className={`user-cover-thumb ${props.className}`}
            src={props.album.cover_url}
          />
        </Link>
        : ""
      }
    </div>
  );
};

export default UserAlbumItem;