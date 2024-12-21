import Image from 'next/image';
import { FaGlobe, FaCalendarAlt, FaPlaneDeparture } from 'react-icons/fa';

export default function Travel() {
  return (
    <main className=" bg-white flex items-center justify-center">
      <section className="container mx-auto px-4 md:px-16">
        <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-white">
          {/* Left Side */}
          <div className="md:w-1/2 space-y-6">
            <h4 className="text-sm text-gray-500 uppercase font-medium">
              Fast & Easy
            </h4>
            <h1 className="text-4xl font-bold text-teal-500">
              Get Your Favourite <br></br> Resort Booking
            </h1>

            <ul className="space-y-4">
              <li className="flex items-center justify-center md:justify-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg text-blue-500">
                  <FaGlobe className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">
                    Choose Destination
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Find the perfect place for your next adventure.
                  </p>
                </div>
              </li>

              <li className="flex items-center justify-center md:justify-start gap-4">
                <div className="p-3 bg-green-100 rounded-lg text-green-500">
                  <FaCalendarAlt className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">
                    Check Availability
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Plan your trip with real-time availability updates.
                  </p>
                </div>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-4">
                <div className="p-3 bg-yellow-100 rounded-lg text-yellow-500">
                  <FaPlaneDeparture className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">
                    Let&lsquo;s Go
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Start your journey with confidence and excitement.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Side */}
          <div className="md:w-2/2">
            <Image
              src="/Illustration.png"
              alt="Travel and Tour"
              width={700}
              height={700}
              className="md:ml-36"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
