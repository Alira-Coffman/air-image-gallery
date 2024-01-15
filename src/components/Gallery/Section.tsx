"use client";
import React, { useState } from "react";
import GalleryItem from "./GalleryItem";
import { Transition } from "@headlessui/react";
import { IconArrowDown, IconArrowRight } from "@tabler/icons-react";

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
				<p className="text-gray-500 flex">
					{sectionTitle} ({sectionCount})
					{isOpen ? <IconArrowDown /> : <IconArrowRight />}
				</p>
			</button>

			<Transition
				show={isOpen}
				enter="transition-opacity duration-300"
				enterFrom="opacity-0"
				enterTo="opacity-100"
				leave="transition-opacity duration-300"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
			>
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
			</Transition>
		</div>
	);
};

export default Section;
