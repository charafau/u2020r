import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView
} from 'react-native';

import * as actions from './../actions/repoActions';
import { connect } from 'react-redux';


class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    componentWillMount() {
        this.props.dispatch(actions.fetchRepos())
    }


    render() {
        console.log(this.props);
        return (
            <View>
                <Text>Hello, Chat App!</Text>

            </View>
        );
    }
}

function mapStateToProps(state) {
    return { repos: state.repos.repos };
}

export default connect(mapStateToProps)(HomeScreen);
