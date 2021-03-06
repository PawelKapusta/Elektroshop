import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Redirect, Link } from 'react-router-dom';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Heading from '../../atoms/Heading/Heading';
import Button from '../../atoms/Button/Button';
import Image from '../../atoms/Image/Image';
import { routes } from '../../../Routes';

const StyleWrapper = styled.div`
  height: 42rem;
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
  padding: 11px 30px 10px;
  background-color: ${({ yellow, theme }) => (yellow ? theme.items : 'white')};
  justify-content: space-between;
  cursor: pointer;
  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: row;
      &:hover {
        transition: all 0.1s ease-in-out;
        background: #f5f5dc;
        color: #010606;
      }
    `}
  ${({ space }) =>
    space &&
    css`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    `}
`;
const Brand = styled(Paragraph)`
  margin: 0 1%;
  font-size: 3rem;
  font-weight: 600;
`;
const PriceText = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.s};
`;
const DataInfo = styled(Paragraph)`
  margin: 50px 0 10px 30px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.s};
`;
const AskButton = styled(Button)`
  background-color: ${({ theme }) => theme.blue};
`;
const Column = styled.div`
  display: table-cell;
`;
const Row = styled.div`
  display: table;
  width: 175%;
  table-layout: fixed;
  border-spacing: 1px;
`;

class ItemCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  handleItemClick = () => this.setState({ redirect: true });

  render() {
    const { id, name, image, description, price, category, quantity } = this.props;

    if (this.state.redirect) {
      return <Redirect to={`${routes.products}/${id}`} />;
    }

    return (
      <StyleWrapper>
        <InnerWrapper yellow>
          <Row>
            <Column>
              <Heading>{name}</Heading>
            </Column>
            <Column>
              <Paragraph>Quantity: {quantity}</Paragraph>
            </Column>
          </Row>
        </InnerWrapper>
        <InnerWrapper flex onClick={this.handleItemClick}>
          <Image image={image} />
          <DataInfo>{description}</DataInfo>
          <Brand>{category}</Brand>
        </InnerWrapper>
        <InnerWrapper space>
          <PriceText>{price} zł</PriceText>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <AskButton blue>Ask a question</AskButton>
          </Link>
        </InnerWrapper>
      </StyleWrapper>
    );
  }
}

export default ItemCard;
