import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import StarIcon from '@material-ui/icons/Star';
import { routes } from '../Routes';
import { createReview, detailsProduct } from '../actions/productActions';
import ButtonIcon from '../components/atoms/ButtonIcon/ButtonIcon';
import GoBackIcon from '../assets/images/goBack.png';
import LoadingBox from '../components/atoms/LoadingBox/LoadingBox';
import { PRODUCT_REVIEW_CREATE_RESET } from '../constants/productConstants';
import MessageBox from '../components/atoms/MessageBox/MessageBox';
import Rating from '../components/atoms/Rating/Rating';

const ProductScreen = (props) => {
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();
  const [Qty, setQty] = useState(1);
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    loading: loadingReviewCreate,
    error: errorReviewCreate,
    success: successReviewCreate,
  } = productReviewCreate;

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const handleAddToCart = () => {
    props.history.push(`/cart/${props.match.params.id}?qty=${Qty}`);
  };

  useEffect(() => {
    if (successReviewCreate) {
      window.alert('Review Submitted Successfully');
      setRating('');
      setComment('');
      dispatch({ type: PRODUCT_REVIEW_CREATE_RESET });
    }
    dispatch(detailsProduct(props.match.params.id));
  }, [dispatch, props.match.params.id, successReviewCreate]);
  const submitHandler = (e) => {
    e.preventDefault();
    if (comment && rating) {
      dispatch(createReview(props.match.params.id, { rating, comment, name: userInfo.name }));
    } else {
      alert('Please enter comment and rating');
    }
  };
  return (
    <div>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <ButtonIcon icon={GoBackIcon} as={Link} to={`${routes.products}`} back={1} />
          <div className="row top">
            <div className="col-2" style={{ marginLeft: '10%', marginRight: '-35%' }}>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '35%', height: 'auto' }}
              />
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <h1>{product.name}</h1>
                </li>
                <li>
                  <Rating rating={product.rating} numReviews={product.numReviews} />
                </li>
                <li>Price : {product.price} zł</li>
                <li>
                  Description:
                  <p>{product.description}</p>
                </li>
              </ul>
            </div>
            <div className="col-1">
              <div className="card card-body">
                <ul>
                  <li>
                    <div className="row">
                      <div>Price</div>
                      <div className="price">{product.price} zł</div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>Status</div>
                      <div>
                        {product.quantity > 0 ? (
                          <span className="success">In Stock</span>
                        ) : (
                          <span className="danger">Unavailable</span>
                        )}
                      </div>
                    </div>
                  </li>
                  {/* eslint-disable */}
                  {product.quantity > 0 && (
                    <>
                      <li>
                        <div className="row">
                          <div>Quantity</div>
                          <div>
                            <select value={Qty} onChange={(e) => setQty(e.target.value)}>
                              {[...Array(product.quantity).keys()].map((x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </li>
                      <li>
                        <button onClick={handleAddToCart} className="primary block">
                          Add to Cart
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div style={{ marginLeft: '10%', marginTop: '5%' }}>
            <h2 id="reviews">Reviews</h2>
            {product.reviews === 0 && <MessageBox>There is no review</MessageBox>}
            <ul>
              {product.reviews?.map((review) => (
                <li key={review._id}>
                  <strong>{review.name}</strong>
                  <Rating rating={review.rating} caption=" " />
                  <p>{review.createdAt.substring(0, 10)}</p>
                  <p>{review.comment}</p>
                </li>
              ))}
              <li>
                {userInfo ? (
                  <form className="form" onSubmit={submitHandler}>
                    <div>
                      <h2>Write a customer review</h2>
                    </div>
                    <div>
                      <label htmlFor="rating">Rating</label>
                      <select
                        id="rating"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                      >
                        <option value="">Select...</option>
                        <option value="1">1- Poor</option>
                        <option value="2">2- Fair</option>
                        <option value="3">3- Good</option>
                        <option value="4">4- Very good</option>
                        <option value="5">5- Excelent</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="comment">Comment</label>
                      <textarea
                        id="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      />
                    </div>
                    <div>
                      <label />
                      <button className="primary" type="submit">
                        Submit
                      </button>
                    </div>
                    <div>
                      {loadingReviewCreate && <LoadingBox />}
                      {errorReviewCreate && (
                        <MessageBox variant="danger">{errorReviewCreate}</MessageBox>
                      )}
                    </div>
                    {/* eslint-disable */}
                  </form>
                ) : (
                  <MessageBox>
                    Please <Link to="/signin">Sign In</Link> to write a review
                  </MessageBox>
                )}
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductScreen;
