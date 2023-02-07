import './Testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

const data = [
  {
    avatar: AVTR1,
    name: 'Jane shrowd',
    review:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi omnis',
  },
  {
    avatar: AVTR2,
    name: 'Jane shrowd',
    review:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi omnis',
  },
  {
    avatar: AVTR3,
    name: 'Jane shrowd',
    review:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi omnis',
  },
  {
    avatar: AVTR4,
    name: 'Jane shrowd',
    review:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi omnis',
  },
];

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <div className='container testimonials__container'>
        {data.map(({ avatar, name, review }, index) => {
          return (
            <article key={index} className='testimonial'>
              <div className='client__avatar'>
                <img src={avatar} alt='avatar' />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
