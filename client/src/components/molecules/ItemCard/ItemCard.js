import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Redirect, Link } from 'react-router-dom';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Heading from '../../atoms/Heading/Heading';
import Button from '../../atoms/Button/Button';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import basketIcon from '../../../assets/icons/basket.svg';
import Image from '../../atoms/Image/Image';
import { routes } from '../../../Routes';

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
  background-color: ${({ yellow, theme }) => (yellow ? theme.items : 'white')};

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
const DataInfo = styled(Paragraph)`
  margin: 50px 0 10px 30px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.s};
`;
const AskButton = styled(Button)`
  background-color: ${({ theme }) => theme.blue};
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
    const { id, name, image, description, price, category } = this.props;

    if (this.state.redirect) {
      return <Redirect to={`${routes.products}/${id}`} />;
    }

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
          <Paragraph>{price} zł</Paragraph>
          <AskButton blue>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              Ask a question
            </Link>
          </AskButton>
          <ButtonIcon icon={basketIcon} />
        </InnerWrapper>
      </StyleWrapper>
    );
  }
}





export default ItemCard;
