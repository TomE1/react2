import React from 'react';
import './Portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Title 1 goes here',
    github: 'https://github.com',
    demo: 'https://dribble.com/shots',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Title 2 goes here',
    github: 'https://github.com',
    demo: 'https://dribble.com/shots',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Title 3 goes here',
    github: 'https://github.com',
    demo: 'https://dribble.com/shots',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Title 4 goes here',
    github: 'https://github.com',
    demo: 'https://dribble.com/shots',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Title 5 goes here',
    github: 'https://github.com',
    demo: 'https://dribble.com/shots',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Title 6 goes here',
    github: 'https://github.com',
    demo: 'https://dribble.com/shots',
  },
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className='portfolio__item'>
              <div2 className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div2>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a href={github} className='btn'>
                  GitHub
                </a>
                <a href={demo} className='btn btn-primary'>
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
