// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            const res = await axios.get('/api/reviews');
            setReviews(res.data);
        };
        fetchReviews();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">Movie Reviews</h1>
            <ul>
                {reviews.map(review => (
                    <li key={review._id} className="p-4 border-b">
                        <h2 className="text-xl">{review.title}</h2>
                        <p>{review.content}</p>
                        <p className="text-sm text-gray-500">By {review.author} on {new Date(review.date).toLocaleDateString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
