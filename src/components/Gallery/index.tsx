import React from "react";
import GalleryItem from "./GalleryItem";

import Section from "./Section";

const Gallery: React.FC = () => {
	return (
		<div>
			<hr className="h-px my-8 bg-gray-100 border-0 dark:bg-gray-200"></hr>
			<div className="m-10">
				<Section sectionTitle="boards" sectionCount={4} />
				<Section sectionTitle="boards" sectionCount={4} />
			</div>
		</div>
	);
};

export default Gallery;
