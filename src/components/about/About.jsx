import React from 'react';
import './About.css';
import ME from '../../assets/me-about.jpg';
import { CgAwards } from 'react-icons/cg';
import { BsPeople } from 'react-icons/bs';
import { AiOutlineProject } from 'react-icons/ai';

const About = () => {
  return (
    <section id='about'>
      <h2>Get To Know</h2>
      <h5>Me</h5>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <CgAwards className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Year Building</small>
            </article>
            <article className='about__card'>
              <BsPeople className='about__icon' />
              <h5>Clients</h5>
              <small>People I've Helped</small>
            </article>
            <article className='about__card'>
              <AiOutlineProject className='about__icon' />
              <h5>Projects</h5>
              <small>100+ Completed Projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            doloribus. Soluta, maxime laboriosam! Nulla amet quidem odit
            praesentium deserunt impedit, consequatur ducimus dolores rem
            recusandae, dicta vel quia perspiciatis ipsam.
          </p>
          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
