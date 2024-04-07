import React, { ReactNode } from "react";
import Navbar from '../pages/Components/Navbar';




interface LayoutClientProps {
  children: ReactNode;
}

export default function LayoutClient({ children }: LayoutClientProps) {
  return (
    <div>
      <Navbar />
      <main>
        {children}
      </main>
    
       
      
    </div>
  );
}



