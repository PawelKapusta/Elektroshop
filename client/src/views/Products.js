import React from 'react';
import styled from 'styled-components';
import ItemCard from '../components/molecules/ItemCard/ItemCard';
import Input from '../components/atoms/Input/Input';

import Paragraph from '../components/atoms/Paragraph/Paragraph';
import Heading from '../components/atoms/Heading/Heading';

const products = [
  {
    id: 1,
    name: 'Fifine Confait',
    image:
      'https://images.unsplash.com/photo-1550520920-27ba45c38740?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'Stage 3 necrotizing enterocolitis in newborn',
    price: 3225.0,
  },
  {
    id: 2,
    name: 'Colman Daffey',
    image:
      'https://images.unsplash.com/photo-1600478822888-e3d96cdc8ae2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'Displ oblique fx shaft of unsp rad, 7thP',
    price: 4107.9,
  },
  {
    id: 3,
    name: 'Alexio Terbrugge',
    image:
      'https://images.unsplash.com/photo-1599518532481-301fb4d411c1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',
    description: 'Partial traumatic trnsphal amp of r little finger, sequela',
    price: 1589.9,
  },
  {
    id: 4,
    name: 'Rachel Couchman',
    image:
      'https://images.unsplash.com/photo-1605406993610-0d12ba1df451?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
    description: 'Acute eczematoid otitis externa, left ear',
    price: 3784.3,
  },
  {
    id: 5,
    name: 'Glen Over',
    image:
      'https://images.unsplash.com/photo-1560529870-1efc5a43990f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',
    description: 'Other specified disorders of nose and nasal sinuses',
    price: 2129.3,
  },
  {
    id: 6,
    name: 'Jessee Handley',
    image:
      'https://images.unsplash.com/photo-1551645120-d70bfe84c826?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80 ',
    description: 'Underdosing of digestants, sequela',
    price: 780.7,
  },
  {
    id: 7,
    name: 'Thelma Walkling',
    image:
      'https://images.unsplash.com/photo-1542487354-feaf93476caa?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=658&q=80',
    description: 'Driver of military vehicle injured nontraf, subs',
    price: 3635.6,
  },
];

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
const Results = styled(Paragraph)`
  margin: 1% 2%;
  font-weight: 600;
  font-size: 1.9rem;
  color: #dc143c;
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
      <Results>X results</Results>
    </SearchForm>

    <ItemList>
      {products.map(({ id, name, image, description, price }) => (
        <ItemCard id={id} name={name} image={image} description={description} price={price} />
      ))}
    </ItemList>
  </div>
);

export default Products;
