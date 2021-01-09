import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import styled from 'styled-components';
import '../../../css/Carousel.css';
import { Link } from 'react-router-dom';
import Heading from '../Heading/Heading';
import Button from '../Button/Button';
import { routes } from '../../../Routes';

const Carousel = styled.div`
  position: relative;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftArrow = styled(FaArrowAltCircleLeft)`
  position: absolute;
  top: 20vh;
  left: 20%;
  font-size: 5rem;
  color: #000;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;

const RightArrow = styled(FaArrowAltCircleRight)`
  position: absolute;
  top: 20vh;
  right: 20%;
  font-size: 5rem;
  color: #000;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;

const Popular = styled(Heading)`
  margin-top: 2%;
  text-align: center;
  text-transform: uppercase;
  font-size: 45px;
  font-weight: 600;
  background: -webkit-linear-gradient(#c33764, #1d2671);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const CheckButton = styled(Button)`
  position: absolute;
  top: 31vh;
  right: 33%;
  font-size: 2rem;
  color: #ffff;
  z-index: 12;
  cursor: pointer;
  user-select: none;
  transition: 0.5s;

  &:hover {
    background-color: #15cdfc;
  }
`;

const ImageCarousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const { length } = slides;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div>
      <Popular>The most popular items</Popular>
      <Carousel>
        {slides.map((slide, index) => (
          <div className={index === current ? 'slide-active' : 'slide'} key={index.id}>
            {index === current && <img src={slide.image} alt="SlideImage" className="image" />}
            <Link to={`${routes.products}/${slides[index].id}`} style={{ textDecoration: 'none' }}>
              <CheckButton>Check it</CheckButton>
            </Link>
          </div>
        ))}
        <LeftArrow onClick={prevSlide} />
        <RightArrow onClick={nextSlide} />
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
