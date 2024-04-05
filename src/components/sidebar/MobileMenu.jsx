"use client";

import Image from "next/image";
import menuIcon from "@/../public/menu.png";
import Sidebar from "@/components/sidebar/Sidebar";
import { useState } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="lg:hidden">
      <button
        className="rounded-md p-2 h-10 w-10"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image src={menuIcon} alt="menu" />
      </button>
      {isOpen && (
        <aside className="absolute top-12 left-0 min-h-[calc(100vh-3rem)] bg-white px-3 pb-5">
          <Sidebar />
        </aside>
      )}
    </div>
  );
};
export default MobileMenu;
