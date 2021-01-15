import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const ProductContext = createContext({ products: [], setProducts: () => {} });

export const ProductProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get('http://localhost:5000/api/products');
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
