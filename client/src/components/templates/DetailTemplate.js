import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import Heading from '../atoms/Heading/Heading';
import Paragraph from '../atoms/Paragraph/Paragraph';
import Button from '../atoms/Button/Button';
import { routes } from '../../Routes';

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;
  max-width: 50vw;
  position: relative;

  @media (max-width: 1200px) {
    max-width: 80vw;
  }
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledImage = styled.img`
  position: absolute;
  right: -80px;
  top: 50px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

const DetailsTemplate = ({ id, name, image, description, price, category, quantity }) => (
  <StyledWrapper>
    <StyledPageHeader>
      <StyledHeading big as="h1">
        {name}
      </StyledHeading>
      <StyledParagraph>
        {id} {price} {category} {quantity}
      </StyledParagraph>
      <Paragraph>{description}</Paragraph>
    </StyledPageHeader>
    <StyledImage alt={name} src={image} />

    <Button as={Link} to={`${routes.products}`}>
      Go back
    </Button>
  </StyledWrapper>
);

export default DetailsTemplate;
