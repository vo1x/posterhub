import { type NextRequest, NextResponse } from "next/server";

import { searchTMDB } from "@/lib/tmdb";

export async function GET(request: NextRequest) {
	const query = request.nextUrl.searchParams.get("q");
	if (!query)
		return NextResponse.json(
			{ message: "Search query is required" },
			{ status: 400 },
		);

	const searchResults = await searchTMDB(query);

	if (!searchResults)
		return NextResponse.json({ message: "Error" }, { status: 500 });

	return NextResponse.json(searchResults, { status: 200 });
}
