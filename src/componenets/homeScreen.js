import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView
} from 'react-native';

import * as actions from './../actions/repoActions';
import {connect} from 'react-redux';


class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    componentWillMount() {
        console.log('mointing home screen');
        this.props.dispatch(actions.fetchRepos())
    }

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this.props.repos)
        };

    }

    componentWillReceiveProps(newProps) {
        let repos = newProps.repos;

        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(repos)
        });


    }

    render() {
        console.log(this.props);
        return (
            <View>
                <Text>Hello, Chat App!</Text>
                <ListView
                    dataSource={this.state.dataSource}
                    removeClippedSubviews={false}
                    enableEmptySections={true}
                    renderRow={(rowData) => <Text>{rowData.name}</Text>}
                />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {repos: state.repos.repos};
}

export default connect(mapStateToProps)(HomeScreen);
