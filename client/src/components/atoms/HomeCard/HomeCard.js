import React from 'react';
import styled from 'styled-components';
import '../../../css/HomeCard.css';
import { Link } from 'react-router-dom';
import { routes } from '../../../Routes';
import Heading from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';

const Card = styled.div`
  width: 300px;
  overflow: hidden;
  box-shadow: 0px 0px 15px -5px;
  margin: 4% auto;
  padding: 0 0 4% 0;
  &:hover {
    transform: scale(1.1);
    transition: 0.4s ease-in-out;
    box-shadow: 0px 0px 15px 0px;
  }
`;
const Content = styled.div`
  position: relative;
  margin: 2%;
  padding: 5%;
`;
const Name = styled(Heading)`
  margin: 1% auto;
  text-decoration: none;
`;
const Price = styled(Paragraph)`
  position: absolute;
  right: 0;
  bottom: -27px;
  margin: 2% 2%;
`;
const HomeCard = ({ image, name, price, id }) => (
  <Link to={`${routes.products}/${id}`} style={{ textDecoration: 'none' }}>
    <Card>
      <div className="image-container">
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
