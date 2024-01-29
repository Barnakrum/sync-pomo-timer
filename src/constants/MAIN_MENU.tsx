import MenuCategory from "@/types/menu/MenuCategory";
import MenuItem from "@/types/menu/MenuItem";
import {
  AlarmClock,
  AlarmClockPlus,
  CalendarPlus,
  CalendarSearch,
} from "lucide-react";

let MAIN_MENU_CATEGORIES: MenuCategory[] = [
  {
    title: "Timer",
    icon: <AlarmClock />,
    items: [
      {
        title: "New room",
        href: "/timer/new",
        description: "Create new public or private room",
        icon: <CalendarPlus />,
      },
      {
        title: "Find room",
        href: "/timer/join",
        description: "Join random room or using friend's code",
        icon: <CalendarSearch />,
      },
    ],
  },
];

let MAIN_MENU_STANDALONE_ITEMS: MenuItem[] = [
  {
    title: "Quick Timer",
    href: "/time/quick",
    icon: <AlarmClockPlus />,
  },
];

export { MAIN_MENU_CATEGORIES, MAIN_MENU_STANDALONE_ITEMS };
