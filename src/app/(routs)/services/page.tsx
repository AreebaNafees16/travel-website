import Image from "next/image";
import Link from "next/link";

export default function Services() {
    const services = [
        {
            title: "Flight Booking",
            description: "Seamless flight booking services to get you to your destination with ease.",
            image: "/flightbooking.jpg",
        },
        {
            title: "Hotel Reservations",
            description: "Book the best accommodations tailored to your needs and preferences.",
            image: "/reservation.jpg",
        },
        {
            title: "Tour Packages",
            description: "Curated tour packages to explore breathtaking destinations.",
            image: "/tourpackage.jpg",
        },
        {
            title: "Travel Insurance",
            description: "Comprehensive travel insurance for a safe and worry-free journey.",
            image: "/insurance.jpg",
        },
        {
            title: "Car Rentals",
            description: "Affordable car rental services for convenient travel at your destination.",
            image: "/car.jpg",
        },
        {
            title: "Custom Itineraries",
            description: "Tailor-made itineraries to suit your travel preferences and schedule.",
            image: "/planing.jpg",
        },
    ];

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="relative h-[400px] sm:h-[500px] lg:h-[600px] bg-[url('/hero2.jpg')] bg-cover bg-center flex items-center justify-center">
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Our Services</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
                        We offer a range of travel services to make your journey seamless.
                    </p>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 px-4 md:px-12 lg:px-20">
                <h2 className="text-3xl font-bold text-teal-500 text-center">What We Offer</h2>
                <p className="text-gray-600 text-center mt-4 max-w-3xl mx-auto">
                    Whether you&apos;re planning a family vacation, a solo adventure, or a romantic getaway, 
                    we have the right services to make your trip unforgettable.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-[1440px] mx-auto">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
                        >
                            <div className="relative h-48">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-black">{service.title}</h3>
                                <p className="text-gray-600 mt-2">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call-to-Action */}
            <section className="bg-gray-100 text-gray-800 text-center py-12">
                <h2 className="text-3xl font-bold">Ready to Plan Your Trip?</h2>
                <p className="mt-4 text-lg">
                    Let us help you create unforgettable memories. Contact us today!
                </p>
                <Link href="/contact">
                    <button className="mt-6 px-6 py-3 bg-white text-gray-500 font-bold rounded-md hover:bg-gray-200">
                        Contact Us
                    </button>
                </Link>
            </section>
        </div>
    );
}
