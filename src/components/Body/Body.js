import React, { useEffect, useState } from 'react';
import Courses from '../Courses/Courses';
import Home from '../home/Home';

const Body = () => {
    const [courses ,setCourses] = useState([])
    useEffect(()=>{
        fetch('https://mocki.io/v1/4f716373-63be-46f2-a56c-7f46304e388d')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div>
            
            {
                courses.map(course =><Courses
                
                    course={course}
                    key ={course.id}
                
                >

                </Courses>
                )
            }
        </div>
    );
};

export default Body;