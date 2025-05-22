"use client";

import { useState } from "react";
import Destination from "./destinations";
import Image from "next/image";

export default function DestinationPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const planet = Destination[activeIndex];

  return (
    <main className="bg-[url('/images/destination-bg.jpg')] bg-cover bg-center min-h-screen text-white px-6 md:px-24 py-32">
      <p className="condensed text-xl md:text-2xl tracking-widest uppercase">
          <span className="text-gray-400">01</span> Pick your destination
        </p>

      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex justify-center md:w-1/2">
          <Image
            src={planet.image}
            alt={planet.name}
            width={300}
            height={300}
            className="object-contain h-auto max-h-[400px] md:max-h-[500px]"
          />
        </div>

        <div className="md:w-1/2 text-center md:text-left">
          <div className="flex justify-center md:justify-start gap-6 mb-6 text-sm tracking-widest uppercase font-barlow-condensed">
            {Destination.map((dest, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`pb-2 border-b-2 transition-all ${
                  activeIndex === i
                    ? "border-white text-white"
                    : "border-transparent hover:border-gray-400"
                }`}
              >
                {dest.name}
              </button>
            ))}
          </div>

          <h1 className="text-6xl md:text-7xl uppercase font-bellefair mb-6">
            {planet.name}
          </h1>

          <p className="text-gray-300 leading-relaxed max-w-100 mx-auto md:mx-0">
            {planet.bio}
          </p>

          <div className="h-px bg-gray-700 my-8" />

          <div className="flex flex-col md:flex-row gap-8 text-center md:text-left uppercase tracking-widest text-sm font-barlow-condensed">
            <div>
              <p className="text-gray-400">Avg. Distance</p>
              <p className="text-2xl text-white Bellefair mt-1">
                {planet.distance}
              </p>
            </div>
            <div>
              <p className="text-gray-400">Est. Travel Time</p>
              <p className="text-2xl text-white Bellefair mt-1">
                {planet.time}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
