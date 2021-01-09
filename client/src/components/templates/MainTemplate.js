import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../theme/GlobalStyle';
import { theme } from '../../theme/MainTheme';
import MainNavbar from '../organisms/MainNavbar/MainNavbar';
import Footer from "../organisms/Footer/Footer";

const MainTemplate = ({ children }) => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <MainNavbar />
        {children}
          <Footer/>
      </>
    </ThemeProvider>

  </div>
);

MainTemplate.propTypes = {

  children: PropTypes.element.isRequired,
};
export default MainTemplate;
