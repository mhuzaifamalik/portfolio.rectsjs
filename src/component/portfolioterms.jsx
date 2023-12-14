import React, { useEffect, useState } from 'react'
import Close from "../assets/close.svg";

function Portfolioterms({ img, title, details }) {
    const [modal, setModal] = useState(false);
    const [exitingModal, setExitingModal] = useState(false);
    const toggleModel = () => {
        if(modal){
            setExitingModal(true)
            setTimeout(() => {
                setModal(!modal)
            }, 1000);            
        }else{
            setExitingModal(false)
            setModal(!modal)
        }
    }
    return (
        <>
            <div className="portfolio__item">
                <img src={img} alt='' className='portfolio__img' />
                <div className="portfolio__hover" onClick={toggleModel}>
                    <h3 className="portfolio__title">{title}</h3>
                </div>

                {modal && <PortfolioModal details={details} toggleModel={toggleModel} exitingModal={exitingModal} title={title} img={img} />}
            </div>
        </>
    )
}

const PortfolioModal = (props) => {
    const { details, title, toggleModel, img, exitingModal } = props
    const [modalClass,setModalClass] = useState('')
    useEffect(()=>{
        setTimeout(()=>{
            setModalClass('entring')
        },10)
    },[])
    useEffect(()=>{
        if(exitingModal){
            setModalClass('')
        }
    },[exitingModal])
    return (
        <div className={`portfolio__modal ${modalClass}`}>
            <div className="portfolio__modal-content">
                <img src={Close} alt="" className="modal__close" onClick={toggleModel} />
                <h3 className="modal__title">{title}</h3>

                <ul className="modal__list grid">
                    {details.map(({ icon, title, desc }, index) => {
                        return (
                            <li className="modal__item" key={index}>
                                <span className="item__icon">{icon}</span>
                                <div>
                                    <span className="item__title">{title}</span>
                                    <span className="item__details">
                                        {desc}
                                    </span>
                                </div>
                            </li>
                        );
                    })}
                </ul>
                <img src={img} alt={title} className="img-fluid modal__img" />
            </div>
        </div>
    )
}


export default Portfolioterms
