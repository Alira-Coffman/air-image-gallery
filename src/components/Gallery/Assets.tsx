"use client";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { IconArrowDown, IconArrowRight } from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query";
import { fetchAssets } from "@/lib/fetchAssets";
import AssetItem from "./AssetItem";

type SectionProps = {
	sectionTitle: string;
	sectionCount: number;
	images?: string[];
};

const Assets: React.FC<SectionProps> = ({
	sectionTitle,
	sectionCount,
	images,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["assets"],
		staleTime: 60 * 1000,
		queryFn: async () => {
			const assets = await fetchAssets();
			// if (boards?.error) {
			// 	throw new Error(boards?.error);
			// }
			return assets;
		},
	});
	if (isLoading) return <div>loading...</div>;
	return (
		<div className="display-block mb-10">
			<button onClick={() => setIsOpen(!isOpen)}>
				<p className="text-gray-500 flex">
					Assets ({data?.data.total})
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
					<div className="m-4 flex flex-wrap justify-start">
						{data.data.clips.map(
							(clip: {
								assets: any;
								displayName: any;
								ext: any;
								fileSize: any;
								width: any;
								height: any;
								id: string;
								title: string;
							}) => {
								return (
									<AssetItem
										key={clip.id}
										imageUrl={clip.assets.image}
										fileName={clip.displayName}
										fileType={clip.ext}
										fileSize={clip.fileSize}
										fileDimensions={`${clip.width}x${clip.height}`}
										fileHeight={clip.height}
										fileWidth={clip.width}
									/>
								);
							}
						)}
					</div>
				</div>
			</Transition>
		</div>
	);
};

export default Assets;
