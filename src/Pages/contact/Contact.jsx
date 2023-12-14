import React from 'react'
import{

  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaGithubSquare,
  FaPhoneSquare,
  FaEnvelopeOpen,




} from 'react-icons/fa';

import { FiSend } from 'react-icons/fi'

import "./contact.css"



function Contact() {
  return (
    <>
    <section className="section contact">
    <h2 className="section__title">
            Get in <span>Touch</span>
        </h2>
        <div className="contact__container container grid">
          <div className="contact__data">
            <h3 className="contact__title">
              Don't be shy
            </h3>
            <p className="contact__description">
              Feel free to get in touch with me .I am  always open to discussing ne projects, creative ideas or opportunities to be  part of  your visions.
            </p>
            <div className="contact__info">
              <div className="info__item">
                <div className="info___icon">
                <FaEnvelopeOpen  className='info__icon' />
                </div>
                <span className="info__title">
                  Email
                </span>
                <h4 className="info__desc">huzaifamalikmalik465@gmail.com</h4>
              </div>
            </div>
            <div className="contact__info">
              <div className="info__item">
              <div className="info__icon">
              <FaPhoneSquare className='info__icon' />
            </div>
                <span className="info__title">
                  Call me 
                </span>
                <h4 className="info__desc">+92 3152235675</h4>
              </div>
            </div>
           
            <div className="contact__socials">
              <a href="" className='contact__social-link'>
                <FaFacebookF />
              </a>
              <a href="" className='contact__social-link'>
                <FaYoutube />
              </a>
              <a href="" className='contact__social-link'>
                <FaGithubSquare />
              </a>
              <a href="" className='contact__social-link'>
                <FaInstagram />
              </a>
            </div>
          </div>
          <form 
          className="contact_form">
            <div className="form__input-group">
              <div className="form__input-div">
                <input type="
                text"
                placeholder='Your Name' className="form__control" />
              </div>
              <div className="form__input-div">
                <input type="
                email"
                placeholder='Your email' className="form__control" />
              </div>
              <div className="form__input-div">
                <input type="
                text"
                placeholder='Your subject' className="form__control" />
              </div>

            </div>
            <div className="form__input-div">
               <textarea placeholder='Your message' name="" id="" cols="30" rows="10" className="from__conrol textarea"></textarea>
              </div>
            <button className="button">
              Send Message <span className="button__icon contact__button-icon">
                <FiSend />
              </span>
            </button>
          </form>
        </div>
    </section>
    </>
  )
}

export default Contact
