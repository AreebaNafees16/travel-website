import Image from "next/image"
import { Rating } from "./rating";

function getRandomValues(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function Tours() {
  const destinations = [
    {
      title: 'Paris, France',
      description: 'Experience the romance of Paris with iconic landmarks like the Eiffel Tower and the Louvre Museum.',
      rating: getRandomValues(1, 5),
      period: '7 days, 6 nights',
      image: '/destinations12.jpg',
    },
    {
      title: 'Chiang Mai, Thailand',
      description: 'Explore traditional temples and beautiful cherry blossoms in the historic city of Kyoto.',
      rating: getRandomValues(1, 5),
      period: '5 days, 4 nights',
      image: '/destinations5.jpg',
    },
    {
      title: 'New York City, USA',
      description: 'Discover the bustling streets of New York, from Times Square to Central Park.',
      rating: getRandomValues(1, 5),
      period: '6 days, 5 nights',
      image: '/destinations4.jpg',
    },
    {
      title: 'Baros, Maldives',
      description: 'Marvel at Table Mountain and enjoy the vibrant culture of Cape Town.',
      rating: getRandomValues(1, 5),
      period: '8 days, 7 nights',
      image: '/destinations1.jpg',
    },
    {
      title: 'Rome, Italy',
      description: 'Walk through history with ancient ruins, stunning art, and beautiful architecture.',
      rating: getRandomValues(1, 5),
      period: '6 days, 5 nights',
      image: '/destinations10.jpg',
    },
    {
      title: 'Bali, Indinesia',
      description: 'Enjoy the stunning views and crystal-clear waters of the Greek island of Santorini.',
      rating: getRandomValues(1, 5),
      period: '5 days, 4 nights',
      image: '/destinations2.jpg',
    },
    {
      title: 'Burj Khalifa, UAE',
      description: 'Hike to the ancient Inca ruins of Machu Picchu, nestled in the Andes Mountains.',
      rating: getRandomValues(1, 5),
      period: '7 days, 6 nights',
      image: '/destinations13.jpg',
    },
    {
      title: 'Sydney, Australia',
      description: 'Visit the famous Sydney Opera House and explore Australia’s beautiful beaches.',
      rating: getRandomValues(1, 5),
      period: '6 days, 5 nights',
      image: '/destinations14.jpg',
    },
    {
      title: 'Reykjavik, Iceland',
      description: 'Experience the Northern Lights and the stunning landscapes of Iceland.',
      rating: getRandomValues(1, 5),
      period: '5 days, 4 nights',
      image: '/destinations15.jpg',
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-12 text-teal-500">Our Featured Tours</h1>
      <p className="text-center max-w-4xl mx-auto font-medium text-gray-600 mt-2">Explore our top destinations voted by more than 100,000+ customers around the world</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
        {destinations.map((destination, index) => (
          <div key={index}>
            <Image
              src={destination.image}
              alt={destination.title}
              width={400}
              height={400}
              className="w-full h-64 object-cover mb-4 transition transform hover:scale-95 origin-bottom duration-300"
            />
            <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold mb-2">{destination.title}</h2>
            <Rating rate={destination.rating}/>
            </div>
            <p className="text-gray-600 mb-2">{destination.description}</p>
            <span className="block text-sm text-gray-600">Duration: {destination.period}</span>
          </div>
        ))}
      </div>
    </div>
  );
}


