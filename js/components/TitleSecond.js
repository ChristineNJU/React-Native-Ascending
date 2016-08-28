import React, { Component, PropTypes } from 'react';
var {
    Text,
    } = require('react-native');

var TitleSecond = React.createClass({
    render:function(){
        return (
            
            <Text style={{color:'#bac7d4',fontSize:12,paddingLeft:10}}>{this.props.name}</Text>
           
        );
    }
});


module.exports = TitleSecond;