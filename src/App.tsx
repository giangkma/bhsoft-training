import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { Provider } from 'react-redux';
import configStore from './store';
import './style.css';
import { PersistGate } from 'redux-persist/integration/react';

const { store, persistor } = configStore();

const antIcon = (
    <LoadingOutlined
        style={{
            fontSize: 54,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
        }}
        spin
    />
);

const LoginPage = lazy(() => import('./pages/loginPage'));
const CartPage = lazy(() => import('./pages/cartPage'));
const HomePage = lazy(() => import('./pages/homePage'));
const SmathPhonePage = lazy(() => import('./pages/smathPhonePage'));
const TabletPage = lazy(() => import('./pages/tabletPage'));
const LaptopPage = lazy(() => import('./pages/laptopPage'));
const DetailPage = lazy(() => import('./pages/detailProductPage'));

const App = () => {
    return (
        <>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Router>
                        <Suspense fallback={<Spin indicator={antIcon} />}>
                            <Switch>
                                <Route path="/" exact>
                                    <HomePage />
                                </Route>
                                <Route path="/smathphone" exact>
                                    <SmathPhonePage />
                                </Route>
                                <Route path="/tablet" exact>
                                    <TabletPage />
                                </Route>
                                <Route path="/laptop" exact>
                                    <LaptopPage />
                                </Route>
                                <Route path="/product/:id">
                                    <DetailPage />
                                </Route>
                                <Route path="/login" exact>
                                    <LoginPage />
                                </Route>
                                <Route path="/cart" exact>
                                    <CartPage />
                                </Route>
                            </Switch>
                        </Suspense>
                    </Router>
                </PersistGate>
            </Provider>
        </>
    );
};
export default App;
