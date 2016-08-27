import React, { Component, PropTypes } from 'react';
var ScrollableTabView = require('react-native-scrollable-tab-view');
import TabNavigator from 'react-native-tab-navigator';
var StockSingle = require('./js/pages/StockSingle');
import {AppRegistry, Text, TouchableHighlight, View,Image} from 'react-native';

export default class Ascending extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab:"首页"
        };
    }

    render() {
        return(
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === "首页"}
                    title="首页"
                    onPress={() => this.setState({ selectedTab: "首页" })}>
                    <StockSingle />
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === "模拟"}
                    title="模拟"
                    onPress={() => this.setState({ selectedTab: '模拟' })}>
                    <Text>{'2222'}</Text>
                </TabNavigator.Item>
            </TabNavigator>
        )
    }
}

AppRegistry.registerComponent('Ascending', () => Ascending);

//<ScrollableTabView tabBarPosition="bottom">
//    <StockSingle tabLabel="首页"  />
//    <Text tabLabel="模拟" >FlowC</Text>
//    <Text tabLabel="个人" >JestC</Text>
//</ScrollableTabView>