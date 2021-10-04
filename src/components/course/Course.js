import React, { useEffect, useState } from 'react';
import Footer from '../footer/Footer';
import { useParams } from 'react-router';

const Course = () => {
   let courseId =useParams()
   console.log(courseId)
   const [course,setCourse] = useState({});
   useEffect(()=>{
    const url = `https://mocki.io/v1/4f716373-63be-46f2-a56c-7f46304e388d/=${courseId}`;
    fetch(url)
    .then(res=> res.json())
    .then(data=>setCourse(data))
},[])

    return (
       <div>
           <h1>Friend Details of:{courseId}</h1>
           <h2>{course.topic}</h2>
           <h3>{course.price}</h3>
           
       </div>
    );
};

export default Course;