import React from 'react';
import { Link } from 'react-router-dom';
import { FaBookmark } from 'react-icons/fa';
import Rating from 'react-rating';
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { BsHandThumbsUpFill } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Chef = (props) => {

    const { id, name, photo, like, experience, description, rating, recipe } = props.chef;

    const bookmarkToaster = () => toast("Bookmark Successful");

    return (
        <div className="card shadow" style={{ width: '25rem' }}>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <img src={photo} className="card-img-top img-fluid" style={{ height: '300px', objectFit: 'cover' }} alt={name} />
            <div className="card-body">
                <div className='d-flex justify-content-between'>
                    <h5 className="card-title">{name}</h5>
                    <FaBookmark
                        onClick={bookmarkToaster}
                        style={{ cursor: 'pointer' }}
                    >
                    </FaBookmark>
                </div>
                <p className="card-text text-secondary">{description}</p>
                <div className='d-flex justify-content-evenly'>
                    <p className='text-secondary'>{experience} years experience</p>
                    <p className='text-secondary'>Recipes: {recipe}</p>
                </div>
                <div className='d-flex justify-content-evenly'>
                    <p>
                        <BsHandThumbsUpFill className='text-secondary'></BsHandThumbsUpFill> {like}
                    </p>
                    <Rating
                        readonly
                        placeholderRating={rating}
                        emptySymbol={<AiOutlineStar className='text-secondary'></AiOutlineStar>}
                        placeholderSymbol={<AiFillStar className='text-secondary'></AiFillStar>}
                        fullSymbol={<AiFillStar></AiFillStar>}
                    ></Rating>
                </div>
                <Link to={`/chef-recipe/${id}`} className='btn btn-dark d-block sticky-bottom'>View Recipe</Link>
            </div>
        </div>
    );
};

export default Chef;