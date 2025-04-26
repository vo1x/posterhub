import { type NextRequest, NextResponse } from "next/server";

import { getMediaDetails } from "@/lib/tmdb";

export async function GET(request: NextRequest) {
	const id = request.nextUrl.searchParams.get("mediaId");
	const type = request.nextUrl.searchParams.get("type");

	if (!id || !type) {
		console.error("Missing id or type");
		return NextResponse.json({ message: "Missing params" }, { status: 400 });
	}

	const mediaDetails = await getMediaDetails(Number.parseInt(id), type);

	if (!mediaDetails)
		return NextResponse.json({ message: "Error" }, { status: 500 });

	return NextResponse.json(mediaDetails, { status: 200 });
}
