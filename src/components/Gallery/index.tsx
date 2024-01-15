import React from "react";
import GalleryItem from "./GalleryItem";

import Section from "./Section";

const Gallery: React.FC = () => {
	return (
		<div>
			<div className="m-10">
				<Section sectionTitle="boards" sectionCount={4} />
				<Section sectionTitle="boards" sectionCount={4} />
			</div>
		</div>
	);
};

export default Gallery;
