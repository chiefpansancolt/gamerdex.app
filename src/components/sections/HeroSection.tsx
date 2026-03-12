import GameCard, { GAME_CARDS } from "../GameCard";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center overflow-hidden px-4 pt-24"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.04]">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#00D4FF"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="animate-glow-pulse bg-brand pointer-events-none absolute top-1/4 h-125 w-125 rounded-full opacity-[0.04] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-3 flex justify-center">
          <svg
            viewBox="0 0 255 100"
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-auto sm:h-20"
          >
            <g transform="translate(10, 50) scale(0.55) translate(-20, -44)">
              <rect fill="#00D4FF" x="40" y="6" width="20" height="10" />
              <rect fill="#00D4FF" x="30" y="16" width="40" height="10" />
              <rect fill="#00D4FF" x="30" y="26" width="40" height="10" />
              <rect fill="#07090F" x="33" y="27" width="8" height="8" />
              <rect fill="#07090F" x="59" y="27" width="8" height="8" />
              <rect
                fill="#00D4FF"
                opacity="0.9"
                x="35"
                y="29"
                width="4"
                height="4"
              />
              <rect
                fill="#00D4FF"
                opacity="0.9"
                x="61"
                y="29"
                width="4"
                height="4"
              />
              <rect fill="#00D4FF" x="20" y="36" width="60" height="10" />
              <rect fill="#00D4FF" x="35" y="46" width="30" height="10" />
              <rect
                fill="#00D4FF"
                opacity="0.65"
                x="35"
                y="56"
                width="30"
                height="8"
              />
              <rect fill="#00D4FF" x="30" y="64" width="14" height="10" />
              <rect fill="#00D4FF" x="56" y="64" width="14" height="10" />
              <rect fill="#00D4FF" x="24" y="74" width="18" height="8" />
              <rect fill="#00D4FF" x="58" y="74" width="18" height="8" />
            </g>
            <text
              x="58"
              y="63"
              fontFamily="'Chakra Petch', sans-serif"
              fontWeight="600"
              fontSize="36"
              letterSpacing="-0.5"
            >
              <tspan className="fill-gray-900 dark:fill-white">Gamer</tspan>
              <tspan fill="#00D4FF">Dex</tspan>
            </text>
          </svg>
        </div>

        <h1 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Your Ultimate <span className="text-brand">Game Companion</span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-base text-gray-600 dark:text-gray-400">
          Track items, complete collections, and conquer every game with
          purpose-built tracker companions. Never miss a collectible again.
        </p>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="flex items-center justify-center gap-6 lg:gap-10">
          {GAME_CARDS.map((card) => (
            <div key={card.id} className="w-80 sm:w-96 lg:w-md">
              <GameCard {...card} />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 flex flex-col items-center gap-2">
        <span className="text-xs tracking-[0.3em] text-gray-400 uppercase dark:text-gray-600">
          Scroll
        </span>
        <div className="from-brand/50 h-8 w-px bg-linear-to-b to-transparent" />
      </div>
    </section>
  );
}
