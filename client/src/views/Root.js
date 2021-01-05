import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from '../components/atoms/Button/Button';
import GlobalStyle from '../theme/GlobalStyle';
import { theme } from '../theme/mainTheme';
import Input from '../components/atoms/Input/Input';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import Heading from '../components/atoms/Heading/Heading';
import ItemCard from '../components/molecules/ItemCard/ItemCard';

const Root = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <h1>Hello </h1>
      <Button>Close / Save</Button>
      <Button>Remove</Button>
      <Input placeholder="search" search />
      <Paragraph theme={theme}>this is my paragraph</Paragraph>
      <Heading theme={theme}>Heading</Heading>
      <ItemCard />
    </ThemeProvider>
  </div>
);

export default Root;
