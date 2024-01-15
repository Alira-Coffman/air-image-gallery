import Image from "next/image";
import React from "react";

interface GalleryItemProps {
	imageUrl: string;
	caption: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ imageUrl, caption }) => {
	return (
		<div className="w-60 h-60 relative object-contain max-w-xs rounded overflow-hidden m-2 hover:border-4 hover:border-solid transition-colors duration-200 ease-in-out">
			<Image
				src={imageUrl}
				alt={caption}
				fill
				objectFit="cover"
				quality={75}
				loading="lazy"
				className="rounded"
			/>
			<div className="absolute inset-0 bg-gray-500 opacity-50 rounded-md"></div>
			<div className="absolute inset-0 flex flex-col flex-end justify-end p-2">
				<p className="text-white text-2xl font-bold">{caption}</p>
			</div>
		</div>
	);
};

export default GalleryItem;
