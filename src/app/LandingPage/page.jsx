import React from 'react';
import Link from 'next/link';

const LandingPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-4xl mx-auto p-8 flex items-center">
                <div className="mr-auto">
                    <div className="text-left">
                        <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome to My Website</h1>
                        <p className="text-2xl text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className="logo-container ml-auto">
                    <Link href="/quran">
                        <img src="https://cdn.pixabay.com/photo/2017/09/26/18/32/calligraphy-2789691_640.png" alt="Magnolia Flower" className="w-1/1 rounded-lg" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
