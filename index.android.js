import React, { Component, PropTypes } from 'react';
var ScrollableTabView = require('react-native-scrollable-tab-view');
import TabNavigator from 'react-native-tab-navigator';
var StockSingle = require('./js/pages/StockSingle');
var StockList = require('./js/pages/StockList');
var Simulator = require('./js/pages/Simulator');
import {AppRegistry, Text, TouchableHighlight, View,Image,Navigator} from 'react-native';

export default class Ascending extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab:"股票池"
        };
    }

    render() {

        let defaultName = 'FirstPageComponent';
        let defaultComponent = StockList;  

        return(
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === "股票池"}
                    title="股票池"
                    onPress={() => this.setState({ selectedTab: "股票池" })}>

                    <Navigator
                        initialRoute={{ name: defaultName, component: defaultComponent }}
                        configureScene={(route) => {
                            return Navigator.SceneConfigs.HorizontalSwipeJump;
                        }}
                        renderScene={(route, navigator) => {
                            let Component = route.component;
                            return <Component {...route.params} navigator={navigator} />
                        }} />
                </TabNavigator.Item>
                
                <TabNavigator.Item
                    selected={this.state.selectedTab === "模拟"}
                    title="模拟"
                    onPress={() => this.setState({ selectedTab: '模拟' })}>
                    <Simulator />
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === "个人"}
                    title="个人"
                    onPress={() => this.setState({ selectedTab: '个人' })}>
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