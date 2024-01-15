import React from "react";

interface GalleryItemProps {
	imageUrl: string;
	caption: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ imageUrl, caption }) => {
	return (
		<div className="max-w-xs rounded overflow-hidden shadow-lg">
			<img className="w-full" src={imageUrl} alt={caption} />
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">{caption}</div>
			</div>
		</div>
	);
};

export default GalleryItem;
