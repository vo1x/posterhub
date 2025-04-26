import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const ggSans = localFont({
	src: [
		{
			path: "../../public/fonts/ggsans.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../public/fonts/ggsansmedium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "../../public/fonts/ggsanssemibold.woff2",
			weight: "600",
			style: "normal",
		},
		{
			path: "../../public/fonts/ggsansbold.woff2",
			weight: "700",
			style: "normal",
		},
		{
			path: "../../public/fonts/ggsansextrabold.woff2",
			weight: "800",
			style: "normal",
		},
		{
			path: "../../public/fonts/ggsansitalic.woff2",
			weight: "400",
			style: "italic",
		},
		{
			path: "../../public/fonts/ggsansmediumitalic.woff2",
			weight: "500",
			style: "italic",
		},
		{
			path: "../../public/fonts/ggsanssemibolditalic.woff2",
			weight: "600",
			style: "italic",
		},
		{
			path: "../../public/fonts/ggsansbolditalic.woff2",
			weight: "700",
			style: "italic",
		},
		{
			path: "../../public/fonts/ggsansextrabolditalic.woff2",
			weight: "800",
			style: "italic",
		},
	],
	variable: "--font-discord",
	display: "swap",
});

const ggSansMono = localFont({
	src: [
		{
			path: "../../public/fonts/ggsansmono.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../public/fonts/ggsansmonobold.woff2",
			weight: "700",
			style: "normal",
		},
	],
	variable: "--font-discord-mono",
	display: "swap",
});

export const metadata: Metadata = {
	title: "PosterHub",
	description: "A movie posters site powered by TMDB.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${ggSans.variable} ${ggSansMono.variable} antialiased bg-[var(--ph-background)] text-[var(--ph-primary)] ${ggSans.className}`}
			>
				{children}
			</body>
		</html>
	);
}
