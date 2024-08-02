"use client";
import styles from './Navbar.module.css';
import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-blue-800 p-4 shadow-lg">
            <div className={styles.container}>
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-2xl font-bold text-white">MyWebsite</div>
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                            {isOpen ? <XMarkIcon className="h-6 w-6"/> : <Bars3Icon className="h-6 w-6"/>}
                        </button>
                    </div>
                    <ul className={`flex-col md:flex-row md:flex md:items-center md:space-x-4 text-2xl font-bold text-white ${isOpen ? 'flex' : 'hidden'} md:flex`}>
                        <li className="hover:text-gray-300 transition-colors duration-300"><Link href="/">Home</Link></li>
                        <li className="hover:text-gray-300 transition-colors duration-300"><Link href="/api/auth/signin">Sign In</Link></li>
                        <li className="hover:text-gray-300 transition-colors duration-300"><Link href="/api/auth/signout">Sign Out</Link></li>
                        <li className="hover:text-gray-300 transition-colors duration-300"><Link href="/server">Server</Link></li>
                        <li className="hover:text-gray-300 transition-colors duration-300"><Link href="/client">Client</Link></li>
                        <li className="hover:text-gray-300 transition-colors duration-300"><Link href="/extra">Extra</Link></li>
                        <li className="hover:text-gray-300 transition-colors duration-300"><Link href="/dashboard">Dashboard</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
