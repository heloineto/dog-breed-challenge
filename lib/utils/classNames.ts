type ClassType = boolean | string | null | undefined;

const classNames = (...classes: ClassType[]) => {
	let index = 0;
	let str = "";

	while (index < classes.length) {
		if (typeof classes[index] === "string") {
			str && (str += " ");
			str += classes[index];
		}

		index++;
	}

	return str;
};

export default classNames;
