import React, { useContext, useEffect, useState } from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../components/atoms/Input/Input';
import ItemCard from '../components/molecules/ItemCard/ItemCard';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import Heading from '../components/atoms/Heading/Heading';
import { listProducts } from '../actions/productActions';
import ProductContext from '../context/ProductContext';
import LoadingBox from '../components/atoms/LoadingBox/LoadingBox';
import MessageBox from '../components/atoms/MessageBox/MessageBox';

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

const ProductsScreen = (props) => {
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  const { allProducts } = useContext(ProductContext);
  const [searchProductName, setSearchProductName] = useState('');
  const [searchCategory, setSearchCategory] = useState('');
  const [searchLowerPrice, setSearchLowerPrice] = useState(0);
  const [searchHighestPrice, setSearchHighestPrice] = useState(Number.MAX_VALUE);
  const [filteredProducts, setFilteredProducts] = useState(products);
  useEffect(() => {
    dispatch(listProducts());
  }, []);

  // useEffect(() => {
  //   setFilteredProducts(
  //     filteredProducts.filter(
  //       (product) =>
  //         product.name.toLowerCase().includes(searchProductName.toLowerCase()) &&
  //         product.category.toLowerCase().includes(searchCategory.toLowerCase()) &&
  //         product.price >= searchLowerPrice &&
  //         product.price <= searchHighestPrice,
  //     ),
  //   );
  // }, [filteredProducts, searchProductName, searchCategory, searchLowerPrice, searchHighestPrice]);
  // data.products.find((x) => x.id === parseInt(props.match.params.id, 10))
  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div>
      <PageTitle>Search for product</PageTitle>
      <SearchForm>
        <Title>Name of product</Title>
        <Input search onChange={(e) => setSearchProductName(e.target.value)} />
        <Title>Category</Title>
        <Input search onChange={(e) => setSearchCategory(e.target.value)} />
        <Row>
          <Column>
            {' '}
            <Title> Price from: </Title>{' '}
          </Column>
          <Column>
            {' '}
            <Input type="number" onChange={(e) => setSearchLowerPrice(e.target.value)} />
          </Column>
          <Column>
            <Title> to: </Title>
          </Column>
          <Column>
            <Input type="number" onChange={(e) => setSearchHighestPrice(e.target.value)} />
          </Column>
        </Row>
        <Results> {products.length} results</Results>
      </SearchForm>
      <ItemList>
        {products.map(({ _id, name, image, description, price, category, quantity }) => (
          <ItemCard
            id={_id}
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
            key={_id}
            rating={1}
          />
        ))}
      </ItemList>
    </div>
  );
};

export default ProductsScreen;
