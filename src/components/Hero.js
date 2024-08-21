"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import {
  Package2,
  Home,
  ShoppingCart,
  Package,
  Users2,
  LineChart,
  Settings,
} from "lucide-react";

const Hero = () => {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 overflow-hidden  hidden w-20 rounded-tr-[25px] rounded-br-[25px] flex-col border-r bg-foreground sm:flex">
      <nav className="flex flex-col items-center  ">
        <div className="bg-primaryPurple w-full h-20 flex items-center justify-center rounded-br-[25px] ">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="26">
          <path
            fill="#FFF"
            fill-rule="evenodd"
            d="M20.513 0C24.965 2.309 28 6.91 28 12.21 28 19.826 21.732 26 14 26S0 19.826 0 12.21C0 6.91 3.035 2.309 7.487 0L14 12.9z"
          />
        </svg>
        </div>
      </nav>
    </aside>
  );
};

export default Hero;
