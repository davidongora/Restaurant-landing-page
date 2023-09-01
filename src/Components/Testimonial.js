import React from 'react'
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
        <div className="work-section-top">
            <p className="primary-subheading">Testimonials</p>
            <h1 className="primary-heading">What are they saying</h1>
            <p className="primary-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis modi autem ipsa placeat vel molestias! Est consequuntur accusantium alias!</p>
        </div>
        <div className="testimonial-section-bottom">
            <img src= {ProfilePic} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, minus!</p>
                <div className="testimonials-stars-container">
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                </div>
                <h2>David Ongora</h2>
        </div>
    </div>
  );
};

export default Testimonial