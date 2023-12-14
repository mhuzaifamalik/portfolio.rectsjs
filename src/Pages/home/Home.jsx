import React from 'react'
import profile from '../../assets/home.jpg';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import './home.css'



function Home() {
  return (
    <div>
      <section className="home section grid">
        <img src={profile} className='img-fluid home__img' alt="" />

        <div className="home__content">
          <div className="home__data">
            <h1 className="home__title">
              i 'm Muhammad Huzaifa<span> Web developer</span>
            </h1>
            <p className="home__description">
            My journey began 3 years ago When I start my studies in software engineering, that’s the beginning of my adventure. Since last year I've been working as a full-time independent web developer with various businesses all around the world. In this period, I've worked with excellent individuals and benefited from their expertise, in addition to continuously developing my technical skills after each project.
            </p>
            <Link to='/about' className='button'>
              more about me <span className='button__icon'>
              <FaArrowRight />

              </span>
            </Link>
          </div>

        </div>
        <div className="color__black">
          
        </div>
      </section>
    </div>
  )
}

export default Home
