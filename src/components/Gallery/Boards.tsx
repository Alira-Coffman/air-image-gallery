"use client";
import React, { useState } from "react";
import GalleryItem from "./GalleryItem";
import { Transition } from "@headlessui/react";
import { IconArrowDown, IconArrowRight } from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query";
import { fetchBoards } from "@/lib/fetchBoards";

const Boards: React.FC = ({}) => {
	const [isOpen, setIsOpen] = useState(false);
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["boards"],
		staleTime: 60 * 1000,
		queryFn: async () => {
			const boards = await fetchBoards();
			// if (boards?.error) {
			// 	throw new Error(boards?.error);
			// }
			return boards;
		},
	});
	if (isLoading) return <div>loading...</div>;
	return (
		<div className="display-block mb-10">
			<button onClick={() => setIsOpen(!isOpen)}>
				<p className="text-gray-500 flex">
					Boards ({data.total}){isOpen ? <IconArrowDown /> : <IconArrowRight />}
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
						{/* Gallery items go here */}
						{data.data.map(
							(board: { id: string; thumbnails: string[]; title: string }) => {
								return (
									<GalleryItem
										key={board.id}
										imageUrl={board.thumbnails[0]}
										caption={board.title}
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

export default Boards;
