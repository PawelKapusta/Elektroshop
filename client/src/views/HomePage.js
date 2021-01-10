import React, { useContext } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ImageCarousel from '../components/atoms/ImageSlider/ImageCarousel';
import HomeCard from '../components/atoms/HomeCard/HomeCard';
import Heading from '../components/atoms/Heading/Heading';
import ProductContext from '../context/ProductContext';

const CardsSection = styled.div`
  margin: auto;
  text-align: center;
`;

const Column = styled.div`
  display: table-cell;
`;
const Row = styled.div`
  display: table;
  width: 100%;
  table-layout: fixed;
  border-spacing: 10px;
`;
const Newest = styled(Heading)`
  margin-top: 2%;
  text-align: center;
  text-transform: uppercase;
  font-size: 45px;
  font-weight: 600;
  background: linear-gradient(to top left, #66ffff 0%, #6699ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const HomePage = () => {
  const { products } = useContext(ProductContext);

  const productsSortedByQuantity = products.sort((a, b) => a.quantity - b.quantity).slice(0, 3);
  const productsSortedByID = products.sort((a, b) => b.id - a.id).slice(0, 3);
  return (
    <CardsSection>
      <ImageCarousel slides={productsSortedByQuantity} />
      <Newest>New items</Newest>
      <Row>
        {productsSortedByID.map(({ image, name, price, id }) => (
          <Column>
            <HomeCard image={image} name={name} price={price} id={id} key={id} />
          </Column>
        ))}
      </Row>
    </CardsSection>
  );
};

HomePage.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    }),
  ),
};

HomePage.defaultProps = {
  products: [],
};

const mapStateToProps = (state) => {
  const { products } = state;
  return { products };
};

export default connect(mapStateToProps)(HomePage);
