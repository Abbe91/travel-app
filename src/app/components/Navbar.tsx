import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="bg-blue-800 p-4 shadow-lg">
            <ul className="flex justify-evenly text-2xl font-bold text-white">
                <li className="hover:text-gray-300 transition-colors duration-300"><Link href="/">Home</Link></li>
                <li className="hover:text-gray-300 transition-colors duration-300"><Link href="/api/auth/signin">Sign In</Link></li>
                <li className="hover:text-gray-300 transition-colors duration-300"><Link href="/api/auth/signout">Sign Out</Link></li>
                <li className="hover:text-gray-300 transition-colors duration-300"><Link href="/server">Server</Link></li>
                <li className="hover:text-gray-300 transition-colors duration-300"><Link href="/client">Client</Link></li>
                <li className="hover:text-gray-300 transition-colors duration-300"><Link href="/extra">Extra</Link></li>
                <li className="hover:text-gray-300 transition-colors duration-300"><Link href="/dashboard">Dashboard</Link></li>
            </ul>
        </nav>
    )
}
