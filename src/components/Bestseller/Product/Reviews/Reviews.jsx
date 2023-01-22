import '../../../../App.css';
import React, { useState } from 'react';
import avatarIcon from '../../../../assets/img/avatarIcon.svg'

export const Reviews = (props) => {
    const dateNow = new Date();
    const month = () => {
        const thisMonth = dateNow.getMonth() + 1;
        if (thisMonth < 10) {
            return `0${thisMonth}`
        } else return thisMonth;
    }

    const textArea = React.createRef();
    const [input, setInput] = useState('')
    const [reviews, setReviews] = useState([
        {
            id: 1,
            author: 'Jane Cooper',
            title: 'Amazing Product',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry',
            date: '01/01/2021',
            rating: 4
        },
        {
            id: 2,
            author: 'Max Doodle',
            title: 'Best choice',
            text: "Various versions have evolved over the years, sometimes by accident, sometimes on purpose ( injected humour and the like).",
            date: '05/23/2021',
            rating: 5
        },
    ])
    
    const reviewsField = reviews.map((r) => {
        return (
            <div key={r.id} className="reviewField">
                <div className="info">
                    <div className="user">
                        <img src={avatarIcon} alt="" />
                        <div className="infoBox">
                            <p className="author">{r.author}</p>
                            <p className="rating">{r.rating} Rating</p>
                        </div>
                    </div>
                    <div>
                        <p className="date">{r.date}</p>
                    </div>
                </div>

                <div className="content">
                    <p className="title">{r.title}</p>
                    <p>{r.text}</p>
                </div>
            </div>
        );
    })
    const inputTextHandler = (e) => {
        setInput(e.currentTarget.value)
    }
    const addReviewHandler = () => {
        const newReview = {
            id: dateNow.getMilliseconds(),
            author: 'Jane Cooper',
            title: 'Amazing Product',
            text: input,
            date: `${dateNow.getDate()}/${month()}/${dateNow.getFullYear()}`,
            rating: 5
        };
        setReviews([newReview, ...reviews]);
        setInput('')
    }
    return (
        <div>
            <div className="review">
                <h3>Reviews ({reviews.length})</h3>
                <textarea
                    // onChange={(e) => { setInput(e.target.value) }}
                    onChange={inputTextHandler}
                    ref={textArea}
                    value={input} placeholder="Provide your text..."></textarea>
                <button onClick={addReviewHandler}>Send review</button>
            </div>
            {reviewsField}
        </div>
    );
}
