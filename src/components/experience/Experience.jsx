import './Experience.css';
import { AiFillCheckCircle } from 'react-icons/ai';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>My Developer Tech Skills (remove me)</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4>Tailwind CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4>SASS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4>REACT</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        {/* BEGIN BACKEND */}
        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4>----</h4>
                <small className='text-light'>---</small>{' '}
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4>---</h4>
                <small className='text-light'>---</small>{' '}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
