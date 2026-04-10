interface GameCardProps {
  id: string;
  title: string[];
  subtitle: string;
  indexTop: string;
  indexBottom: string;
  headerImage: string;
  iconImage: string;
  titleSize?: number;
  titleY?: number;
  href?: string;
  comingSoon?: boolean;
}

const PIXEL_CHARACTER = (
  <>
    <rect fill="#00D4FF" x="40" y="6" width="20" height="10" />
    <rect fill="#00D4FF" x="30" y="16" width="40" height="10" />
    <rect fill="#00D4FF" x="30" y="26" width="40" height="10" />
    <rect fill="#00D4FF" x="20" y="36" width="60" height="10" />
    <rect fill="#00D4FF" x="35" y="46" width="30" height="10" />
    <rect fill="#00D4FF" x="30" y="64" width="14" height="10" />
    <rect fill="#00D4FF" x="56" y="64" width="14" height="10" />
    <rect fill="#00D4FF" x="24" y="74" width="18" height="8" />
    <rect fill="#00D4FF" x="58" y="74" width="18" height="8" />
  </>
);

const PIXEL_WATERMARK = (
  <>
    <rect fill="#00D4FF" x="40" y="6" width="20" height="10" />
    <rect fill="#00D4FF" x="30" y="16" width="40" height="10" />
    <rect fill="#00D4FF" x="30" y="26" width="40" height="10" />
    <rect fill="#00D4FF" x="20" y="36" width="60" height="10" />
    <rect fill="#00D4FF" x="35" y="46" width="30" height="10" />
    <rect fill="#00D4FF" opacity="0.65" x="35" y="56" width="30" height="8" />
    <rect fill="#00D4FF" x="30" y="64" width="14" height="10" />
    <rect fill="#00D4FF" x="56" y="64" width="14" height="10" />
    <rect fill="#00D4FF" x="24" y="74" width="18" height="8" />
    <rect fill="#00D4FF" x="58" y="74" width="18" height="8" />
  </>
);

export default function GameCard({
  id,
  title,
  subtitle,
  indexTop,
  indexBottom,
  headerImage,
  iconImage,
  titleSize = 22,
  titleY = 240,
  href,
  comingSoon = false,
}: GameCardProps) {
  const subtitleY =
    title.length > 1 ? titleY + 20 * (title.length - 1) + 23 : titleY + 23;
  const dividerY = subtitleY + 22;
  const watermarkY = dividerY + 10;

  const cardContent = (
    <div className="relative">
      <svg
        viewBox="0 0 300 365"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="block h-auto w-full"
      >
        <defs>
          <clipPath id={`card-clip-${id}`}>
            <rect x="4" y="4" width="292" height="357" rx="16" />
          </clipPath>
          <clipPath id={`img-clip-${id}`}>
            <rect x="16" y="60" width="268" height="125" rx="8" />
          </clipPath>
          <clipPath id={`icon-clip-${id}`}>
            <rect x="16" y="305" width="40" height="40" rx="8" />
          </clipPath>
          <linearGradient id={`accent-grad-${id}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="0" />
            <stop offset="50%" stopColor="#00D4FF" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#00D4FF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id={`card-bg-${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#111828" />
            <stop offset="100%" stopColor="#07090F" />
          </linearGradient>
        </defs>

        <rect
          x="2"
          y="2"
          width="296"
          height="361"
          rx="18"
          fill="none"
          stroke="#00D4FF"
          strokeWidth="1"
          opacity="0.15"
        />

        <g clipPath={`url(#card-clip-${id})`}>
          <rect
            x="4"
            y="4"
            width="292"
            height="357"
            fill={`url(#card-bg-${id})`}
          />

          <g opacity="0.03" stroke="#00D4FF" strokeWidth="0.5">
            <line x1="4" y1="60" x2="296" y2="60" />
            <line x1="4" y1="120" x2="296" y2="120" />
            <line x1="4" y1="180" x2="296" y2="180" />
            <line x1="4" y1="240" x2="296" y2="240" />
            <line x1="4" y1="300" x2="296" y2="300" />
            <line x1="60" y1="4" x2="60" y2="361" />
            <line x1="120" y1="4" x2="120" y2="361" />
            <line x1="180" y1="4" x2="180" y2="361" />
            <line x1="240" y1="4" x2="240" y2="361" />
          </g>

          <rect
            x="4"
            y="4"
            width="292"
            height="2"
            fill={`url(#accent-grad-${id})`}
          />

          <text
            x="20"
            y="32"
            fontFamily="'Chakra Petch', sans-serif"
            fontWeight="700"
            fontSize="16"
            fill="#00D4FF"
            opacity="0.6"
          >
            {indexTop}
          </text>
          <text
            x="20"
            y="48"
            fontFamily="'Chakra Petch', sans-serif"
            fontWeight="400"
            fontSize="9"
            fill="#00D4FF"
            opacity="0.3"
            letterSpacing="0.1em"
          >
            {indexBottom}
          </text>

          <g transform="translate(262, 14) scale(0.28)" opacity="0.4">
            {PIXEL_CHARACTER}
          </g>

          <g clipPath={`url(#img-clip-${id})`}>
            <image
              href={headerImage}
              x="16"
              y="60"
              width="268"
              height="125"
              preserveAspectRatio="xMidYMid meet"
            />
          </g>
          <rect
            x="16"
            y="60"
            width="268"
            height="125"
            rx="8"
            fill="none"
            stroke="#00D4FF"
            strokeWidth="0.5"
            opacity="0.2"
          />

          <image
            href={iconImage}
            x="16"
            y="305"
            width="40"
            height="40"
            preserveAspectRatio="xMidYMid slice"
            clipPath={`url(#icon-clip-${id})`}
          />

          <line
            x1="40"
            y1="205"
            x2="260"
            y2="205"
            stroke="#00D4FF"
            strokeWidth="0.5"
            opacity="0.15"
          />

          {title.map((line, i) => (
            <text
              key={i}
              x="150"
              y={titleY + i * 20}
              fontFamily="'Chakra Petch', sans-serif"
              fontWeight="700"
              fontSize={titleSize}
              fill="#FFFFFF"
              textAnchor="middle"
              letterSpacing="0.02em"
            >
              {line}
            </text>
          ))}

          <text
            x="150"
            y={subtitleY}
            fontFamily="'Chakra Petch', sans-serif"
            fontWeight="400"
            fontSize="11"
            fill="#00D4FF"
            textAnchor="middle"
            letterSpacing="0.25em"
            opacity="0.8"
          >
            {subtitle}
          </text>

          <line
            x1="100"
            y1={dividerY}
            x2="200"
            y2={dividerY}
            stroke="#00D4FF"
            strokeWidth="0.5"
            opacity="0.1"
          />

          <g
            transform={`translate(132, ${watermarkY}) scale(0.35)`}
            opacity="0.08"
          >
            {PIXEL_WATERMARK}
          </g>

          <g transform="translate(280, 351) rotate(180)">
            <text
              x="0"
              y="12"
              fontFamily="'Chakra Petch', sans-serif"
              fontWeight="700"
              fontSize="16"
              fill="#00D4FF"
              opacity="0.6"
            >
              {indexTop}
            </text>
            <text
              x="0"
              y="28"
              fontFamily="'Chakra Petch', sans-serif"
              fontWeight="400"
              fontSize="9"
              fill="#00D4FF"
              opacity="0.3"
              letterSpacing="0.1em"
            >
              {indexBottom}
            </text>
          </g>

          <rect
            x="4"
            y="359"
            width="292"
            height="2"
            fill={`url(#accent-grad-${id})`}
          />
        </g>

        <rect
          x="4"
          y="4"
          width="292"
          height="357"
          rx="16"
          fill="none"
          stroke="#1a1e2a"
          strokeWidth="1"
        />
      </svg>
      {comingSoon && (
        <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/60 backdrop-blur-[2px]">
          <span className="text-brand -rotate-12 text-2xl font-bold tracking-widest uppercase">
            Coming Soon
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="game-card block cursor-pointer"
      >
        {cardContent}
      </a>
    );
  }

  return (
    <div
      className={`game-card ${comingSoon ? "cursor-default" : "cursor-pointer"}`}
    >
      {cardContent}
    </div>
  );
}

export const GAME_CARDS: GameCardProps[] = [
  {
    id: "d",
    title: ["DINKUM"],
    subtitle: "TRACKER",
    indexTop: "D",
    indexBottom: "TRK",
    headerImage: "/games/dinkum.jpg",
    iconImage: "/games/dinkum-icon.png",
    titleSize: 22,
    titleY: 240,
    href: "https://dinkum.gamerdex.app",
  },
  {
    id: "s",
    title: ["STARDEW VALLEY"],
    subtitle: "COMPANION",
    indexTop: "SV",
    indexBottom: "CMP",
    headerImage: "/games/stardew-valley.jpg",
    iconImage: "/games/stardew-valley-icon.png",
    titleSize: 18,
    titleY: 235,
    href: "https://stardew-valley.gamerdex.app",
  },
  {
    id: "m",
    title: ["SUPERMARKET", "SIMULATOR"],
    subtitle: "BUDDY",
    indexTop: "SS",
    indexBottom: "BDY",
    headerImage: "/games/supermarket-simulator.jpg",
    iconImage: "/games/supermarket-simulator-icon.jpg",
    titleSize: 15,
    titleY: 232,
    href: "https://supermarket-simulator.gamerdex.app",
  },
];
