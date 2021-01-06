import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Redirect } from 'react-router-dom';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Heading from '../../atoms/Heading/Heading';
import Button from '../../atoms/Button/Button';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import basketIcon from '../../../assets/icons/basket.svg';
import Image from '../../atoms/Image/Image';
import { routes } from '../../../Routes';

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

class ItemCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  handleItemClick = () => this.setState({ redirect: true });

  render() {
    const { id, name, image, description, price } = this.props;

    if (this.state.redirect) {
      return <Redirect to={`${routes.products}/${id}`} />;
    }

    return (
      <StyleWrapper onClick={this.handleItemClick}>
        <InnerWrapper yellow>
          <Heading>{name}</Heading>
        </InnerWrapper>
        <InnerWrapper flex>
          <Image image={image} />
          <DataInfo>{description}</DataInfo>
        </InnerWrapper>
        <InnerWrapper flex>
          <Paragraph>{price}</Paragraph>
          <AskButton blue>Ask a question</AskButton>
          <ButtonIcon icon={basketIcon} />
        </InnerWrapper>
      </StyleWrapper>
    );
  }
}

export default ItemCard;
