import React, { useContext, useEffect, useState } from 'react';
import DetailsTemplate from '../components/templates/DetailTemplate';
import ProductContext from '../context/ProductContext';

const DetailsPage = ({ match }) => {
  const { products } = useContext(ProductContext);
  const [activeItem, setActiveItem] = useState({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (products.length === 0) {
      setLoading(true);
    } else {
      const product = products.find((item) => item.id === parseInt(match.params.id, 10));
      setActiveItem(product);
      setLoading(false);
    }
    console.log('active', activeItem);
  }, [products]);
  return (
    <>
      {isLoading ? (
        'Loading...'
      ) : (
        <DetailsTemplate
          id={activeItem.id}
          image={activeItem.image}
          quantity={activeItem.quantity}
          name={activeItem.name}
          description={activeItem.description}
          price={activeItem.price}
          category={activeItem.category}
        />
      )}
    </>
  );
};

export default DetailsPage;
