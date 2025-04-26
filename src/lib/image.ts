export const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

export enum ImageSize {
	PosterSmall = "w92",
	PosterMedium = "w185",
	PosterLarge = "w342",
	PosterXLarge = "w500",
	PosterXXLarge = "w780",
	PosterOriginal = "original",

	BackdropSmall = "w300",
	BackdropMedium = "w780",
	BackdropLarge = "w1280",
	BackdropOriginal = "original",
}

export function getImageUrl(
	path: string | null,
	size: ImageSize,
): string | null {
	if (!path?.trim()) return null;
	return `${TMDB_IMAGE_BASE_URL}/${size}${path}`;
}

export function getPosterImageUrls(path: string | null) {
	return {
		small: getImageUrl(path, ImageSize.PosterSmall),
		medium: getImageUrl(path, ImageSize.PosterMedium),
		large: getImageUrl(path, ImageSize.PosterLarge),
		original: getImageUrl(path, ImageSize.PosterOriginal),
	};
}

export function getBackdropImageUrls(path: string | null) {
	return {
		small: getImageUrl(path, ImageSize.BackdropSmall),
		medium: getImageUrl(path, ImageSize.BackdropMedium),
		large: getImageUrl(path, ImageSize.BackdropLarge),
		original: getImageUrl(path, ImageSize.BackdropOriginal),
	};
}
