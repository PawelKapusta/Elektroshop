import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from '../components/templates/MainTemplate';
import Promotions from './Promotions';
import Contact from './Contact';
import { routes } from '../Routes';
import RegisterPage from './RegisterPage';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import { ProductProvider } from '../context/ProductContext';
import ProductScreen from './ProductScreen';
import ProductsScreen from './ProductsScreen';
import CartPage from './cartPage';
import ShippingAddress from './ShippingAddress';
import PaymentMethodScreen from './PaymentPage';
import PlaceOrder from './PlaceOrder';
import Order from './Order';
import OrderHistory from './OrderHistory';
import Profile from './ProfilePage';
import AdminProductList from './AdminProductList';
import ProductEdit from './ProductEdit';
import OrderList from './AdminOrdersList';
import '../css/index.css';

const Root = () => (
  <ProductProvider>
    <BrowserRouter>
      <>
        <MainTemplate>
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <Route exact path={routes.products} component={ProductsScreen} />
            <Route exact path={routes.product} component={ProductScreen} />
            <Route path={routes.promotions} component={Promotions} />
            <Route path={routes.contact} component={Contact} />
            <Route path={routes.register} component={RegisterPage} />
            <Route path={routes.login} component={LoginPage} />
            <Route path={routes.shipping} component={ShippingAddress} />
            <Route path={routes.cart} component={CartPage} />
            <Route path={routes.payment} component={PaymentMethodScreen} />
            <Route path={routes.placeOrder} component={PlaceOrder} />
            <Route path={routes.order} component={Order} />
            <Route path={routes.orderHistory} component={OrderHistory} />
            <Route path={routes.profile} component={Profile} />
            <Route path={routes.adminProducts} component={AdminProductList} />
            <Route path={routes.editProduct} component={ProductEdit} exact />
            <Route path={routes.adminOrder} component={OrderList} />
          </Switch>
        </MainTemplate>
      </>
    </BrowserRouter>
  </ProductProvider>
);

export default Root;
