import React from "react";
import {
	Link
} from "react-router-dom";

const AlbumItem = ({ className, album, pageUserId }) => {
	return (
		<div>
			{
				album ?
					<Link
						className={`album-item ${className}`}
						to={`/users/${pageUserId}/albums/${album.id}`}
					>
						<img 
							className="album-item-cover"
							src={album.cover_url}
						/>
					<p className="album-item-label">
						{album.title}
					</p>
				</Link>
				: ""
			}
		</div>
	);
};

export default AlbumItem;