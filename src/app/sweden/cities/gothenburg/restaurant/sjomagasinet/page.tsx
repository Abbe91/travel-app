import React from 'react';

const RestaurantPage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Hero Section */}
            <section className="hero relative bg-cover bg-center h-[600px] flex items-center justify-center text-primary">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 text-center">
                    <h1 className="text-5xl font-bold mb-4">Welcome to sjomagasinet</h1>
                    <p className="text-xl mb-8">Experience the finest dining in Gothenburg</p>
                    <a href="#menu" className="bg-teal-500 hover:bg-teal-400 text-primary py-3 px-6 rounded-full text-lg">Explore Our Menu:</a>
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
                            <p className="mt-2 text-teal-600 font-bold text-xl">$Price: 600kr</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RestaurantPage;