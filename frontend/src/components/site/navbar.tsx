"use client";
import React from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton,
} from "@/components/ui/resizable-navbar";

const navItems = [
  { name: "Shop", link: "#shop" },
  { name: "Drops", link: "#drops" },
  { name: "Story", link: "#story" },
  { name: "Tribe", link: "#tribe" },
];

export function SiteNavbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <Navbar>
      <NavBody>
        <div className="flex items-center gap-2">
          <NavbarLogo />
        </div>
        <NavItems items={navItems} onItemClick={() => setOpen(false)} />
        <div className="hidden items-center gap-2 lg:flex">
          <NavbarButton variant="secondary">Login</NavbarButton>
          <NavbarButton variant="flux">Join Tribe</NavbarButton>
        </div>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle isOpen={open} onClick={() => setOpen((s) => !s)} />
        </MobileNavHeader>
        <MobileNavMenu isOpen={open} onClose={() => setOpen(false)}>
          <div className="flex w-full flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="rounded-lg px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="mt-6 flex w-full flex-col gap-2">
            <NavbarButton as="button" className="w-full" variant="secondary">
              Login
            </NavbarButton>
            <NavbarButton as="button" className="w-full" variant="flux">
              Join Tribe
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}

export default SiteNavbar;
