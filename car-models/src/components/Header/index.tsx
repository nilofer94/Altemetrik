import { FC, useEffect } from 'react';
import './style.css';
import CarsCard from '../CarsCard';

const Header: FC = () => {

  return (
    <>
  <div className='header'>
    <div>Home</div>
    <div>Logo</div>
    <div>Sevices</div>
    <div>Gallery</div>
    <div>Contact us</div>
    </div>
    <CarsCard/>
    </>
  )
};

export default Header;