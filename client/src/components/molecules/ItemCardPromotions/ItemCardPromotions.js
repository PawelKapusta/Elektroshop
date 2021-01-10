import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Heading from '../../atoms/Heading/Heading';
import Image from '../../atoms/Image/Image';
import Paragraph from '../../atoms/Paragraph/Paragraph';

// const AddIcon = styled.button`
//   display: block;
//   position: relative;
//   right: 20px;
//   width: 67px;
//   height: 67px;
//   border-radius: 20px;
//   background-image: url(${({ icon }) => icon});
//   background-repeat: no-repeat;
//   background-position: 50% 50%;
//   background-size: 50% 50%;
//   border: none;
//
//   &.active {
//     background-color: white;
//   }
// `;

const StyleWrapper = styled.div`
  height: 41rem;
  width: 90rem;
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
  background-color: ${({ yellow, theme }) => (yellow ? theme.red : 'white')};

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: row;
      &:hover {
        transition: all 0.1s ease-in-out;
        background: #e0eafc;
        background: -webkit-linear-gradient(to right, #cfdef3, #e0eafc);
        background: linear-gradient(to right, #cfdef3, #e0eafc);

        color: #010606;
      }
    `}
  ${({ space }) =>
    space &&
    css`
      display: flex;
      justify-content: space-between;
      z-index: 100;
    `}
`;
const Brand = styled(Paragraph)`
  margin: 0 1%;
  font-size: 3rem;
  font-weight: 600;
`;
const DataInfo = styled(Paragraph)`
  margin: 50px 0 10px 30px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const Column = styled.div`
  display: table-cell;
  margin: 0 auto;
`;
const Row = styled.div`
  display: table;
  width: 30%;
  table-layout: auto;
  border-spacing: 1px;
`;

const OldPrice = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.s};
  text-decoration: line-through;
  margin: 0 auto;
  padding: 0 auto;
  font-size: 1.2rem;
`;

const NewPrice = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-size: 2.6rem;
  margin: 0 auto;
  padding: 0 auto;
`;

class ItemCardPromotions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, image, description, price, newPrice, category } = this.props;

    return (
      <StyleWrapper>
        <InnerWrapper yellow>
          <Heading>{name}</Heading>
        </InnerWrapper>
        <InnerWrapper flex onClick={this.handleItemClick}>
          <Image image={image} />
          <DataInfo>{description}</DataInfo>
          <Brand>{category}</Brand>
        </InnerWrapper>
        <InnerWrapper space>
          <Row>
            <Column>
              <OldPrice>{price} zł</OldPrice>
            </Column>
            <Column>
              <NewPrice>{newPrice} zł</NewPrice>
            </Column>
          </Row>
        </InnerWrapper>
      </StyleWrapper>
    );
  }
}

export default ItemCardPromotions;
