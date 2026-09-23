import { ImageResponse } from "next/og";

export const alt = "GamerDex — Track Your Game Progress";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const pixelRects = [
	{ x: 40, y: 6, w: 20, h: 10 },
	{ x: 30, y: 16, w: 40, h: 10 },
	{ x: 30, y: 26, w: 40, h: 10 },
	{ x: 20, y: 36, w: 60, h: 10 },
	{ x: 35, y: 46, w: 30, h: 10 },
	{ x: 35, y: 56, w: 30, h: 8, opacity: 0.65 },
	{ x: 30, y: 64, w: 14, h: 10 },
	{ x: 56, y: 64, w: 14, h: 10 },
	{ x: 24, y: 74, w: 18, h: 8 },
	{ x: 58, y: 74, w: 18, h: 8 },
];

const Image = () =>
	new ImageResponse(
		(
			<div
				style={{
					background: "#07090F",
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					fontFamily: "sans-serif",
					position: "relative",
				}}
			>
				<div
					style={{
						position: "absolute",
						inset: 0,
						background:
							"radial-gradient(ellipse at 50% 40%, rgba(0,212,255,0.12) 0%, transparent 60%)",
					}}
				/>

				<svg width="100" height="100" viewBox="0 0 100 90" style={{ marginBottom: 32 }}>
					{pixelRects.map((r, i) => (
						<rect
							key={i}
							fill="#00D4FF"
							opacity={r.opacity ?? 1}
							x={r.x}
							y={r.y}
							width={r.w}
							height={r.h}
						/>
					))}
				</svg>

				<div
					style={{
						display: "flex",
						color: "white",
						fontSize: 80,
						fontWeight: 700,
						letterSpacing: "-1px",
						marginBottom: 20,
					}}
				>
					<span>Gamer</span>
					<span style={{ color: "#00D4FF" }}>Dex</span>
				</div>

				<div
					style={{
						color: "rgba(255,255,255,0.65)",
						fontSize: 32,
						fontWeight: 400,
					}}
				>
					Track Your Game Progress
				</div>
			</div>
		),
		{ ...size }
	);

export default Image;
