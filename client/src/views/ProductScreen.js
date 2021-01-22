import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { routes } from '../Routes';
import { createReview, detailsProduct } from '../actions/productActions';
import ButtonIcon from '../components/atoms/ButtonIcon/ButtonIcon';
import GoBackIcon from '../assets/images/goBack.png';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import Heading from '../components/atoms/Heading/Heading';
import Button from '../components/atoms/Button/Button';
import LoadingBox from '../components/atoms/LoadingBox/LoadingBox';
import { PRODUCT_REVIEW_CREATE_RESET } from '../constants/productConstants';
import MessageBox from '../components/atoms/MessageBox/MessageBox';
import Rating from '../components/atoms/Rating/Rating';

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;
  max-width: 50vw;
  position: relative;
  justify-content: space-between;

  @media (max-width: 1200px) {
    max-width: 80vw;
  }
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 0 auto;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledImage = styled.img`
  width: 200px;
  height: 200px;
`;
const Column = styled.div`
  display: table-cell;
  width: 10%;
`;
const Column2 = styled.div`
  display: table-cell;
  width: 90%;
`;
const CartDiv = styled.div`
  position: fixed;
  right: 5%;
  top: 20%;
`;
const BtnStyled = styled(Button)`
  background: #f09819;
  background: -webkit-linear-gradient(to right, #edde5d, #f09819);
  background: linear-gradient(to right, #edde5d, #f09819);

  &:hover {
    transition: all 1s ease-in-out;
    background: #ede574;
    background: -webkit-linear-gradient(to right, #e1f5c4, #ede574);
    background: linear-gradient(to right, #e1f5c4, #ede574);
  }
`;
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
  return loading ? (
    <LoadingBox />
  ) : error ? (
    <div>{error}</div>
  ) : (
    <StyledWrapper>
      <StyledPageHeader>
        <Column>
          <ButtonIcon icon={GoBackIcon} as={Link} to={`${routes.products}`} back={1} />
        </Column>
        <Column2>
          <StyledImage alt="name" src={product.image} />
          <StyledHeading big as="h1">
            {product.name}
          </StyledHeading>
          <StyledParagraph>Category: {product.category}</StyledParagraph>
          <Paragraph>{product.description}</Paragraph>
        </Column2>
        <div>
          <h2 id="reviews">Reviews</h2>
          {product.reviews.length === 0 && <MessageBox>There is no review</MessageBox>}
          <ul>
            {product.reviews.map((review) => (
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
                    {/* eslint-disable */}
                    <label htmlFor="rating">Rating</label>
                    <select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
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
      </StyledPageHeader>
      <CartDiv className="details-action">
        <ul>
          <li>Price: {product.price} zł</li>
          <li>Status: {product.quantity > 0 ? 'In Stock' : 'Unavailable.'}</li>
          <li>
            Quantity:{' '}
            <select
              value={Qty}
              onChange={(e) => {
                setQty(parseInt(e.target.value, 10));
              }}
            >
              {[...Array(product.quantity).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </select>
            {console.log(Qty)}
          </li>
          <li>
            {product.quantity > 0 && <BtnStyled onClick={handleAddToCart}>Add to Cart</BtnStyled>}
          </li>
        </ul>
      </CartDiv>
    </StyledWrapper>
  );
};

export default ProductScreen;
