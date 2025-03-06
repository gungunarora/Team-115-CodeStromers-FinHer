import React, { useState, useEffect } from "react";
import "./FeedbackForm.css"; // Import CSS file

const Feedback = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [feedback, setFeedback] = useState("");
    const [selectedRating, setSelectedRating] = useState(0);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("/feedback")
            .then(response => response.json())
            .then(data => setReviews(data))
            .catch(error => console.error("Error fetching feedback:", error));
    }, []);

    const updateStars = (rating) => {
        setSelectedRating(rating);
    };

    const submitFeedback = () => {
        if (!name || !email || !feedback || selectedRating === 0) {
            alert("Please fill out all fields and provide a rating!");
            return;
        }

        const newReview = { name, email, feedback, rating: selectedRating };

        setReviews(prevReviews => [...prevReviews, newReview]);

        // Clear form
        setName("");
        setEmail("");
        setFeedback("");
        setSelectedRating(0);
    };

    return (
        <div className="feedback-container">
            <h2>Your Feedback Matters</h2>
            
            <div className="container">
                {/* Feedback Form */}
                <div className="form-section">
                    <input 
                        type="text" placeholder="Your Name" 
                        value={name} onChange={(e) => setName(e.target.value)} 
                    />
                    <input 
                        type="email" placeholder="Your Email" 
                        value={email} onChange={(e) => setEmail(e.target.value)} 
                    />

                    {/* Star Rating */}
                    <div className="stars">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span key={star} 
                                className={`star ${selectedRating >= star ? 'active' : ''}`} 
                                onClick={() => updateStars(star)}>
                                &#9733;
                            </span>
                        ))}
                    </div>

                    <textarea className="area"
                        placeholder="Write your feedback here..." rows="4" 
                        value={feedback} onChange={(e) => setFeedback(e.target.value)} 
                    />

                    <button onClick={submitFeedback}>Submit Feedback</button>
                </div>

                {/* Display Reviews */}
                <div className="review-list">
                    {reviews.length === 0 ? (
                        <p>No reviews yet. Be the first to leave one! 😊</p>
                    ) : (
                        reviews.map((review, index) => (
                            <div key={index} className="review-card">
                                <strong>{review.name}</strong> ({review.email})<br />
                                <span className="stars-display">{"★".repeat(review.rating)}</span><br />
                                <p>{review.feedback}</p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Feedback;