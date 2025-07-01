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
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <h1 className="font-bold text-medium md:text-xl">
            TECHNOLOGY<span className="text-customGreen">-X</span>
          </h1>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-5 sm:flex" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link
              href={item.link}
              className="relative text-white group font-medium hover:text-customGreen transition-all duration-300"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-customGreen transition-all duration-300 rounded-full group-hover:w-full"></span>
            </Link>
          </NavbarItem>
        ))}
        <FontAwesomeIcon
          icon={faHeart}
          width={30}
          className="hover:text-customGreen hover:shadow-custom-green"
        />
      </NavbarContent>
      <NavbarMenu className="bg-customGray">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full text-white" href="#" size="lg">
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
