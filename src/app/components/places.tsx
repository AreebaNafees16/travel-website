import { Rating } from "./rating";

function getRandomValues(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function Places() {
    const places = [
      {
        title: 'Luxury Apartment in New York',
        image: '/apartment-ny.jpg',
        capacity: '3 Bedrooms, 6 Guests',
        rating: getRandomValues(1, 5),
        price: '$350 / night',
      },
      {
        title: 'Beachside Villa in Malibu',
        image: '/villa-malibu.jpg',
        capacity: '3 Bedrooms, 8 Guests',
        rating: getRandomValues(1, 5),
        price: '$500 / night',
      },
      {
        title: 'Mountain Cabin in Colorado',
        image: '/cabin-colorado.jpg',
        capacity: '3 Bedrooms, 5 Guests',
        rating:  getRandomValues(1, 5),
        price: '$280 / night',
      },
    ];
  
    return (
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-teal-500">Available Places</h1>
        <p className="text-center max-w-4xl mx-auto font-medium text-gray-600 mt-6">  Explore handpicked destinations that blend comfort and adventure. From luxurious villas to cozy cabins, our offerings cater to every traveler’s dream, ensuring a memorable and personalized experience.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {places.map((place, index) => (
            <div key={index}>
              <img
                src={place.image}
                alt={place.title}
                className="w-full h-64 object-cover mb-4 transition transform hover:scale-95 origin-bottom duration-300 mt-10"
              />
              <h2 className="text-2xl font-semibold mb-2">{place.title}</h2>
              <p className="text-gray-600 mb-1">Capacity: {place.capacity}</p>
              <Rating rate={place.rating}/>
              <p className="text-gray-600 mb-2">Price: {place.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  