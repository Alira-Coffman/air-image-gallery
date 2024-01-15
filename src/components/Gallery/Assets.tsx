"use client";
import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { IconArrowDown, IconArrowRight } from "@tabler/icons-react";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { fetchAssets } from "@/lib/fetchAssets";
import AssetItem from "./AssetItem";
import { useInView } from "react-intersection-observer";

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
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [cursor, setCursor] = useState<String | null>(null);

	const { ref, inView } = useInView();
	const {
		data,
		error,
		fetchNextPage,
		hasNextPage,
		isFetching,
		isFetchingNextPage,
		status,
	} = useInfiniteQuery({
		queryKey: ["assets"],
		queryFn: async () => {
			try {
				const response = await fetch(
					"https://api.air.inc/shorturl/bDkBvnzpB/clips/search",
					{
						method: "POST",
						headers: {
							authority: "api.air.inc",
							accept: "application/json",
							"accept-language": "en-US,en;q=0.9",
							authorization: "",
							"content-type": "application/json",
							origin: "https://app.air.inc",
							referer: "https://app.air.inc/",
							"sec-ch-ua":
								'"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
							"sec-ch-ua-mobile": "?0",
							"sec-ch-ua-platform": '"macOS"',
							"sec-fetch-dest": "empty",
							"sec-fetch-mode": "cors",
							"sec-fetch-site": "same-site",
							"user-agent":
								"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
							"x-air-board-context": "",
						},
						body: JSON.stringify({
							limit: 10,
							type: "all",
							withOpenDiscussionStatus: true,
							filters: {
								board: { is: "c74bbbc8-602b-4c88-be71-9e21b36b0514" },
							},
							boardId: "c74bbbc8-602b-4c88-be71-9e21b36b0514",
							sortField: { direction: "desc", name: "dateModified" },
							descendantBoardId: "c74bbbc8-602b-4c88-be71-9e21b36b0514",
							cursor: cursor,
						}),
					}
				);

				const data = await response.json();
				console.log("assets", data);
				setCursor(data.pagination.cursor);
				return data;
			} catch (error) {
				console.error("Error:", error);
			}
		},
		initialPageParam: 0,
		getNextPageParam: (lastPage, pages) => lastPage.pagination.cursor,
	});

	useEffect(() => {
		if (inView) {
			fetchNextPage();
			console.log("load more");
			console.log(status, isFetching, isFetchingNextPage);
		}
	}, [inView, fetchNextPage]);
	// if (isLoading) return <div>loading...</div>;
	return (
		<div className="display-block mb-10">
			<button onClick={() => setIsOpen(!isOpen)}>
				<p className="text-gray-500 flex">
					Assets ({data?.pages[0].data.total})
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
						{data?.pages.map((page) => {
							return page.data.clips.map(
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
							);
						})}
					</div>
					<div ref={ref}>
						{!isFetchingNextPage ? (
							<div className="flex justify-start">
								<div>
									<svg
										className="animate-spin -ml-1 mr-3 h-5 w-5 text-black text-3xl"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
									>
										<circle
											className="opacity-25"
											cx="12"
											cy="12"
											r="10"
											stroke="currentColor"
											stroke-width="4"
										></circle>
										<path
											className="opacity-75"
											fill="currentColor"
											d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
										></path>
									</svg>
								</div>
								<p>Loading...</p>
							</div>
						) : (
							<div>No more assets</div>
						)}
					</div>
				</div>
			</Transition>
		</div>
	);
};

export default Assets;
