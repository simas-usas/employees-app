import '@babel/polyfill';

import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from 'store/configureStore';

import App from 'containers/App/App';

const store = configureStore();

render(
    (
        <Provider store={store}>
            <React.Fragment>
                <CssBaseline />
                <App />
            </React.Fragment>
        </Provider>
    ), document.getElementById('root'),
);
