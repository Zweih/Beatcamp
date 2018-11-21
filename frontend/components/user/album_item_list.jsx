import React from "react";
import AlbumItem from "./album_item";

const AlbumItemList = ({ userAlbums, pageUserId }) => {
	const userAlbumItems = () => {
		return userAlbums.map( (userAlbum, idx) => {
			return (
				<AlbumItem
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

export default AlbumItemList;