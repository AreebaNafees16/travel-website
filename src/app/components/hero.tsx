import Image from "next/image";
import { SearchForm } from "./search-form";
import { Container } from "./container";


export function Hero() {
    return (
        <Container className="relative h-fit w-full overflow-hidden grid grid-2 py-28">
        <div className="py-10 md:py-20">
          <p className="text-white text-center text-xl padding mb-4 font-mono">Looking for something amazing?</p>
          <h1 className="text-white text-center text 5xl text-7xl font-bold mb-4 text-balance">DISCOVER THE WORLD</h1>
          <p className="text-white text-center text-xl mb-16 font-light">
            Discover amazing places at exclusive deals. Eat, Shop, Visit interesting places around the world.
          </p>
          <div className="p-2 md:p-6 mt-4 rounded-md bg-white">
            <SearchForm />
          </div>
        </div>
        <div className="">
          <Image
            className="bg-img h-full max-h-[1200px] max-w-[1920px] object-cover"
            fill={true}
            src="/hero.jpg" alt="sydney"
          />
        </div>
      </Container>
    );

}