import type { IReleaseDate } from "@/types";

export const getReleaseDateObj = (dateString: string): IReleaseDate => {
	if (!dateString?.trim()) {
		return { day: null, month: null, year: null };
	}

	try {
		const dateSegments = dateString.split("-");

		if (dateSegments.length !== 3) {
			throw new Error("Invalid date format. Expected YYYY-MM-DD");
		}

		const year = Number.parseInt(dateSegments[0], 10);
		const month = Number.parseInt(dateSegments[1], 10);
		const day = Number.parseInt(dateSegments[2], 10);

		if (Number.isNaN(year) || Number.isNaN(month) || Number.isNaN(day)) {
			throw new Error("Date segments must be valid numbers");
		}

		return { day, month, year };
	} catch (error) {
		console.warn(`Failed to parse date string "${dateString}":`, error);
		return { day: null, month: null, year: null };
	}
};
