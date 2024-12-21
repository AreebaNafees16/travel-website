import Image from "next/image";
import { SearchForm } from "./search-form";
import { Container } from "./container";

export function Hero() {
  return (
    <Container className="w-full md:h-[800px] h-[900px] grid grid-cols-1 md:grid-cols-1 items-center pt-44">
      {/* Left Content */}
      
      <div className="relative z-10 md:mt-24">
        <p className="text-white text-center text-xl mb-4 font-mono">
          Looking for something amazing?
        </p>
        <h1 className="text-white text-center text-5xl md:text-7xl font-bold mb-4 text-balance">
          DISCOVER THE WORLD
        </h1>
        <p className="text-white text-center text-xl mb-16 font-light">
          Discover amazing places at exclusive deals. Eat, Shop, Visit interesting places around the world.
        </p>
        <div className="p-2 md:p-6 mt-4 rounded-md bg-white">
          <SearchForm />
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full h-[300px] lg:h-[500px]">
        <Image
          className="object-cover"
          fill
          // height={500}
          // width={500}
          src="/hero.jpg"
          alt="sydney"
          // priority
        />
      </div>
    </Container>
  );
}
