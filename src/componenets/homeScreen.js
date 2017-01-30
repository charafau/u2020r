import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View,
    ListView
} from 'react-native';

import * as actions from './../actions/repoActions';
import {connect} from 'react-redux';
import {Card, ListItem, Button} from 'react-native-elements'


class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Most popular repositories',
    };

    componentWillMount() {
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
                <ListView
                    dataSource={this.state.dataSource}
                    removeClippedSubviews={false}
                    enableEmptySections={true}
                    renderRow={(rowData) =>

                        <Card>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <Image source={{uri: rowData.owner.avatar_url}}
                                       style={{width: 50, height: 50, borderRadius: 64}}/>
                                <View style={{flex: 1, flexDirection: 'column', marginLeft: 8}}>
                                    <Text style={{marginBottom: 10}}>
                                        {rowData.name}
                                    </Text>
                                    <Text style={{marginBottom: 10}}>
                                        {rowData.description}
                                    </Text>
                                </View>
                            </View>

                        </Card>

                    }
                />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {repos: state.repos.repos};
}

export default connect(mapStateToProps)(HomeScreen);
