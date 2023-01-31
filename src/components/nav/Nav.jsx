import React from 'react';
import './Nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BsFillBookFill } from 'react-icons/bs';
import { FcServices } from 'react-icons/fc';
import { MdOutlineContactless } from 'react-icons/md';
import { IoMdWalk } from 'react-icons/io';

const Nav = () => {
  // const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href='#' className='active'>
        <AiOutlineHome />
      </a>
      <a href='#about'>
        <AiOutlineUser />
      </a>
      <a href='#experience'>
        <BsFillBookFill />
      </a>
      <a href='#services'>
        <FcServices />
      </a>
      <a href='#testimonials'>
        <IoMdWalk />
      </a>
      <a href='#contact'>
        <MdOutlineContactless />
      </a>
    </nav>
  );
};

export default Nav;
