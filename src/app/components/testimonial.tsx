const testimonials = [
  {
    name: "John Doe",
    feedback:
      "This trip was an unforgettable experience! The planning was seamless, and the guides were amazing.",
    location: "Los Angeles",
    image: "/john-doe.jpg",
  },
  {
    name: "Sarah Lee",
    feedback:
      "The best travel experience I’ve ever had! The destinations were beautiful and the service was top-notch.",
    location: "New York",
    image: "/sarah-lee.jpg",
  },
  {
    name: "Michael Smith",
    feedback:
      "An incredible adventure! Everything was perfectly organized, and the team was very professional.",
    location: "London",
    image: "/michael-smith.jpg",
  },

];

export default function Testimonial() {
  return (
    <main className="min-h-screen py-12">
      <section className="container mx-auto px-6 md:px-12 lg:px-24">
        <h1 className="text-4xl font-bold text-center mb-12 text-teal-500">
          What Our Clients Say
        </h1>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg space-y-4 flex flex-col items-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />

              <h3 className="text-xl font-semibold text-gray-800">
                {testimonial.name}
              </h3>
              <p className="text-teal-500">{testimonial.location}</p>

              <p className="text-gray-600 text-center">
                "{testimonial.feedback}"
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>

  );
}
