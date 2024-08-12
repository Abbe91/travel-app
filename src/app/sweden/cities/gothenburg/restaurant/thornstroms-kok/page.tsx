import React from 'react';

const RestaurantPage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Hero Section */}
            <section className="hero relative bg-cover bg-center h-[600px] flex items-center justify-center text-primary">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 text-center">
                    <h1 className="text-5xl font-bold mb-4">Welcome to Thornströms Kök</h1>
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
                            <h3 className="text-2xl font-semibold mb-2 text-2xl font-semibold mb-4 text-gray-700">Dish Name</h3>
                            <p className="text-gray-700 mb-4">A delightful description of the dish that entices the taste buds.</p>
                            <p className="mt-2 text-teal-600 font-bold text-xl">$Price</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold mb-2 text-2xl font-semibold mb-4 text-gray-700">Dish Name</h3>
                            <p className="text-gray-700 mb-4">A delightful description of the dish that entices the taste buds.</p>
                            <p className="mt-2 text-teal-600 font-bold text-xl">$Price: 500kr</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold mb-2 text-2xl font-semibold mb-4 text-gray-700">Dish Name</h3>
                            <p className="text-gray-700 mb-4">A delightful description of the dish that entices the taste buds.</p>
                            <p className="mt-2 text-teal-600 font-bold text-xl">$Price: 550kr</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold mb-2 text-2xl font-semibold mb-4 text-gray-700">Dish Name</h3>
                            <p className="text-gray-700 mb-4">A delightful description of the dish that entices the taste buds.</p>
                            <p className="mt-2 text-teal-600 font-bold text-xl">$Price: 320kr</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold mb-2 text-2xl font-semibold mb-4 text-gray-700">Dish Name</h3>
                            <p className="text-gray-700 mb-4">A delightful description of the dish that entices the taste buds.</p>
                            <p className="mt-2 text-teal-600 font-bold text-xl">$Price: 800kr</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold mb-2 text-2xl font-semibold mb-4 text-gray-700">Dish Name</h3>
                            <p className="text-gray-700 mb-4">A delightful description of the dish that entices the taste buds.</p>
                            <p className="mt-2 text-teal-600 font-bold text-xl">$Price: 100kr</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold mb-2 text-2xl font-semibold mb-4 text-gray-700">Dish Name</h3>
                            <p className="text-gray-700 mb-4">A delightful description of the dish that entices the taste buds.</p>
                            <p className="mt-2 text-teal-600 font-bold text-xl">$Price: 0kr</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold mb-2 text-2xl font-semibold mb-4 text-gray-700">Dish Name</h3>
                            <p className="text-gray-700 mb-4">A delightful description of the dish that entices the taste buds.</p>
                            <p className="mt-2 text-teal-600 font-bold text-xl">$Price</p>
                        </div>
                        {/* Add more menu items as needed */}
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <section className="reviews py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-semibold mb-12 text-center text-teal-700">Customer Reviews</h2>
                    <div className="carousel">
                        <div className="review-item text-center bg-white p-8 rounded-lg shadow-lg">
                            <p className="text-xl italic mb-4 font-semibold mb-12 text-center text-teal-700">"Absolutely fantastic! The food was out of this world."</p>
                            <p className="text-xl italic mb-4 font-semibold mb-12 text-center text-teal-700">- Happy Customer</p>
                        </div>
                        {/* Add more reviews as needed */}
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
