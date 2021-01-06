import React from 'react';
import styled from 'styled-components';

const ImageDiv = styled.div`
  width: 200px;
  background-repeat: no-repeat;
  object-fit: cover;
`;

const Image = ({ image }) => (
  <ImageDiv>
    <img src={image} alt="imagePhoto" width="200px" />
  </ImageDiv>
);

export default Image;
