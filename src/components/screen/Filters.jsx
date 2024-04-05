"use client";

import { filters } from "@/lib/data";
import Image from "next/image";
import { useState } from "react";
import filterIcon from "@/../public/images/icons/filter.png";
import arrow from "@/../public/images/icons/arrow.png";

const Filters = () => {
  const [active, setActive] = useState("All");
  const activeStyle = "bg-black text-white hover:bg-gray-500";
  return (
    <section className="grid grid-flow-col items-center justify-between gap-2 mb-3 text-nowrap text-sm">
      <button className="bg-gray-200 rounded-full px-2 py-1">
        <Image src={filterIcon} alt="filter" className="inline mr-1" />
        <span>Filters</span>
      </button>
      <span className="text-gray-200">|</span>
      <div className="flex items-center gap-2 overflow-scroll no-scrollbar">
        {filters.map((filter) => (
          <button
            key={filter?.id}
            className={`border border-gray-200 rounded-full px-3 py-1 hover:bg-gray-200 ${
              active === filter?.title && activeStyle
            }`}
            onClick={() => setActive(filter?.title)}
          >
            {filter?.title}
          </button>
        ))}
      </div>
      <button className="rounded-full hover:bg-gray-200">
        <Image src={arrow} alt="arrow" className="inline mr-1" />
      </button>
    </section>
  );
};
export default Filters;
