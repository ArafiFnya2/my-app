"use client"; 
import React, {useState} from 'react'; 
import DataTech from './datatech';
export default function TechnologyPage() {
  const [selected, setSelected] = useState(0);

  const handleSelect = (index) => {
    setSelected(index);
  };

  const { name, bio, image } = DataTech[selected];

  return (
    <main className="bg-[url('/images/technology-bg.jpg')] bg-cover bg-center min-h-screen text-white relative overflow-hidden">
      <div className="pt-32 px-6 md:px-20 lg:px-32">
        <p className="condensed text-xl md:text-2xl tracking-widest text-white uppercase mb-10">
          <span className="text-gray-400">03</span> Space Launch 101
        </p>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-20">
          <div className="flex lg:flex-col gap-6">
            {DataTech.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSelect(index)}
                className={`w-12 h-12 rounded-full border text-xl font-bold flex items-center justify-center
                  ${selected === index ? 'bg-white text-black' : 'border-white text-white hover:bg-gray-500 hover:text-white transition'}`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <div className="text-center lg:text-left max-w-xl">
            <h1 className="text-gray-500 uppercase text-2xl">The Terminology...</h1>
            <h2 className="text-4xl md:text-5xl uppercase font-serif my-4">{name}</h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">{bio}</p>
          </div>
          <div className="w-full lg:w-[500px]">
            <img src={image} alt={name} className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </main>
  );
}
