import React from 'react'
import Info from '../../component/Info'
import Stats from '../../component/Stats'
import Skills from '../../component/Skills'
import { FaDownload } from "react-icons/fa6"
import cv from '../../assets/steve-Cv.pdf'
import './about.css'
import Resumeitems from '../../component/Resumeitems'
import 'react-circular-progressbar/dist/styles.css'
import { resume } from '../../data'


function About() {
  return (
    <>
      <main className='section container'>
        <section className='about'>
          <h2 className='section__title'>
            about <span>Me</span></h2>
          <div className='about__container grid'>
            <div className='about__info'>
              <h3 className='section__subtitle'>
                Personal Infos
              </h3>
              <ul className='info__list grid'>
                <Info />
              </ul>
              <a href={cv} download='' className='button reder'>
                Download Cv {' '}<spna className='button__icon'>
                  <FaDownload />

                </spna>
              </a>

            </div>
            <div className='stats grid'>
              <Stats />
            </div>

          </div>
        </section>
        <div className="separator">


        </div>
        <section className='skills'>
          <h3 className="section__subtitle subtitle__center">My skills</h3>
          <div className="skills__Container grid">
            <Skills />
          </div>


        </section>
        <div className="separator1"></div>

        <section className="resume">
          <h3 className="section__subtitle subtitle__center lopp78">Experience & Education</h3>

          <div className="resume__container grid">
          <div className="resume__data">
              {resume
                .filter((val) => val.category === 'experience')
                .map((val) => (
                  <Resumeitems key={val.id} {...val} />
                ))}
            </div>
            <div className="resume__data">
              {resume
                .filter((val) => val.category === 'education')
                .map((val) => (
                  <Resumeitems key={val.id} {...val} />
                ))}
            </div>
          </div>

        </section>



      </main>
    </>
  )
}

export default About
