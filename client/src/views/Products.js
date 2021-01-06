import React from 'react';
import styled from 'styled-components';
import ItemCard from '../components/molecules/ItemCard/ItemCard';
import Input from '../components/atoms/Input/Input';

import Paragraph from '../components/atoms/Paragraph/Paragraph';
import Heading from '../components/atoms/Heading/Heading';

const SearchForm = styled.div`
  margin-left: 5%;
`;

const ItemList = styled.div`
  margin: 2% auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
const Title = styled(Paragraph)`
  font-weight: 600;
  font-size: 1.9rem;
`;
const PageTitle = styled(Heading)`
  margin: 3% 39%;
  font-weight: 600;
  font-size: 4rem;
`;
const Column = styled.div`
  display: table-cell;
`;
const Row = styled.div`
  display: table;
  width: 40%;
  border-spacing: 10px;
`;
const Products = () => (
  <div>
    <PageTitle>Search for product</PageTitle>
    <SearchForm>
      <Title>Name of product</Title>
      <Input search />
      <Title>Category</Title>
      <Input search />
      <Row>
        <Column>
          {' '}
          <Title> Price from: </Title>{' '}
        </Column>
        <Column>
          {' '}
          <Input />
        </Column>
        <Column>
          <Title> to: </Title>
        </Column>
        <Column>
          <Input />
        </Column>
      </Row>
    </SearchForm>
    <ItemList>
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </ItemList>
  </div>
);

export default Products;
