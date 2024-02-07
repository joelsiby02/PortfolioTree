"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center bg-dark">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 flex justify-around", className)}
    >
      <Menu setActive={setActive}>
      <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
        <MenuItem setActive={setActive} active={active} item="About"></MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects"></MenuItem>
        <MenuItem setActive={setActive} active={active} item="Blogs"></MenuItem>
        {/* <MenuItem setActive={setActive} active={active} item="Connect"></MenuItem> */}



      </Menu>
    </div>
  );
}
