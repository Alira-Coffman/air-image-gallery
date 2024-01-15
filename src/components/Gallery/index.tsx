"use client";
import React from "react";
import Assets from "./Assets";
import { fetchBoards } from "@/lib/fetchBoards";
import { useQuery } from "@tanstack/react-query";
import Boards from "./Boards";
const Gallery: React.FC = () => {
	return (
		<div>
			<div className="m-10">
				<Boards />
				<Assets sectionTitle="boards" sectionCount={4} />
			</div>
		</div>
	);
};

export default Gallery;
