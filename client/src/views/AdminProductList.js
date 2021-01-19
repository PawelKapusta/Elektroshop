import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts, createProduct } from '../actions/productActions';
import MessageBox from '../components/atoms/MessageBox/MessageBox';
import LoadingBox from '../components/atoms/LoadingBox/LoadingBox';
import { PRODUCT_CREATE_RESET } from '../constants/productConstants';

const AdminProductList = (props) => {
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  const dispatch = useDispatch();
  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;
  useEffect(() => {
    if (successCreate) {
      dispatch({ type: PRODUCT_CREATE_RESET });
      props.history.push(`/products/${createdProduct.id}/edit`);
    }
    dispatch(listProducts());
  }, [createdProduct, dispatch, props.history, successCreate]);

  const createHandler = () => {
    dispatch(createProduct());
  };
  const deleteHandler = () => {
    /// TODO: dispatch delete action
  };

  return (
    <div>
      <h1>Products</h1>
      <div className="row">
        <button type="button" className="primary" onClick={createHandler}>
          Create Product
        </button>
      </div>
      {loadingCreate && <LoadingBox />}
      {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>CATEGORY</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>
                  <button
                    type="button"
                    className="small"
                    onClick={() => props.history.push(`/products/${product.id}/edit`)}
                  >
                    Edit
                  </button>
                  <button type="button" className="small" onClick={() => deleteHandler(product)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminProductList;
