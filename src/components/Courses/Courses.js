import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Course from '../course/Course';

const Courses = (props) => {
    const {topic,teacher,price,img,videos,duration,id} =props.course
    return (
        <div>
        <div className='home-div '>
       <div className='subjects'>
       <div>
           <img src={img} alt="" />
       </div>
       <div className='home-detail'>
           <h1>Topic: {topic}</h1>
           <h2>Teacher: {teacher}</h2>
           <h3>Duration: {duration}</h3>
           <h4>Videos: {videos}</h4>
           <h5>Price: {price}</h5>
           <Link to={`/courses/${id}`}>
           <button className='btn-regular'>Buy Now</button>
           </Link>
       </div>
       </div>
       
   </div>
   
     </div>
    );
};

   
export default Courses;