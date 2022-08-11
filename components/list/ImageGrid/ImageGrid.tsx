import ImageColumns from "./ImageColumns";

interface Props {
	list: string[];
}

const ImageGrid = ({ list }: Props) => {
	const images = list.splice(0, 10);

	return (
		<div
			tabIndex={-1}
			className="relative max-w-7xl mx-auto px-4 focus:outline-none sm:px-3 md:px-5"
		>
			<div className="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 max-h-[33rem] overflow-hidden">
				<ImageColumns images={images} />
			</div>
			<div className="inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-white pt-32 pb-8 pointer-events-none absolute">
				<button
					type="button"
					className="relative bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-sm text-white font-semibold h-12 px-6 rounded-lg flex items-center dark:bg-slate-700 dark:hover:bg-slate-600 pointer-events-auto"
				>
					Show more...
				</button>
			</div>
		</div>
	);
};

export default ImageGrid;
