import React from 'react';
import './Footer.css';
import { CiFacebook } from 'react-icons/ci';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>
        TomE
      </a>
      <ul className='permalinks'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experience </a>
        </li>
        <li>
          <a href='#services'>Services</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#testimonials'>Testimonials</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      <div className='footer__socials'>
        <a href='https://facebook.com'>
          <CiFacebook />
        </a>
        <a href='https://facebook.com'>
          <AiOutlineTwitter />
        </a>
        <a href='https://facebook.com'>
          <BsYoutube />
        </a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; TomE Web >> all rights reserved bro!</small>
      </div>
    </footer>
  );
};

export default Footer;
