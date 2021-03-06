import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import ButtonIcon from '../atoms/ButtonIcon/ButtonIcon';
import Heading from '../atoms/Heading/Heading';
import Paragraph from '../atoms/Paragraph/Paragraph';
import GoBackIcon from '../../assets/images/goBack.png';
import { routes } from '../../Routes';
import Button from '../atoms/Button/Button';
import '../../css/productDetails.css';

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
  right: -80px;
  top: 50px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
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
const DetailsTemplate = ({ id, name, image, description, price, category, quantity }) => {
  const [Qty, setQty] = useState(1);
  const history = useHistory();
  console.log(id);
  const handleAddToCart = () => {
    history.push(`/cart/ + ${id} + ?qty= + ${Qty}`, { from: `ProductDetails id: + ${id}}` });
  };
  return (
    <StyledWrapper>
      <StyledPageHeader>
        <Column>
          <ButtonIcon icon={GoBackIcon} as={Link} to={`${routes.products}`} back={1} />
        </Column>
        <Column2>
          <StyledImage alt={name} src={image} />
          <StyledHeading big as="h1">
            {name}
          </StyledHeading>
          <StyledParagraph>
            {id} {category} {quantity}
          </StyledParagraph>
          <Paragraph>{description}</Paragraph>
        </Column2>
      </StyledPageHeader>
      <CartDiv className="details-action">
        <ul>
          <li>Price: {price}</li>
          <li>Status: {quantity > 0 ? 'In Stock' : 'Unavailable.'}</li>
          <li>
            Quantity:{' '}
            <select
              value={Qty}
              onChange={(e) => {
                setQty(parseInt(e.target.value, 10));
              }}
            >
              {[...Array(quantity).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </select>
            {console.log(Qty)}
          </li>
          <li>{quantity > 0 && <BtnStyled onClick={handleAddToCart}>Add to Cart</BtnStyled>}</li>
        </ul>
      </CartDiv>
    </StyledWrapper>
  );
};

export default DetailsTemplate;
