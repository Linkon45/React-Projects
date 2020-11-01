import React, { useState } from 'react'
import data from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'


const Review = () => {
    const [index, setIndex] = useState(0)
    const { name, job, image, text } = data[index < 0 ? (index * -1) % 4 : (index % 4)]
    return (
        <article className="review">
            <div className="img-container">
                <img src={image} alt={name} className="person-img" />
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>

            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>

            <div className='button-container'>
                <button onClick={() => setIndex(index - 1)} className="prev-btn">
                    <FaChevronLeft />
                </button>
                <button onClick={() => setIndex(index + 1)} className="next-btn">
                    <FaChevronRight />
                </button>
            </div>
            <button onClick={() => setIndex(Math.floor(Math.random() * 4))} className="random-btn">
                Surpise Me
            </button>
        </article>
    )
}

export default Review
