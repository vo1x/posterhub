/**
 * Checks if a string is a valid IMDb ID
 * IMDb IDs start with 'tt' followed by a series of digits (typically 7-8 digits)
 * @param id string to check
 * @returns boolean indicating if the string is a valid IMDb ID
 */
export const isIMDbId: (id: string) => boolean = (id: string) => {
	return /^tt\d{7,8}$/.test(id);
};
