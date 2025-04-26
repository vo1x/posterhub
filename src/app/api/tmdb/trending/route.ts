import { NextResponse } from "next/server";

import { getTrending } from "@/lib/tmdb";

export async function GET() {
	const trendingResults = await getTrending();

	if (!trendingResults)
		return NextResponse.json(
			{ message: "Error fetching trending media." },
			{ status: 500 },
		);

	return NextResponse.json(trendingResults, { status: 200 });
}
