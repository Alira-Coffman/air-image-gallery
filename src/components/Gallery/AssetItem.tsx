import Image from "next/image";
import React from "react";
import { shimmer, toBase64 } from "./shimmer";

interface AssetItemProps {
	imageUrl: string;
	fileName: string;
	fileType: string;
	fileSize: string;
	fileDimensions: string;
	fileWidth: number;
	fileHeight: number;
}

const AssetItem: React.FC<AssetItemProps> = ({
	imageUrl,
	fileName,
	fileType,
	fileSize,
	fileDimensions,
	fileWidth,
	fileHeight,
}) => {
	/* TODO:
	 * Add file type and file size to the asset item.
	 * Add a hover state to the asset item that shows the file type and file size.
	 * add size adjustments (i.e a more interesting grid)
	 */
	return (
		<div className="max-w-60 max-h-60 relative  max-w-xs rounded overflow-hidden m-2 hover:border-4 hover:border-solid transition-colors duration-200 ease-in-out">
			<Image
				src={imageUrl}
				alt={fileName}
				width={fileWidth}
				height={fileHeight}
				quality={75}
				loading="lazy"
				className="rounded"
				placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
			/>
			<div className="absolute inset-0 bg-gray-500 opacity-50 rounded-md"></div>
			<div className="absolute inset-0 flex flex-col flex-end justify-end p-2">
				<p className="text-white text-2xl font-bold">{fileName}</p>
			</div>
		</div>
	);
};

export default AssetItem;
