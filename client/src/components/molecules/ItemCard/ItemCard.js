import React from 'react';
import styled, { css } from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Heading from '../../atoms/Heading/Heading';
import Button from '../../atoms/Button/Button';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import basketIcon from '../../../assets/icons/basket.svg';
import Image from '../../atoms/Image/Image';

const StyleWrapper = styled.div`
  min-height: 300px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
  max-width: 100rem;
  margin: 1% auto;
`;
const InnerWrapper = styled.div`
  padding: 17px 30px 10px;
  background-color: ${({ yellow, theme }) => (yellow ? theme.items : 'white')};

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    `}
`;

const DataInfo = styled(Paragraph)`
  margin: 30px 0 10px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.s};
`;
const AskButton = styled(Button)`
  background-color: ${({ theme }) => theme.blue};
`;

const ItemCard = () => (
  <StyleWrapper>
    <InnerWrapper yellow>
      <Heading>Laptop X</Heading>
    </InnerWrapper>
    <InnerWrapper flex>
      <Image />
      <DataInfo>
        A laptop computer is a small personal computer. They are designed to be more portable than
        traditional desktop computers, with many of the same abilities. Laptops are able to be
        folded flat for transportation and have a built-in keyboard and touchpad
      </DataInfo>
    </InnerWrapper>
    <InnerWrapper flex>
      <Paragraph>Price</Paragraph>
      <AskButton blue>Ask a question</AskButton>
      <ButtonIcon icon={basketIcon} />
    </InnerWrapper>
  </StyleWrapper>
);

export default ItemCard;
