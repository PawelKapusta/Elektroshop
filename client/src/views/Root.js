import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import MainTemplate from '../components/templates/MainTemplate';
import Products from './Products';
import Promotions from './Promotions';
import Contact from './Contact';
import { routes } from '../Routes';
import RegisterPage from './RegisterPage';
import HomePage from './HomePage';
import DetailsPage from './DetailsPage';
import store from '../store';
import LoginPage from './LoginPage';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <>
        <MainTemplate>
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <Route exact path={routes.products} component={Products} />
            <Route path={routes.product} component={DetailsPage} />
            <Route path={routes.promotions} component={Promotions} />
            <Route path={routes.contact} component={Contact} />
            <Route path={routes.register} component={RegisterPage} />
            <Route path={routes.login} component={LoginPage} />
          </Switch>
        </MainTemplate>
      </>
    </BrowserRouter>
  </Provider>
);

export default Root;
