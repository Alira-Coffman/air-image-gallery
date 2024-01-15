import React from "react";

export type ViewType = "gallery" | "table";
export const ViewContext = React.createContext<{
	view: ViewType;
	setView: React.Dispatch<React.SetStateAction<ViewType>>;
}>({
	view: "gallery",
	setView: () => {},
});
