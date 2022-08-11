import type { ReactElement } from "react";

interface Props {
	images: string[];
}

type Column = 0 | 1 | 2;

const ImageColumns = ({ images }: Props) => {
	const columns: Record<Column, ReactElement[]> = { 0: [], 1: [], 2: [] };

	for (let i = 0; i <= images.length; i += 3) {
		for (const column of [0, 1, 2] as Column[]) {
			columns[column].push(
				<li className="text-sm leading-6">
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						className="flex-none rounded-md object-cover hover:scale-105 transition-transform"
						alt=""
						src={images[i + column]}
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
