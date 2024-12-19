import { Hero } from "./components/hero";
import Aboutus from "./components/travel"
import Tours from "./components/tours";
import Places from "./components/places";
import Testimonial from "./components/testimonial";



export default function Home() {
  return (
    <main>
      <Hero />
      <Aboutus />
      <Tours/>
      <Places />
      <Testimonial />
    </main>
  );
}



















    // <Container className="grid grid-2 p-10">
    //   <div className="py-10 md:py-20">
    //     <p className="text-white text-center text-xl padding mb-4 font-mono">Looking for something amazing?</p>
    //     <h1 className="text-white text-center text-5xl sm:text-7xl font-bold mb-4 text-balance">DISCOVER THE WORLD</h1>
    //     <p className="text-white text-center text-xl mb-10 font-thin">
    //       Discover amazing places at exclusive deals. Eat, Shop, Visit interesting plasec around the world.
    //     </p>
    //     <div className="p-3 md:p-6 mt-6 rounded-md bg-white lg:">
    //       <SearchForm />
    //     </div>
    //   </div>
    //   <div className="flex justify-center">
    //     <Image
    //       className="bg-img h-full max-h-[900px] max-w-[1920px] object-cover"
    //       fill={true}
    //       src="/hero1.jpg" alt="beach"
    //     />
    //   </div>
    // </Container>

