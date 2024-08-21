"use client";
import styles from './Navbar.module.css';
import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import menuItems from '../../../config/menuItems';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href="/">Travel App</Link>
                </div>
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={styles.menuToggle}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <XMarkIcon className="h-6 w-6" />
                        ) : (
                            <Bars3Icon className="h-6 w-6" />
                        )}
                    </button>
                </div>
                <ul className={`${styles.menu} ${isOpen ? styles.active : ''} md:flex py-3 px-2 font-primary text-base font-bold text-dark transition hover:text-primary md:py-4 lg:px-3`}>
                    {menuItems.map((item, index) => (
                        <li key={index} className={styles.menuItem}>
                            <Link href={item.url}>{item.name}</Link>
                        </li>
                    ))}
                    <li className={styles.menuItem}>
                        <Link href="/get-started">
                            <button className=" px-5 py-2 bg-teal-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-300">
                                Get Started
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
