import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <main className="bg-[url('/images/home-bg.jpg')] bg-cover bg-center min-h-screen text-white relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between px-6 md:px-32 pt-32 md:pt-60 text-center md:text-left">
          <div className="max-w-xl">
            <p className="text-sm md:text-xl tracking-widest text-white uppercase mb-4">
              So, you want to travel to
            </p>
            <h1 className="text-[80px] md:text-[150px] uppercase leading-none font-bellefair mb-6">
              Space
            </h1>
            <p className="text-slate-300 text-base md:text-lg max-w-[90%] md:max-w-md mx-auto md:mx-0">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>

          <div className="mt-16 md:mt-0 md:absolute md:bottom-32 md:right-32">
            <div
              className="w-32 h-32 md:w-60 md:h-60 bg-white text-black rounded-full 
        flex items-center justify-center text-lg md:text-2xl uppercase tracking-widest
        hover:scale-105 transition-transform duration-300 cursor-pointer font-bellefair"
            >
              Explore
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
