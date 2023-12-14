import React from 'react'
import { portfolio } from '../../data'
import Portfolioterms from '../../component/portfolioterms'
import './portfolio.css'
// import { useState } from 'react'

function Portfolio() {
  return (
    <div>
      <section className="portfolio section">
        <h2 className="section__title">
            My <span>Portfolio</span>
        </h2>
        <div className="portfolio__container container grid">
            {portfolio.map((item) => {
                return <Portfolioterms key={item.id}{...item} />
            })}
        </div>
      </section>
    </div>
  )
}

export default Portfolio
