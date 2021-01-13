import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { routes } from '../Routes';
import { detailsProduct } from '../actions/productActions';

import ButtonIcon from '../components/atoms/ButtonIcon/ButtonIcon';
import GoBackIcon from '../assets/images/goBack.png';

import Paragraph from '../components/atoms/Paragraph/Paragraph';

import Heading from '../components/atoms/Heading/Heading';
import Button from '../components/atoms/Button/Button';

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;
  max-width: 50vw;
  position: relative;
  justify-content: space-between;

  @media (max-width: 1200px) {
    max-width: 80vw;
  }
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 0 auto;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledImage = styled.img`
  width: 200px;
  height: 200px;
`;
const Column = styled.div`
  display: table-cell;
  width: 10%;
`;
const Column2 = styled.div`
  display: table-cell;
  width: 90%;
`;
const CartDiv = styled.div`
  position: fixed;
  right: 5%;
  top: 20%;
`;
const BtnStyled = styled(Button)`
  background: #f09819;
  background: -webkit-linear-gradient(to right, #edde5d, #f09819);
  background: linear-gradient(to right, #edde5d, #f09819);

  &:hover {
    transition: all 1s ease-in-out;
    background: #ede574;
    background: -webkit-linear-gradient(to right, #e1f5c4, #ede574);
    background: linear-gradient(to right, #e1f5c4, #ede574);
  }
`;
const ProductScreen = (props) => {
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();
  const [Qty, setQty] = useState(1);

  const handleAddToCart = () => {
    props.history.push(`/cart/ + ${props.match.params.id} + ?qty= + ${Qty}`);
  };
  console.log('params', props.match.params.id);
  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
    return () => {
      //
    };
  }, []);
  console.log(product);
  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <StyledWrapper>
      <StyledPageHeader>
        <Column>
          <ButtonIcon icon={GoBackIcon} as={Link} to={`${routes.products}`} back={1} />
        </Column>
        <Column2>
          <StyledImage alt="name" src={product.image} />
          <StyledHeading big as="h1">
            {product.name}
          </StyledHeading>
          <StyledParagraph>Category: {product.category}</StyledParagraph>
          <Paragraph>{product.description}</Paragraph>
        </Column2>
      </StyledPageHeader>
      <CartDiv className="details-action">
        <ul>
          <li>Price: {product.price}</li>
          <li>Status: {product.quantity > 0 ? 'In Stock' : 'Unavailable.'}</li>
          <li>
            Quantity:{' '}
            <select
              value={Qty}
              onChange={(e) => {
                setQty(parseInt(e.target.value, 10));
              }}
            >
              {[...Array(product.quantity).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </select>
            {console.log(Qty)}
          </li>
          <li>
            {product.quantity > 0 && <BtnStyled onClick={handleAddToCart}>Add to Cart</BtnStyled>}
          </li>
        </ul>
      </CartDiv>
    </StyledWrapper>
  );
};

export default ProductScreen;
