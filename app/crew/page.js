"use client";

import React, { useState } from "react";
import DataCrew from "./datacrew";

export default function CrewPage() {
  const [crewIndex, setCrewIndex] = useState(0);
  const crew = DataCrew[crewIndex];

  return (
    <main className="bg-[url('/images/crew-bg.jpg')] bg-cover bg-center min-h-screen text-white relative overflow-hidden flex flex-col items-center md:items-start">
      <div className="pt-32 px-6 md:px-32 w-full">
        <p className="condensed text-xl md:text-2xl tracking-widest uppercase">
          <span className="text-gray-400">02</span> Meet your crew
        </p>
      </div>

      <div className="md:hidden w-full flex justify-center pt-10">
        <img src={crew.image} alt={crew.name} className="w-1/2" />
      </div>

      <div className="px-6 md:px-32 pt-10 md:pt-20 flex flex-col md:w-1/2 text-center md:text-left items-center md:items-start">
        <h2 className="uppercase text-gray-400 text-lg md:text-3xl py-2 md:py-4">{crew.role}</h2>
        <h1 className="uppercase leading-none text-4xl md:text-6xl py-2 md:py-4">{crew.name}</h1>
        <p className="text-slate-300 text-base md:text-lg max-w-md">{crew.bio}</p>

        <div className="flex gap-4 md:gap-6 mt-8 md:mt-12">
          {DataCrew.map((_, index) => (
            <button
              key={index}
              onClick={() => setCrewIndex(index)}
              className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-colors duration-300 ${
                crewIndex === index ? "bg-white" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Image for desktop */}
      <div className="hidden md:block absolute bottom-0 right-10 md:right-32 scale-75">
        <img src={crew.image} alt={crew.name} />
      </div>
    </main>
  );
}
