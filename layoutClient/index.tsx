import React, { ReactNode } from "react";
import Navbar from "../pages/Components/Navbar/index";

interface LayoutClientProps {
  children: ReactNode;
}

export default function LayoutClient({ children }: LayoutClientProps) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
