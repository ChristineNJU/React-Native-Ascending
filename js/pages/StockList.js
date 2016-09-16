import React, { Component, PropTypes } from 'react';
var {
    AppRegistry,
    Text,
    View,
    ListView,
    TouchableOpacity,
    Platform,
    } = require('react-native');
// const Picker = (Platform.OS !== 'ios') ? require('../components/PickerAndroid') : require('react-native').Picker;
const Picker = require('react-native').Picker;

var StockSingle = require('./StockSingle');
var TableRow = require('../components/TableRow');
var urls = require('../datas/Urls');

var StockList = React.createClass({

	 _pressButton: function(stockInfo,e) {
        const { navigator } = this.props;
        var info = stockInfo;
        // console.log(stockInfo);
        // console.log('_pressButton');
        if(navigator) {
            navigator.push({
                name: 'SecondPageComponent',
                component: StockSingle,
                params: {
                    id: info
                }
            })
        }
    },

	getDefaultProps: function(){
       return {
       		stocks:{},
            userid:'2',
       };
    },

    getInitialState: function(){
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        
        return{
            stocks:new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
            // stockPools:[{
            //     userid:'',
            //     poolId:0,
            //     poolName:'',
            //     stocklist:[],
            // }],
            selectedPool:0,
            loading:1,
        };
    },
    componentWillMount: function(){
        // console.log('in comopoentWill');
        // console.log(urls.stockPool+this.props.userid);
        // this.loadData();
    },
    loadData: async function(){

        await fetch(urls.stockPool+this.props.userid)
        .then((response)=>response.json())
        .then((responseData)=>{
            this.setState({
                stockPools:responseData.stockPools,
                stocks:this.state.stocks.cloneWithRows(responseData.stockPools[0].stockinfolist),
                loading:0,
                selectedPool:1,
            });
            // console.log(urls.stockPool+this.props.userid);
            // console.log('');
            console.log(responseData.stockPools[0].stockinfolist);
        }).catch((error)=>{
            console.error(error);
        });
    },
    favorRow:function(stockInfo){
        // console.log(this.state.selectedPool);
        // console.log('in favorRow');
        // console.log(stockInfo);
    	return(
    		<TouchableOpacity onPress={this._pressButton.bind(this,stockInfo.stockid)}
    			style={{paddingLeft:10,paddingRight:10}}>
				<Text style={{color:'#bac7d4'}}>{stockInfo.stockid}</Text>
			</TouchableOpacity>
    	)
    },
    getPickerItems :function(stockPools){
        var PickerItems =[];
        stockPools.map(function(pool,index,array){
            // console.log('hhhhhhh');
            // console.log(index);
            PickerItems.push(<Picker.Item label={pool.poolName} value={index} />);
        });
        // console.log('in getPickerItems');
        // console.log(PickerItems[1].props.value);
        return PickerItems;
    },

	render:function(){
        // console.log('in render');
        var sp = this.props.StockPools;
        // console.log(sp);
        // this.state.selectedPool = 0;
        // console.log(urls.stockPool+this.props.userid);

		// console.log(this.state.stocks);
        // if(this.state.loading == 1){
        //     return <Text>{'loading now!'}</Text>
        // }
        // else{
            return(
                <View style={{backgroundColor:'#031b2f'}}>
                    <View style={{backgroundColor:'rgba(18,45,71,0.8)',height:40,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                        <Picker style={{color:'#bac7d4',width:150}}
                            selectedValue={this.state.selectedPool}
                            onValueChange={(id) => {
                                this.setState({
                                    stocks: this.state.stocks.cloneWithRows(sp[id].stockinfolist),
                                    selectedPool:id,
                                    selectedValue:id,
                                });
                                this.state.selectedPool = id;
                                // console.log('picker change');
                                // console.log((id));
                                // console.log((this.state.selectedPool));
                            }}>
                            {this.getPickerItems(sp)}
                        </Picker>
                    </View>
                    
                    <TableRow content={['股票','昨收','今开']} />
                    <ListView
                        dataSource={this.state.stocks}
                        renderRow={this.favorRow} />
                </View>
            )
        // }
		

	},
});

AppRegistry.registerComponent('StockList', () => StockList);
module.exports = StockList;