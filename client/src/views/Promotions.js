import React, { useContext } from 'react';
import styled from 'styled-components';
import LinesEllipsis from 'react-lines-ellipsis';
import ItemCardPromotions from '../components/molecules/ItemCardPromotions/ItemCardPromotions';
import Heading from '../components/atoms/Heading/Heading';
import ProductContext from '../context/ProductContext';

const ItemList = styled.div`
  margin: 2% auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const PageTitle = styled(Heading)`
  margin: 3% 43%;
  font-weight: 600;
  font-size: 4rem;
`;

const Promotions = () => {
  const { products } = useContext(ProductContext);

  return (
    <div>
      <PageTitle>Promotions</PageTitle>
      <ItemList>
        {products
          .map(({ id, name, image, description, price, category, quantity }) => (
            <ItemCardPromotions
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
              price={price + 100}
              newPrice={price}
              category={category}
              quantity={quantity}
              key={id}
            />
          ))
          .slice(0, 7)}
      </ItemList>
    </div>
  );
};

export default Promotions;
