"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Hardware", link: "/hardware" },
    { name: "Software", link: "/software" },
    { name: "Community", link: "/community" },
    { name: "Store", link: "/store" },
    { name: "Support", link: "/support" },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-customBlack text-white"
      maxWidth="full"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <h1 className="text-xl font-bold">
            TECHNOLOGY<span className="text-customGreen">-X</span>
          </h1>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-5" justify="center">
        {menuItems.map(({ name, link }, index) => (
          <NavbarItem key={index}>
            <Link
              href={link}
              className="relative font-medium text-white group hover:text-customGreen transition-all duration-300"
            >
              {name}
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-customGreen rounded-full transition-all duration-300 group-hover:w-full" />
            </Link>
          </NavbarItem>
        ))}
        <FontAwesomeIcon
          icon={faHeart}
          className="text-white hover:text-customGreen transition"
          width={24}
        />
      </NavbarContent>

      <NavbarMenu className="bg-customGray">
        {menuItems.map(({ name, link }, index) => (
          <NavbarMenuItem key={index}>
            <Link href={link} className="text-white w-full" size="lg">
              {name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
