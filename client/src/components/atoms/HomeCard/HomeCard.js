import React from 'react';
import styled from 'styled-components';
import '../../../css/HomeCard.css';
import { Link } from 'react-router-dom';
import { routes } from '../../../Routes';
import Heading from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';

const Card = styled.div`
  width: 300px;
  height: 380px;
  overflow: hidden;
  box-shadow: 0px 0px 15px -5px;
  margin: 6% auto;
  &:hover {
    transform: scale(1.1);
    transition: 0.4s ease-in-out;
    box-shadow: 0px 0px 15px 0px;
  }
`;
const Content = styled.div`
  position: relative;
  margin: 2%;
  padding: 2%;
`;
const Name = styled(Heading)`
  margin: 2% auto;
  text-decoration: none;
`;
const Price = styled(Paragraph)`
  position: absolute;
  right: 0;
  bottom: -25px;
  margin: 2% 2%;
`;
const HomeCard = ({ image, name, price, id }) => (
  <Link to={`${routes.products}/${id}`} style={{ textDecoration: 'none' }}>
    <Card>
      <div className="image-container" key={id}>
        <img src={image} alt="imagePhoto" />
      </div>
      <Content>
        <Name>{name}</Name>
        <Price>{price} zł</Price>
      </Content>
    </Card>
  </Link>
);

export default HomeCard;
