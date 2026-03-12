import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { IoStatsChartOutline } from "react-icons/io5";
import { MdOutlineDevices } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";

const FEATURES = [
  {
    icon: <HiOutlineClipboardDocumentList className="h-8 w-8" />,
    title: "Track Everything",
    description:
      "Catalog items, quests, fish, bugs, recipes, and more. Every collectible in one place with real-time progress tracking.",
  },
  {
    icon: <IoStatsChartOutline className="h-8 w-8" />,
    title: "Completion Stats",
    description:
      "Visual progress bars and percentage breakdowns show exactly how close you are to 100% completion.",
  },
  {
    icon: <MdOutlineDevices className="h-8 w-8" />,
    title: "Works Everywhere",
    description:
      "Responsive web apps that work on your phone, tablet, or desktop. Pull up your tracker right next to your game.",
  },
  {
    icon: <TbTargetArrow className="h-8 w-8" />,
    title: "Game-Specific",
    description:
      "Each tracker is custom-built for its game — not a generic checklist. We know the data because we play the games.",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="dark:border-border-dark relative border-t border-gray-200 px-4 py-24"
    >
      <div className="via-brand/30 pointer-events-none absolute top-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-linear-to-r from-transparent to-transparent" />

      <div className="mx-auto max-w-6xl">
        <div className="mb-4 text-center">
          <span className="text-brand text-xs font-semibold tracking-[0.3em] uppercase">
            Why GamerDex
          </span>
        </div>
        <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
          Built for Completionists
        </h2>
        <p className="mx-auto mb-16 max-w-xl text-center text-gray-600 dark:text-gray-400">
          We obsess over the details so you can obsess over your collection.
          Every tracker is crafted with the same care you put into your games.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group hover:border-brand/30 dark:border-border-dark dark:bg-surface-card dark:hover:border-brand/20 rounded-xl border border-gray-200 bg-white p-6 transition-all hover:shadow-lg dark:hover:shadow-[0_0_30px_rgba(0,212,255,0.05)]"
            >
              <div className="bg-brand/10 text-brand mb-4 inline-flex rounded-lg p-3">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-lg font-bold">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
