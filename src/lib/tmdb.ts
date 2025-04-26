import type {
	IQueryResult,
	TMDBResult,
	TMDBSearchResponse,
	TMDBMediaDetails,
	MediaDetails,
} from "@/types";

import { getReleaseDateObj } from "./parser";

import { getPosterImageUrls, getBackdropImageUrls } from "./image";

const API_KEY = process.env.TMDB_API_KEY;

export const searchTMDB = async (
	query: string,
): Promise<IQueryResult[] | null> => {
	const url = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${query}`;
	try {
		const response = await fetch(url);
		if (!response.ok) throw new Error("API ERROR");
		const data = (await response.json()) as TMDBSearchResponse;
		const results: IQueryResult[] = [];

		for (const result of data.results.filter(
			(result: TMDBResult) => result.media_type !== "person",
		)) {
			results.push({
				id: result.id,
				title: {
					english: result.title || result.name || "",
					original: result.original_title || result.original_name || "",
				},
				overview: result.overview,
				type: result.media_type,
				coverImage: getPosterImageUrls(result.poster_path),
				backdropImage: getBackdropImageUrls(result.poster_path),
				releaseDate: getReleaseDateObj(
					result.release_date || result.first_air_date || "",
				),
				originalLanguage: result.original_language,
				adult: result.adult,
			});
		}

		return results;
	} catch (error) {
		console.error(error);
		return null;
	}
};

export const getMediaDetails = async (
	id: number,
	type: string,
): Promise<MediaDetails | null> => {
	const url = `https://api.themoviedb.org/3/${type}/${id}?append_to_response=external_ids,images,videos&api_key=${API_KEY}`;

	try {
		const response = await fetch(url);
		if (!response.ok) throw new Error("API ERROR");
		const data = (await response.json()) as TMDBMediaDetails;

		return {
			id: data.id,
			title: {
				english: data.title || data.name || "",
				original: data.original_title || data.original_name || "",
			},
			overview: data.overview,
			type,
			coverImage: getPosterImageUrls(data.poster_path),
			backdropImage: getBackdropImageUrls(data.poster_path),
			releaseDate: getReleaseDateObj(
				data.release_date || data.first_air_date || "",
			),
			originalLanguage: data.original_language,
			adult: data.adult,
			runtime: data.runtime,
			genres: data.genres.map((genre) => genre.name),
			status: data.status,
			numberOfSeasons: data.number_of_seasons,
			numberOfEpisodes: data.number_of_episodes,
			inProduction: data.in_production,
			lastEpisodeToAir: data.last_episode_to_air,
			externalIds: {
				imdbId: data.external_ids.imdb_id,
				facebookId: data.external_ids.facebook_id,
				instagramId: data.external_ids.instagram_id,
				twitterId: data.external_ids.twitter_id,
			},
			posters: data.images.posters,
		};
	} catch (error) {
		console.error(error);
		return null;
	}
};

export const getTrending = async (): Promise<IQueryResult[] | null> => {
	const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;
	try {
		const response = await fetch(url);
		if (!response.ok) throw new Error("API ERROR");
		const data = (await response.json()) as TMDBSearchResponse;
		const results: IQueryResult[] = [];

		for (const result of data.results) {
			results.push({
				id: result.id,
				title: {
					english: result.title || result.name || "",
					original: result.original_title || result.original_name || "",
				},
				overview: result.overview,
				type: result.media_type,
				coverImage: getPosterImageUrls(result.poster_path),
				backdropImage: getBackdropImageUrls(result.poster_path),
				releaseDate: getReleaseDateObj(
					result.release_date || result.first_air_date || "",
				),
				originalLanguage: result.original_language,
				adult: result.adult,
			});
		}

		return results;
	} catch (error) {
		console.error(error);
		return null;
	}
};
