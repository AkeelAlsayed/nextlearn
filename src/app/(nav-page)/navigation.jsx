import React from 'react';
import Link from 'next/link';

const NavPage = () => {
    return (
        <nav className="bg-gray-100 p-4">
            <div className="flex justify-center space-x-4">
                <Link href="/">
                    <div className="text-gray-800 hover:text-gray-600">Home</div>
                </Link>
                <Link href="/quran">
                    <div className="text-gray-800 hover:text-gray-600">Quran</div>
                </Link>
                <Link href="/juz">
                    <div className="text-gray-800 hover:text-gray-600">Juz</div>
                </Link>
                <Link href="/surah">
                    <div className="text-gray-800 hover:text-gray-600">Surah</div>
                </Link>
                <Link href="/ayah">
                    <div className="text-gray-800 hover:text-gray-600">Ayah</div>
                </Link>
                <Link href="/donate">
                    <div className="text-gray-800 hover:text-gray-600">Donate</div>
                </Link>
                <Link href="/about">
                    <div className="text-gray-800 hover:text-gray-600">About</div>
                </Link>
            </div>
        </nav>
    );
};

export default NavPage;
