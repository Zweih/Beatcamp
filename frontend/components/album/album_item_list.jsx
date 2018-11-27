import React from "react";
import AlbumItem from "./album_item";

const AlbumItemList = ({ albums, pageUserId, mini }) => {
	const albumItems = () => {
		return albums.map( (album, idx) => {
			return (
				<AlbumItem
					className={idx % 2 === 0 ? "leftmost-album" : ""}
					key={idx}
					album={album}
					pageUserId={pageUserId}
					mini={mini}
				/>
			);
		});
	};

	return (
		<div className="album-items">
			{albumItems()}
		</div>
	);
};

export default AlbumItemList;