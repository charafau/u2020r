import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView
} from 'react-native';

import {Provider} from 'react-redux'

import {StackNavigator} from 'react-navigation';
import store from './src/store';
import * as actions from './src/actions/repoActions';
import {connect} from 'react-redux';
import HomeScreen from './src/componenets/homeScreen'

const SimpleApp = StackNavigator({
    Home: {screen: HomeScreen},

});

const Main = () => {
    return (
        <Provider store={store}>
            <SimpleApp />
        </Provider>
    );
};

AppRegistry.registerComponent('u2020r', () => Main);
