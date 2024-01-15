"use client";

import { ViewContext, ViewType } from "@/context/ViewContext";
import { useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
	const [queryClient] = useState(() => new QueryClient());
	const [view, setView] = useState<ViewType>("gallery");

	return (
		<QueryClientProvider client={queryClient}>
			<ViewContext.Provider value={{ view, setView }}>
				{children}
			</ViewContext.Provider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};

export default Providers;
