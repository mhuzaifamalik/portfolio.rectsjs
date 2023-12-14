import React from 'react'
import { skills  } from '../data'
import { CircularProgressbar } from 'react-circular-progressbar'
import '../Pages/about/about.css'


function Skills() {
  return (
    <>
     {skills.map((skill, index) => {
        return(
            <div className='progress__box' key={index} >
                <div className="progress__circule">
                    <CircularProgressbar strokeWidth={6.5} text ={`${skill?.percentage}`} value={skill?.percentage} />
                </div>
                <h3 className="skills__title">{skill.title}</h3>
            </div>
        )
     })} 
    </>
  )
}

export default Skills
