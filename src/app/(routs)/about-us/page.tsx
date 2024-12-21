import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-[url('/hero2.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 p-6 rounded-md">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
            About Us
          </h1>
          <p className="text-white text-center mt-4 max-w-2xl mx-auto">
      Discover who we are and what we stand for, crafting unforgettable travel experiences.
    </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-10 px-4 md:px-12 lg:px-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-teal-500 text-center">Who We Are</h2>
          <p className="text-gray-600 mt-4 text-center leading-relaxed">
            Welcome to Travel and Tour! We specialize in creating unforgettable travel
            experiences. Whether you&apos;re looking to explore exotic destinations or relax in scenic
            retreats we&apos;re here to make it happen.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-10 px-4 md:px-12 lg:px-20 bg-gray-100 text-gray-800">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="mt-4 leading-relaxed">
              Our mission is to inspire and connect travelers to the world’s best destinations. We
              strive to deliver top-notch services that make your journey seamless, enjoyable, and
              memorable.
            </p>
          </div>
          <div className="relative h-48 md:h-64">
            <Image
              src="/Travel-Tour.jpg"
              alt="Our Mission"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-10 px-4 md:px-12 lg:px-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-teal-500 text-center">Meet Our Team</h2>
          <p className="text-gray-600 mt-4 text-center leading-relaxed">
            Our passionate and experienced team is dedicated to crafting your perfect journey.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        
            <div className="flex flex-col items-center">
              <div className="h-32 w-32 rounded-full overflow-hidden shadow-md relative">
                <Image
                  src="/team1.jpg"
                  alt="Team Member 1"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <h3 className="text-lg font-bold mt-4">Jane Doe</h3>
              <p className="text-teal-500">Founder & CEO</p>
              <p className="text-gray-500 text-center mt-2">
                Passionate about connecting people with amazing destinations.
              </p>
            </div>

  
            <div className="flex flex-col items-center">
              <div className="h-32 w-32 rounded-full overflow-hidden shadow-md relative">
                <Image
                  src="/team2.jpg"
                  alt="Team Member 2"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-bold mt-4">John Smith</h3>
              <p className="text-teal-500">Travel Planner</p>
              <p className="text-gray-500 text-center mt-2">
                Expert in crafting personalized itineraries for unforgettable adventures.
              </p>
            </div>

  
            <div className="flex flex-col items-center">
              <div className="h-32 w-32 rounded-full overflow-hidden shadow-md relative">
                <Image
                  src="/team3.jpg"
                  alt="Team Member 3"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-bold mt-4">Alice Johnson</h3>
              <p className="text-teal-500">Operations Manager</p>
              <p className="text-gray-500 text-center mt-2">
                Ensures every trip is smooth, seamless, and stress-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-10 px-4 md:px-12 lg:px-20 bg-gray-100 text-gray-800 text-center">
        <h2 className="text-3xl font-bold">Ready to Explore?</h2>
        <p className="mt-4 leading-relaxed">
          Let us help you plan your dream vacation today. Whether it&apos;s a solo trip, a family getaway,
          or a group adventure, we’ve got you covered!
        </p>
        <Link href="http:/contact">
        <button className="mt-6 px-6 py-3 bg-white text-gray-500-500 font-bold rounded-md hover:bg-gray-200">
          
          Contact Us
        </button>
        </Link>
      </section>
    </div>
  );
}
