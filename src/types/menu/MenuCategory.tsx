import React from "react";
import MenuItem from "./MenuItem";

type MenuCategory = {
  title: string;
  icon: React.ReactNode;
  items: MenuItem[];
};

export default MenuCategory;
