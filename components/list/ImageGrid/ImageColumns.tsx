import type { ReactElement } from "react";

interface Props {
	images: string[];
	onSelectImage: (image: string) => void;
}

type Column = 0 | 1 | 2;

const ImageColumns = ({ images, onSelectImage }: Props) => {
	const columns: Record<Column, ReactElement[]> = { 0: [], 1: [], 2: [] };

	for (let i = 0; i <= images.length; i += 3) {
		for (const column of [0, 1, 2] as Column[]) {
			const image = images[i + column];

			columns[column].push(
				<li className="text-sm leading-6" key={image}>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						className="flex-none w-full rounded-md object-cover hover:scale-105 transition-transform hover:z-10 cursor-pointer"
						onClick={() => onSelectImage(image)}
						alt=""
						src={image}
						loading="lazy"
					/>
				</li>
			);
		}
	}

	return (
		<>
			<ul className="space-y-8">{columns[0]}</ul>
			<ul className="space-y-8">{columns[1]}</ul>
			<ul className="space-y-8">{columns[2]}</ul>
		</>
	);
};

export default ImageColumns;
