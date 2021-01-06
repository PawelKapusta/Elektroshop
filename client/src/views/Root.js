import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from '../components/templates/MainTemplate';
import Products from './Products';
import Promotions from './Promotions';
import Contact from './Contact';
import { routes } from '../Routes';
import SignUp from './SignUp';
import HomePage from './HomePage';
import DetailsPage from './DetailsPage';

const Root = () => (
  <BrowserRouter>
    <>
      <MainTemplate>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route exact path={routes.products} component={Products} />
          <Route path={routes.product} component={DetailsPage} />
          <Route path={routes.promotions} component={Promotions} />
          <Route path={routes.contact} component={Contact} />
          <Route path={routes.registration} component={SignUp} />
        </Switch>
      </MainTemplate>
    </>
  </BrowserRouter>
);

export default Root;
