import React from 'react';
import './Contact.css';
import { AiOutlineMail } from 'react-icons/ai';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <AiOutlineMail />
            <h4>Email</h4>
            <h5>tomevans@gmail.com</h5>
            <a href='mailto:tomevans@gmail.com' target='blank'>
              Send a Message
            </a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine />
            <h4>Messenger</h4>
            <h5>Tom Evans</h5>
            <a href='https://m.me/' target='blank'>
              Send a Message
            </a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp />
            <h4>Wnatsapp</h4>
            <h5>tomevans@gmail.com</h5>
            <a href='https://api.whatsapp.com/send?phone=84' target='blank'>
              Send a Message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action=''>
          <input
            type='text'
            name='name'
            placeholder='Your Full Name'
            required
          />
          <input type='email' name='email' placeholder='Your Email' required />

          <textarea
            name='message'
            rows='7'
            placeholder='Your Message' 
            required
          ></textarea>
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
