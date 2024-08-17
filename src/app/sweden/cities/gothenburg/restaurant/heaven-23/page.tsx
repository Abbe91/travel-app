"use client";
import React, { useState, useEffect } from 'react';

const RestaurantPage: React.FC = () => {
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

    const reviews = [
        {
            text: "Absolutely fantastic! The food was out of this world.",
            author: "Happy Customer"
        },
        {
            text: "Oh my. This is a Guide Michelin restaurant with a really friendly feeling to it! I loved the service as much as the food! It's the kind of place where you think you go once - and then you actually want to go the next day again. I will definitely return! We had the 4 course meal and it's definitely enough food to get full from it! However would love to try a larger one next time!",
            author: "Jonas Larsson, Local Guide"
        },
        {
            text: "The ambiance, the service, the food—everything was just perfect. Highly recommended!",
            author: "Satisfied Diner"
        },
        {
            text: "An unforgettable dining experience. The tasting menu was exquisite!",
            author: "Gourmet Enthusiast"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentReviewIndex((prevIndex) =>
                prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change review every 5 seconds
        return () => clearInterval(interval);
    }, [reviews.length]);

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Hero Section */}
            <section className="hero relative bg-cover bg-center h-[600px] flex items-center justify-center text-primary" style={{ backgroundImage: "url('/images/restaurant/sweden/gothenburg/thornstroms-kok/thornstroms-kok.jpg')" }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 text-center">
                    <h1 className="text-5xl font-bold mb-4">Welcome to Koka</h1>
                    <p className="text-xl mb-8">Experience the finest dining in Gothenburg</p>
                    <a href="#menu" className="bg-teal-500 hover:bg-teal-400 text-primary py-3 px-6 rounded-full text-lg">Explore Our Menu</a>
                </div>
            </section>

            {/* Menu Section */}
            <section id="menu" className="menu py-16 bg-white flex-1">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-semibold mb-12 text-center text-teal-700">Our Menu</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {/* Example menu item */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <img src="/images/restaurant/sweden/gothenburg/thornstroms-kok/dishnu1.jpg" alt="Dish Name" className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-2xl font-semibold mb-2 text-gray-700">Dish Name</h3>
                            <p className="text-gray-700 mb-4">A delightful description of the dish that entices the taste buds.</p>
                            <p className="mt-2 text-teal-600 font-bold text-xl">$Price</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <img src="/images/restaurant/sweden/gothenburg/thornstroms-kok/dishnu1.jpg" alt="Dish Name" className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-2xl font-semibold mb-2 text-gray-700">Dish Name</h3>
                            <p className="text-gray-700 mb-4">A delightful description of the dish that entices the taste buds.</p>
                            <p className="mt-2 text-teal-600 font-bold text-xl">$Price</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <img src="/images/restaurant/sweden/gothenburg/thornstroms-kok/dishnu1.jpg" alt="Dish Name" className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-2xl font-semibold mb-2 text-gray-700">Dish Name</h3>
                            <p className="text-gray-700 mb-4">A delightful description of the dish that entices the taste buds.</p>
                            <p className="mt-2 text-teal-600 font-bold text-xl">$Price: 500kr</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <img src="/images/restaurant/sweden/gothenburg/thornstroms-kok/dishnu1.jpg" alt="Dish Name" className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-2xl font-semibold mb-2 text-gray-700">Dish Name</h3>
                            <p className="text-gray-700 mb-4">A delightful description of the dish that entices the taste buds.</p>
                            <p className="mt-2 text-teal-600 font-bold text-xl">$Price: 550kr</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <img src="/images/restaurant/sweden/gothenburg/thornstroms-kok/dishnu1.jpg" alt="Dish Name" className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-2xl font-semibold mb-2 text-gray-700">Dish Name</h3>
                            <p className="text-gray-700 mb-4">A delightful description of the dish that entices the taste buds.</p>
                            <p className="mt-2 text-teal-600 font-bold text-xl">$Price: 600kr</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <img src="/images/restaurant/sweden/gothenburg/thornstroms-kok/dishnu1.jpg" alt="Dish Name" className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-2xl font-semibold mb-2 text-gray-700">Dish Name</h3>
                            <p className="text-gray-700 mb-4">A delightful description of the dish that entices the taste buds.</p>
                            <p className="mt-2 text-teal-600 font-bold text-xl">$Price: 600kr</p>
                        </div>
                        {/* Add more menu items as needed */}
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <section className="reviews py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-semibold mb-12 text-center text-teal-700">Customer Reviews</h2>
                    <div className="relative">
                        {/* Carousel Item */}
                        <div className="review-item text-center bg-white p-8 rounded-lg shadow-lg mb-6">
                            <p className="text-xl italic mb-4 text-primary text-teal-700">"{reviews[currentReviewIndex].text}"</p>
                            <p className="font-semibold text-primary text-teal-700">- {reviews[currentReviewIndex].author}</p>
                        </div>

                        {/* Carousel Controls */}
                        <div className="absolute top-1/2 transform -translate-y-1/2 left-0">
                            <button
                                onClick={() =>
                                    setCurrentReviewIndex(currentReviewIndex === 0 ? reviews.length - 1 : currentReviewIndex - 1)
                                }
                                className="text-gray-500 hover:text-teal-700 focus:outline-none"
                            >
                                &larr;
                            </button>
                        </div>
                        <div className="absolute top-1/2 transform -translate-y-1/2 right-0">
                            <button
                                onClick={() =>
                                    setCurrentReviewIndex(currentReviewIndex === reviews.length - 1 ? 0 : currentReviewIndex + 1)
                                }
                                className="text-gray-500 hover:text-teal-700 focus:outline-none"
                            >
                                &rarr;
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Offers Section */}
            <section className="offers py-16 bg-teal-700 text-primary">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-semibold mb-12 text-center">Special Offers</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="offer-item p-8 bg-teal-600 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold mb-4 text-primary">Summer Special</h3>
                            <p className="mb-4 text-primary">Enjoy a complimentary dessert with every main course ordered.</p>
                            <a href="#" className="bg-white text-teal-700 py-2 px-4 rounded-full">Learn More</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-primary py-12">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                    <div className="contact-info mb-8 md:mb-0">
                        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                        <p>123 Restaurant St, Gothenburg, Sweden</p>
                        <p>Email: info@thornstromskok.com</p>
                        <p>Phone: +46 31 123 456</p>
                    </div>
                    <div className="social-media mb-8 md:mb-0">
                        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-primary">Facebook</a>
                            <a href="#" className="text-gray-400 hover:text-primary">Instagram</a>
                            <a href="#" className="text-gray-400 hover:text-primary">Twitter</a>
                        </div>
                    </div>
                    <div className="website-button">
                        <a href="https://thornstroms.nu/en/home/" target="_blank" rel="noopener noreferrer" className="bg-teal-500 hover:bg-teal-400 text-primary py-3 px-6 rounded-full text-lg">
                            Visit Our Website
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default RestaurantPage;
