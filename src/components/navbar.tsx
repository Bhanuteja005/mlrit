"use client";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <Link href={"/blog"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Blog"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Archives">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/events">Events</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/gallery">Gallery</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact Us"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}