import React from 'react';

const RestaurantPage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Hero Section */}
            <section className="hero bg-cover bg-center h-96 flex items-center justify-center text-white" style={{ backgroundImage: "url('/images/restaurant/sweden/gothenburg/thornstroms-kok.jpg')" }}>
                <h1 className="text-5xl font-bold">Welcome to Thornströms Kök</h1>
            </section>

            {/* Menu Section */}
            <section className="menu py-12 bg-gray-100 flex-1">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold mb-8 text-center">Menu</h2>
                    {/* Add the menu items here */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Example menu item */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-2">Dish Name</h3>
                            <p className="text-gray-700">Description of the dish.</p>
                            <p className="mt-2 text-teal-600 font-bold">$Price</p>
                        </div>
                        {/* Add more menu items as needed */}
                    </div>
                </div>
            </section>

            {/* Picture Section */}
            <section className="picture py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold mb-8 text-center">Discover Our Restaurant</h2>
                    {/* Add a picture or image carousel here */}
                    <div className="flex justify-center">
                        <img src="/images/restaurant/sweden/gothenburg/thornstroms-kok.jpg" alt="Restaurant" className="rounded-lg shadow-md" />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-teal-700 text-white py-8">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                    <div className="contact-info mb-4 md:mb-0">
                        <h3 className="text-xl font-semibold">Contact Us</h3>
                        {/* Add contact information here */}
                        <p>123 Restaurant St, Gothenburg, Sweden</p>
                        <p>Email: info@thornstromskok.com</p>
                        <p>Phone: +46 31 123 456</p>
                    </div>
                    <div className="website-button">
                        <a href="https://thornstroms.nu/en/home/" target="_blank" rel="noopener noreferrer" className="bg-teal-500 hover:bg-teal-400 text-white py-2 px-4 rounded">
                            Visit Our Website
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default RestaurantPage;