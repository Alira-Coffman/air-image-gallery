export const fetchBoards = async () => {
	try {
		const response = await fetch(
			"https://api.air.inc/shorturl/bDkBvnzpB/boards/c74bbbc8-602b-4c88-be71-9e21b36b0514",
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
					ancestorCutoff: "c74bbbc8-602b-4c88-be71-9e21b36b0514",
					numThumbnails: 1,
					sortBy: "custom",
					view: "c74bbbc8-602b-4c88-be71-9e21b36b0514",
					includeAncestors: true,
					libraryBoards: "ALL",
					limit: 30,
					cursor: null,
					sortField: { direction: "desc", name: "dateModified" },
				}),
			}
		);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();
		console.log(data);
		return data;
	} catch (error) {
		console.error("Error:", error);
	}
};
