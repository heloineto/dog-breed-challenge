import type { ComponentProps } from "react";
import classNames from "../../../lib/utils/classNames";

type Props = ComponentProps<"svg">;

const Spinner = ({ className, ...restProps }: Props) => {
	return (
		<svg
			className={classNames("animate-spin h-12 w-12 text-teal-700", className)}
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			{...restProps}
		>
			<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
			<path
				className="opacity-75"
				fill="currentColor"
				d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
			/>
		</svg>
	);
};

export default Spinner;
