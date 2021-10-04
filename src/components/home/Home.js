import React from 'react';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import Courses from '../Courses/Courses';
import './Home.css'

const Home = () => {
    // const {topic,teacher,price,img,videos,duration} =props.course
    // console.log(props)
    return (
      <div>
          <div className='home-div '>
          <div className='subjects'>
          <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS45d6rw6VT4XOC_EqXeomNWHb5M--6IX5uWw&usqp=CAU" alt="" />
          </div>
          <div className='home-detail'>
              <h1>Topic: Bangla 1st Paper</h1>
              <h2>Teacher: Alamgir Hazari</h2>
              <h3>Duration: 6h 30min</h3>
              <h4>Videos: 660</h4>
              <h5>Price: 800</h5>
          </div>
          </div>
          
      </div>
      <div className='home-div '>
          <div className='subjects'>
          <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3SvrO3rLQFBycUxA1SoXU1lN2U_AXQUiHHQ&usqp=CAU" alt="" />
          </div>
          <div className='home-detail'>
              <h1>Topic: Bangla 2nd Paper</h1>
              <h2>Teacher: Alamgir Hazari</h2>
              <h3>Duration: 8h 30min</h3>
              <h4>Videos: 760</h4>
              <h5>Price: 800</h5>
          </div>
          </div>
          
      </div>
      <div className='home-div '>
          <div className='subjects'>
          <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb342uK4wV7y72z7jXgf96N6uFmHEulSR6yA&usqp=CAU" alt="" />
          </div>
          <div className='home-detail'>
              <h1>Topic: English 1st Paper</h1>
              <h2>Teacher: Ayman Sadiq</h2>
              <h3>Duration: 9h 30min</h3>
              <h4>Videos: 560</h4>
              <h5>Price: 800</h5>
          </div>
          </div>
          
      </div>
      <div className='home-div '>
          <div className='subjects'>
          <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdU69ddz-xz7EQRabartD06a39yIxD8ORQvQ&usqp=CAU" alt="" />
          </div>
          <div className='home-detail'>
              <h1>Topic: English2nd Paper</h1>
              <h2>Teacher: Sadman Sadiq</h2>
              <h3>Duration: 5h 30min</h3>
              <h4>Videos: 660</h4>
              <h5>Price: 1000</h5>
          </div>
          </div>
          
      </div>
      </div>
     
    
       
    );
};

export default Home;