import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function BasicLayout({ children }: LayoutProps) {
  return children;
}
