"use client";

import {
  DarkThemeToggle,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
];

export default function SiteNavbar() {
  return (
    <Navbar
      fluid
      className="dark:border-border-dark dark:bg-surface-dark/90 fixed top-0 right-0 left-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md"
    >
      <NavbarBrand href="#hero">
        <svg
          viewBox="0 0 255 100"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2 h-11 w-auto"
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
            <tspan
              fill="currentColor"
              className="text-gray-900 dark:text-white"
            >
              Gamer
            </tspan>
            <tspan fill="#00D4FF">Dex</tspan>
          </text>
        </svg>
      </NavbarBrand>
      <div className="flex items-center gap-2 md:order-2">
        <DarkThemeToggle />
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        {NAV_LINKS.map((link) => (
          <NavbarLink
            key={link.href}
            href={link.href}
            className="font-medium tracking-wide"
          >
            {link.label}
          </NavbarLink>
        ))}
      </NavbarCollapse>
    </Navbar>
  );
}
