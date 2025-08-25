import * as React from "react";
import { cn } from "@/lib/utils";

type ContainerSize = "sm" | "md" | "lg" | "xl" | "2xl" | "5xl" | "7xl";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: ContainerSize;
}

/**
 * Simple layout container that centers content and applies consistent horizontal padding.
 * Usage: <Container maxWidth="5xl" className="py-8">...</Container>
 */
export default function Container({
  children,
  className,
  maxWidth = "7xl",
  ...props
}: ContainerProps) {
  const sizes: Record<ContainerSize, string> = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "5xl": "max-w-5xl",
    "7xl": "max-w-7xl",
  };

  const widthClass = sizes[maxWidth];

  return (
    <div
      className={cn(`w-full ${widthClass} mx-auto px-4 sm:px-6 lg:px-8`, className)}
      {...props}
    >
      {children}
    </div>
  );
}
