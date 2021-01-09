import React, { useContext } from 'react';
import styled from 'styled-components';
import LinesEllipsis from 'react-lines-ellipsis';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import ItemCard from '../components/molecules/ItemCard/ItemCard';
import Input from '../components/atoms/Input/Input';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import Heading from '../components/atoms/Heading/Heading';
import ProductContext from '../context/ProductContext';

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
const Products = () => {
  const { products } = useContext(ProductContext);

  return (
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
        <Results>{products.length} results</Results>
      </SearchForm>

      <ItemList>
        {products.map(({ id, name, image, description, price, category, quantity }) => (
          <ItemCard
            id={id}
            name={name}
            image={image}
            description={
              <LinesEllipsis
                text={description}
                maxLine="3"
                ellipsis="..."
                trimRight
                basedOn="letters"
              />
            }
            price={price}
            category={category}
            quantity={quantity}
            key={id}
          />
        ))}
      </ItemList>
    </div>
  );
};

// Products.propTypes = {
//   products: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//       image: PropTypes.string.isRequired,
//       price: PropTypes.number.isRequired,
//       description: PropTypes.string.isRequired,
//       category: PropTypes.string.isRequired,
//       quantity: PropTypes.number.isRequired,
//     }),
//   ),
// };

Products.defaultProps = {
  products: [],
};

const mapStateToProps = (state) => {
  const { products } = state;
  return { products };
};

export default connect(mapStateToProps)(Products);
