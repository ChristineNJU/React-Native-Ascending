import React, { Component, PropTypes } from 'react';
var {
    AppRegistry,
    Text,
    View
    } = require('react-native');

var TableRow = React.createClass({
    render:function(){

        var content = this.props.content;
        var headerContent = content.map(one => {
            return <Text style={{color:'#bac7d4',flex:1}}>{one}</Text>;
            
        });
        // console.log(content);
        return(
            <View style={{flexDirection:'row',paddingTop:5,paddingLeft:10,paddingRight:10}}>
                {headerContent}
            </View>
        );
    }
});

AppRegistry.registerComponent('TableRow', () => TableRow);
module.exports = TableRow;