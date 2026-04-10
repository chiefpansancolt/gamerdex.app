export default function AboutSection() {
  return (
    <section
      id="about"
      className="dark:border-border-dark relative border-t border-gray-200 px-4 py-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-6 flex justify-center">
          <svg viewBox="0 0 100 90" className="h-20 w-auto opacity-60">
            <g transform="translate(0, 0)">
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
          </svg>
        </div>

        <div className="mb-4">
          <span className="text-brand text-xs font-semibold tracking-[0.3em] uppercase">
            About
          </span>
        </div>
        <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
          What is GamerDex?
        </h2>
        <p className="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          GamerDex is a collection of game-specific tracker companions designed
          for players who want to see and do everything. Whether you&apos;re
          cataloging every fish in Dinkum, completing the community center in
          Stardew Valley, or stocking every shelf in Supermarket Simulator,
          we&apos;ve got a tracker built just for that.
        </p>
        <p className="mb-10 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          Each tracker is hand-crafted with accurate, up-to-date game data and
          designed to be used alongside your gameplay. No ads, no accounts
          required, just open and start tracking.
        </p>

        <div className="flex flex-wrap justify-center gap-8 text-center">
          <div>
            <div className="text-brand text-3xl font-bold">3</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Game Trackers
            </div>
          </div>
          <div className="dark:bg-border-dark h-12 w-px bg-gray-200" />
          <div>
            <div className="text-brand text-3xl font-bold">100%</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Free to Use
            </div>
          </div>
          <div className="dark:bg-border-dark h-12 w-px bg-gray-200" />
          <div>
            <div className="text-brand text-3xl font-bold">0</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Ads or Sign-ups
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
