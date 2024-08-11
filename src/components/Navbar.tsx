import Link from "next/link";
import Image from "next/image";
import React from "react";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-32 relative">
      <div className="h-full flex items-center justify-between">
        {/*MOBILE*/}
        <div className="text-2xl tracking-wide">
          <Link href="/">LAMA</Link>
        </div>
        <Menu />
      </div>
      {/* BIGGER SCREENS */}
      <div className="hidden md:flex item-center justify-between gap-8 h-full">
        {/* LEFT */}
        <div className="w-1/3">
          <Link href="/">
            <Image src="/logo.png" alt="" width={24} height={24} />
            <div className="text-2xl tracking-wide">LAMA</div>
          </Link>
        </div>
        {/* RIGHT */}
        <div className="w/2-3"></div>
      </div>
    </div>
  );
};

export default Navbar;
