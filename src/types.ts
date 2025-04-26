export interface IQueryResult {
	id: number;
	title: {
		english: string;
		original: string;
	};
	overview: string;
	type: string;
	coverImage: {
		small: string | null;
		medium: string | null;
		large: string | null;
		original: string | null;
	};
	backdropImage: {
		small: string | null;
		medium: string | null;
		large: string | null;
		original: string | null;
	};
	releaseDate: IReleaseDate;
	originalLanguage: string;
	adult: boolean;
}

export interface IReleaseDate {
	day: null | number;
	month: null | number;
	year: null | number;
}

export interface TMDBResult {
	id: number;
	title?: string;
	name?: string;
	original_name?: string;
	original_title?: string;
	overview: string;
	media_type: string;
	poster_path: string | null;
	backdrop_path: string | null;
	release_date?: string;
	first_air_date?: string;
	original_language: string;
	adult: boolean;
}

export interface TMDBSearchResponse {
	results: TMDBResult[];
	page: number;
	total_results: number;
	total_pages: number;
}

export interface TMDBPoster {
	aspect_ratio: number;
	file_path: string;
	height: number;
	iso_639_1: string | null;
	vote_average: number;
	vote_count: number;
	width: number;
}

export interface TMDBEpisode {
	id: number;
	name: string;
	overview: string;
	vote_average: number;
	vote_count: number;
	air_date: string;
	episode_number: number;
	episode_type: string;
	production_code: string;
	runtime: number;
	season_number: number;
	show_id: number;
	still_path: string | null;
}

export interface TMDBMediaDetails extends TMDBResult {
	images: {
		posters: TMDBPoster[];
	};
	runtime?: number;
	genres: { id: number; name: string }[];
	status: string;
	number_of_seasons?: number;
	number_of_episodes?: number;
	in_production?: boolean;
	last_episode_to_air?: TMDBEpisode;
	external_ids: {
		imdb_id?: string;
		facebook_id?: string;
		instagram_id?: string;
		twitter_id?: string;
	};
}

export interface MediaDetails {
	id: number;
	title: {
		english: string;
		original: string;
	};
	overview: string;
	type: string;
	coverImage: {
		small: string | null;
		medium: string | null;
		large: string | null;
		original: string | null;
	};
	backdropImage: {
		small: string | null;
		medium: string | null;
		large: string | null;
		original: string | null;
	};
	posters: TMDBPoster[];
	releaseDate: IReleaseDate;
	originalLanguage: string;
	adult: boolean;
	runtime?: number;
	genres: string[];
	status: string;
	numberOfSeasons?: number;
	numberOfEpisodes?: number;
	inProduction?: boolean;
	lastEpisodeToAir?: TMDBEpisode;
	externalIds: {
		imdbId?: string;
		facebookId?: string;
		instagramId?: string;
		twitterId?: string;
	};
}
