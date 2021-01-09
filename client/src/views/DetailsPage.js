import React from 'react';
import DetailsTemplate from '../components/templates/DetailTemplate';

const DetailsPage = ({ id, name, image, description, quantity, category, price }) => (
  <>
    <DetailsTemplate
      id={id}
      image={image}
      quantity={quantity}
      name={name}
      description={description}
      price={price}
      category={category}
    />
  </>
);

export default DetailsPage;
