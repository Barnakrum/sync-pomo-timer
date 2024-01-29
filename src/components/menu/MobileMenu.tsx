"use client";

import { ChevronDownIcon, Menu } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import {
  MAIN_MENU_CATEGORIES,
  MAIN_MENU_STANDALONE_ITEMS,
} from "@/constants/MAIN_MENU";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const MobileMenu = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent className="w-full">
        <SheetHeader className="mb-4">Menu</SheetHeader>

        <Accordion type="multiple">
          {MAIN_MENU_CATEGORIES.map((category, index) => (
            <AccordionItem
              className="border-0"
              key={category.title}
              value={"item-" + index}
            >
              <AccordionTrigger className="w-full">
                <div className="flex items-center gap-2 rounded-md p-2 text-xl">
                  <div className="flex h-10 w-10 flex-shrink-0 flex-grow-0 items-center justify-center text-2xl">
                    {category.icon}
                  </div>
                  {category.title}
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="flex flex-col gap-2 px-8">
                  {category.items.map((item) => (
                    <Link key={item.title} href={item.href}>
                      <li className="flex gap-4 rounded-md p-2 hover:bg-muted">
                        <div className="flex shrink-0 grow-0 items-center justify-center p-0">
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-xl">{item.title}</div>
                          <div className="text-muted-foreground">
                            {item.description}
                          </div>
                        </div>
                      </li>
                    </Link>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        {MAIN_MENU_STANDALONE_ITEMS.map((item) => (
          <Link key={item.title} href={item.href}>
            <div className="flex items-center gap-2 rounded-md p-2 text-xl text-primary hover:text-primary hover:underline">
              <div className="flex h-10 w-10 flex-shrink-0 flex-grow-0 items-center justify-center text-2xl">
                {item.icon}
              </div>
              {item.title}
            </div>
          </Link>
        ))}
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
