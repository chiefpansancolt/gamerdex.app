import Image from "next/image";
import { FaDiscord, FaRegCopyright } from "react-icons/fa6";

export default function SiteFooter() {
  return (
    <footer className="dark:border-border-dark dark:bg-surface-dark border-t border-gray-200 bg-white px-4 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6">
        <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
          <a href="#hero" className="flex items-center gap-2">
            <Image
              src="/gamerdex-logo.png"
              alt="GamerDex"
              width={160}
              height={32}
              className="h-11 w-auto"
            />
          </a>
          <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
            <a href="#features" className="hover:text-brand">
              Features
            </a>
            <a href="#about" className="hover:text-brand">
              About
            </a>
            <a
              href="https://discord.gg/NBTjUCvqev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand"
              aria-label="Join our Discord"
            >
              <FaDiscord className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="dark:bg-border-dark h-px w-full bg-gray-200" />
        <p className="text-sm text-gray-500 dark:text-gray-400">
          <FaRegCopyright className="inline" /> {new Date().getFullYear()} GamerDex. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
