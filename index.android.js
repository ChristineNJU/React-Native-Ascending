import React, { Component, PropTypes } from 'react';
var ScrollableTabView = require('react-native-scrollable-tab-view');
var StockSingle = require('./js/pages/StockSingle');
import {AppRegistry, Text, TouchableHighlight, View,Image} from 'react-native';

export default class Ascending extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <ScrollableTabView tabBarPosition="bottom">
                <StockSingle tabLabel="首页"  />
                <Text tabLabel="模拟" >FlowC</Text>
                <Text tabLabel="个人" >JestC</Text>
            </ScrollableTabView>
        )
    }
}

AppRegistry.registerComponent('Ascending', () => Ascending);
