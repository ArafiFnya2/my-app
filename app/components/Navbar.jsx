"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <nav className="p-5 md:p-0 flex items-center justify-between w-full fixed z-10">
      <Link href="/"> 
      <div className="md:p-5">
        <img src="images/logo.svg" alt="" className="size-10"/>
      </div>  
      </Link>
      <div
        className="hamburger md:hidden flex flex-col gap-1 cursor-pointer"
        onClick={() => setIsMenu(!isMenu)}
      >
        <div className="h-0.5 bg-white w-7"></div>
        <div className="h-0.5 bg-white w-7"></div>
        <div className="h-0.5 bg-white w-7"></div>
      </div>
      <ul
        className={`flex flex-col gap-10 condensed tracking-widest uppercase bg-black/10 backdrop-blur-md  w-3/4 absolute md:static md:flex-row h-screen md:h-fit text-2xl p-5 md:p-6 text-white top-0 transition-[right] items-end ${
          isMenu ? "right-0" : "-right-[600px]"
        }`}
      >
        <li
          className="tombol-close size-10 relative cursor-pointer mt-10 md:hidden"
          onClick={() => setIsMenu(!isMenu)}
          aria-label="close-button"
        >
          <div className="h-0.5 bg-white w-7 rotate-45 absolute"></div>
          <div className="h-0.5 bg-white w-7 -rotate-45 absolute"></div>
        </li>
        <li className="hover:text-slate-300 w-full">
          <Link href="/">
            <p>
              <span className="font-bold">00</span> Home
            </p>
          </Link>
        </li>
        <li className="hover:text-slate-300 w-full">
          <Link href="/destination">
            <p>
              <span className="font-bold">01</span> Destination
            </p>
          </Link>
        </li>
        <li className="hover:text-slate-300 w-full">
          <Link href="/crew">
            <p>
              <span className="font-bold">02</span> Crew
            </p>
          </Link>
        </li>
        <li className="hover:text-slate-300 w-full">
          <Link href="/technology">
            <p>
              <span className="font-bold">03</span> Technology
            </p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
