"use client";
import styles from './Navbar.module.css';
import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

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
                <ul className={`${styles.menu} ${isOpen ? styles.active : ''} md:flex`}>
                    <li className={styles.menuItem}><Link href="/">Home</Link></li>
                    <li className={styles.menuItem}><Link href="/api/auth/signin">Sign In</Link></li>
                    <li className={styles.menuItem}><Link href="/api/auth/signout">Sign Out</Link></li>
                    <li className={styles.menuItem}><Link href="/server">Server</Link></li>
                    <li className={styles.menuItem}><Link href="/client">Client</Link></li>
                    <li className={styles.menuItem}><Link href="/extra">Extra</Link></li>
                    <li className={styles.menuItem}><Link href="/dashboard">Dashboard</Link></li>
                </ul>
            </div>
        </nav>
    );
}
