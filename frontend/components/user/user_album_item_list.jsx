import React from "react";
import UserAlbumItem from "./user_album_item";

const UserAlbumItemList = ({ userAlbums, pageUserId }) => {
	const userAlbumItems = () => {
		return userAlbums.map( (userAlbum, idx) => {
			return (
				<UserAlbumItem
					className={idx % 2 === 0 ? "leftmost-album" : ""}
					key={idx}
					userAlbum={userAlbum}
					pageUserId={pageUserId}
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