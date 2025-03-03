import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
            <p className="text-gray-600 mb-6">Sorry, the page you are looking for does not exist.</p>
            <Link
                to="/"
                className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
            >
                Go to Home
            </Link>
        </div>
    );
}

export default NotFound;
