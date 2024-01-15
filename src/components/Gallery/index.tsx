"use client";
import React from "react";
import Section from "./Section";
import { fetchBoards } from "@/lib/fetchBoards";
import { useQuery } from "@tanstack/react-query";
import Boards from "./Boards";
const Gallery: React.FC = () => {
	return (
		<div>
			<div className="m-10">
				<Boards />
				<Section sectionTitle="boards" sectionCount={4} />
			</div>
		</div>
	);
};

export default Gallery;
