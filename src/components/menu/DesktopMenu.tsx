"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  MAIN_MENU_CATEGORIES,
  MAIN_MENU_STANDALONE_ITEMS,
} from "@/constants/MAIN_MENU";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { AlarmClockPlus } from "lucide-react";

const DesktopMenu = () => {
  return (
    <NavigationMenu className="invisible lg:visible">
      {MAIN_MENU_CATEGORIES.map((category) => (
        <NavigationMenuList key={category.title}>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <div className="flex items-center justify-center gap-2">
                {category.icon}

                {category.title}
              </div>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-2 p-2 sm:w-60">
                {category.items.map((item) => (
                  <Link href={item.href} key={item.title}>
                    <li className="block rounded-md hover:bg-accent">
                      <NavigationMenuLink asChild>
                        <div className="flex flex-row p-1">
                          <div className="flex h-16 w-16 flex-shrink-0 flex-grow-0 items-center justify-center">
                            {item.icon}
                          </div>
                          <div className="inline ">
                            <p>{item.title}</p>
                            <p className="text-sm  text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </NavigationMenuLink>
                    </li>
                  </Link>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {MAIN_MENU_STANDALONE_ITEMS.map((item) => (
            <NavigationMenuItem key={item.title}>
              <Link href={item.href}>
                <NavigationMenuLink
                  asChild
                  className={cn(navigationMenuTriggerStyle(), "font-bold")}
                >
                  <div className="flex items-center justify-center gap-2 text-primary hover:text-primary">
                    {item.icon}
                    {item.title}
                  </div>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      ))}
    </NavigationMenu>
  );
};

export default DesktopMenu;
