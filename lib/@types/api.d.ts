interface RegisterResponse {
	user: {
		_id: string;
		email: string;
		token: string;
		createdAt: string;
		updatedAt: string;
		__v: number;
	};
}

interface ListResponse {
	breed: Breed;
	list: string[];
}

type Breed = "chihuahua" | "husky" | "labrador" | "pug";
