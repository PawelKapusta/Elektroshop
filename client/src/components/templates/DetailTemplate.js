import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const DetailsTemplate = ({ children }) => (
  <div>
    {children}
    <Link to="/products">Go Back</Link>
  </div>
);

export default DetailsTemplate;
