"use client";
import React, { useState } from "react";
import GalleryItem from "./GalleryItem";

type SectionProps = {
	sectionTitle: string;
	sectionCount: number;
	images?: string[];
};

const Section: React.FC<SectionProps> = ({
	sectionTitle,
	sectionCount,
	images,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="display-block mb-10">
			<button onClick={() => setIsOpen(!isOpen)}>
				<p className="text-gray-500">
					{sectionTitle} {sectionCount}
					{isOpen ? "Hide" : "Show"}
				</p>
			</button>

			{isOpen && (
				<div className="mt-4">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
						{/* Gallery items go here */}
						<GalleryItem
							imageUrl="https://air-prod.imgix.net/8c8d0dcb-bc3f-4cee-8979-5018f5048e50.jpg"
							caption="testPhoto"
						/>
						<GalleryItem
							imageUrl="https://air-prod.imgix.net/8c8d0dcb-bc3f-4cee-8979-5018f5048e50.jpg"
							caption="testPhoto"
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default Section;
