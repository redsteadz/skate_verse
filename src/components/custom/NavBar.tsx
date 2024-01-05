import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

function BurgerMenu() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="ml-2 mr-2">
          <IconContext.Provider
            value={{ className: "w-8 h-8 bg-black text-white rounded-full" }}
          >
            <CgProfile />
          </IconContext.Provider>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
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
        <div className="flex w-full items-center justify-start">
            <div className="font-bold bg-black p-3 text-white m-0 mr-3">
              Skateverse
            </div>
          <Menubar>
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
        </div>
        <div className="flex w-full items-center justify-end">
          <Input placeholder="Search" className="max-w-96" />
          <IconContext.Provider
            value={{ className: "w-8 h-8" }}
          >
            <IoCartOutline />
          </IconContext.Provider>
          <BurgerMenu />
        </div>
      </div>
    </>
  );
}

export default Navbar;
