import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const MaxWidthContainer = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto flex w-full lg:max-w-[85%] xl:max-w-[80%]",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthContainer;
