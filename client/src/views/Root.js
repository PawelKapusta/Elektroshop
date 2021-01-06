import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from '../components/templates/MainTemplate';
import Products from './Products';
import Promotions from './Promotions';
import Contact from './Contact';

import SignUp from './SignUp';
import HomePage from './HomePage';

const Root = () => (
  <BrowserRouter>
    <>
      <MainTemplate>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/products" component={Products} />
          <Route path="/promotions" component={Promotions} />
          <Route path="/contact" component={Contact} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </MainTemplate>
    </>
  </BrowserRouter>
);

export default Root;
