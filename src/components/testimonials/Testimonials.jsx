import './Testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

// core version + navigation, pagination modules:
import { Navigation, Pagination, Scrollbar } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';

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

      <Swiper
        className='container testimonials__container'
        //install Swiper modules modules={[ Pagination]}
        modules={[Pagination]}
        spaceBetween={40}
        SlidePerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className='testimonial'>
              <div className='client__avatar'>
                <img src={avatar} alt='avatar' />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
