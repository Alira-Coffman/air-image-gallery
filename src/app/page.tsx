"use client";

import Gallery from "@/components/Gallery";
import MenuBar from "@/components/global/MenuBar";
import { ViewContext, ViewType } from "@/context/ViewContext";
import { useState } from "react";

// import { fetchAssets } from "../helpers/fetchAssets";
export default function Home() {
	const [view, setView] = useState<ViewType>("gallery");
	return (
		<main>
			<ViewContext.Provider value={{ view, setView }}>
				<MenuBar />
				<hr className="h-px mt-1  bg-gray-100 border-0 dark:bg-gray-200"></hr>

				<Gallery />
			</ViewContext.Provider>
		</main>
	);
}
