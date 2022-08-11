import { Button, Dialog, IconButton } from "@mui/material";
import { X } from "phosphor-react";
import { useState } from "react";
import ImageColumns from "./ImageColumns";

interface Props {
	list: string[];
}

const ImageGrid = ({ list }: Props) => {
	const [imageLimit, setImageLimit] = useState(10);
	const [selectedImage, setSelectedImage] = useState<string | null>(null);
	const [openDialog, setOpenDialog] = useState<boolean>(false);

	const images = list.slice(0, imageLimit);
	const reachedLimit = imageLimit >= list.length;

	return (
		<>
			<div tabIndex={-1} className="relative w-full">
				<div className="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
					<ImageColumns
						images={images}
						onSelectImage={(image: string) => {
							setSelectedImage(image);
							setOpenDialog(true);
						}}
					/>
				</div>
				{!reachedLimit ? (
					<div className="inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-white pt-32 pb-8 absolute -mx-5 -mb-5">
						<Button
							className="w-60 bg-teal-900 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 text-sm text-white font-semibold h-12"
							onClick={() => setImageLimit((current) => current + 10)}
						>
							Mostrar mais
						</Button>
					</div>
				) : null}
			</div>
			<Dialog onClose={() => setOpenDialog(false)} open={openDialog} maxWidth="md">
				<div className="h-10 bg-slate-300 flex justify-end px-5 items-center">
					<IconButton
						className="h-7 w-7 p-0 border-solid rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#cbd5e1] focus:ring-slate-500"
						onClick={() => setOpenDialog(false)}
					>
						<span className="sr-only">Close modal</span>
						<X className="h-5 w-5 text-slate-600" weight="bold" />
					</IconButton>
				</div>
				<div className="p-5">
					{selectedImage ? <img className="rounded-md" src={selectedImage} alt="" /> : null}
				</div>
			</Dialog>
		</>
	);
};

export default ImageGrid;
