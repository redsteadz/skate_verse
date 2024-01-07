import { useState } from "react";

 // TODO: Make this more modular

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Input } from "@/components/ui/input";

import { CgProfile } from "react-icons/cg";
import { IconContext } from "react-icons";
import { BsCaretDown } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

function NavMenu() {
  return (
    <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger className={navigationMenuTriggerStyle()} >
            <GiHamburgerMenu /></NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

  );
}

function DropDownM() {
  return (
    <>
      <div className="">
        <DropdownMenu>
          <DropdownMenuTrigger className="ml-2 mr-2">
            <IconContext.Provider
              value={{ className: "w-8 h-8 bg-black text-white rounded-full" }}
            >
              <CgProfile />
            </IconContext.Provider>
          </DropdownMenuTrigger>
          <DropdownMenuContent >
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}

const menuItems = [
  {
    heading: "Specials",
    content: ["Specials", "New", "Sale", "Best Sellers"],
  },
  {
    heading: "Sale",
    content: ["Sale", "New", "Best Sellers"],
  },
  {
    heading: "Customize",
    content: ["Customize", "New", "Best Sellers"],
  },
  {
    heading: "Accessories",
    content: ["Accessories", "New", "Best Sellers"],
  },
];

function Navbar() {
  return (
    <>
      <div className="flex h-16 w-full items-center justify-between bg-white px-6 shadow-md sm:px-3">
        <div className="flex w-full items-center justify-between sm:justify-start">
          <NavMenu/>
          <div className="font-bold bg-black p-3 text-white m-0 mx-3">
            Skateverse
          </div>
          <Menubar className="hidden sm:flex">
            {menuItems.map((item) => (
              <MenubarMenu>
                <MenubarTrigger>{item.heading}</MenubarTrigger>
                <MenubarContent>
                  {item.content.map((c) => (
                    <MenubarItem>
                      {c}
                    </MenubarItem>
                  ))}
                </MenubarContent>
              </MenubarMenu>
            ))}
          </Menubar>
          <div className="block sm:hidden">
          <DropDownM />
          </div>
        </div>
        <div className="w-full items-center justify-end hidden sm:flex">
          <Input placeholder="Search" className="max-w-96" />
          <IconContext.Provider
            value={{ className: "w-8 h-8" }}
          >
            <IoCartOutline />
          </IconContext.Provider>
          <DropDownM />
        </div>
      </div>
    </>
  );
}

export default Navbar;
