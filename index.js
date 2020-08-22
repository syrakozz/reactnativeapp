
import { AppRegistry } from 'react-native';
import React from 'react';
import App3 from './App3';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';

import configureStore from './redux/configureStore';

const store = configureStore()

const RNRedux = () => (
    <Provider store = { store }>
        <App3 />
    </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);
