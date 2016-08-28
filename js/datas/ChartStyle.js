import Dimensions from 'Dimensions';
var {windowWidth,windowHeight} = Dimensions.get('window');

const ChartStyle = {

    'chartWrapper':{
        //height:200
    },

    //柱状图
    'volume':{
        width: windowWidth-45,
        height: 100,
        margin: {
            top: 20,
            left: 25,
            bottom: 20,
            right: 20
        },
        color: '#2980B9',
        gutter: 20,
        animate: {
            type: 'oneByOne',
            duration: 200,
            fillTransition: 3
        },
        axisX: {
            showAxis: true,
            showLines: true,
            showLabels: true,
            showTicks: true,
            zeroAxis: false,
            orient: 'bottom',
            label: {
                fontFamily: 'Arial',
                fontSize: 8,
                fontWeight: true,
                fill: '#34495E'
            }
        },
        axisY: {
            showAxis: false,
            showLines: true,
            showLabels: true,
            showTicks: true,
            zeroAxis: false,
            orient: 'left',
            label: {
                fontFamily: 'Arial',
                fontSize: 8,
                fontWeight: true,
                fill: '#34495E'
            }
        }
    },

    //饼图
    'pie':{
        margin: {
            top: 20,
            left: 20,
            right: 20,
            bottom: 20
        },
        width: 600,
        height: 600,
        color: '#2980B9',
        r: 100,
        R: 200,
        legendPosition: 'topLeft',
        animate: {
            type: 'oneByOne',
            duration: 200,
            fillTransition: 3
        },
        label: {
            fontFamily: 'Arial',
            fontSize: 14,
            fontWeight: true,
            color: '#ECF0F1'
        }
    },

    
    specialForecast:{
         width: 150,
        height: 100,
        color: '#2980B9',
        margin: {
            top: 10,
            left: 35,
            bottom: 30,
            right: 10
        },
        animate: {
            type: 'delayed',
            duration: 200
        },
        axisX: {
            showAxis: false,
            showLines: true,
            showLabels: true,
            showTicks: true,
            zeroAxis: false,
            orient: 'bottom',
            tickValues: [],
            label: {
                fontFamily: 'Arial',
                fontSize: 8,
                fontWeight: true,
                fill: '#34495E'
            }
        },
        axisY: {
            showAxis: false,
            showLines: true,
            showLabels: true,
            showTicks: true,
            zeroAxis: false,
            orient: 'left',
            tickValues: [],
            label: {
                fontFamily: 'Arial',
                fontSize: 8,
                fontWeight: true,
                fill: '#34495E'
            }
        }
    },

    //折线图
    stockLine:{
        width: windowWidth-45,
        height: 150,
        color: '#2980B9',
        margin: {
            top: 10,
            left: 35,
            bottom: 30,
            right: 10
        },
        animate: {
            type: 'delayed',
            duration: 200
        },
        axisX: {
            showAxis: false,
            showLines: true,
            showLabels: true,
            showTicks: true,
            zeroAxis: false,
            orient: 'bottom',
            tickValues: [],
            label: {
                fontFamily: 'Arial',
                fontSize: 8,
                fontWeight: true,
                fill: '#34495E'
            }
        },
        axisY: {
            showAxis: false,
            showLines: true,
            showLabels: true,
            showTicks: true,
            zeroAxis: false,
            orient: 'left',
            tickValues: [],
            label: {
                fontFamily: 'Arial',
                fontSize: 8,
                fontWeight: true,
                fill: '#34495E'
            }
        }
    },

    //平滑曲线图
    smoothLine:{
        width: 280,
        height: 280,
        color: '#2980B9',
        margin: {
            top: 20,
            left: 45,
            bottom: 25,
            right: 20
        },
        animate: {
            type: 'delayed',
            duration: 200
        },
        axisX: {
            showAxis: true,
            showLines: true,
            showLabels: true,
            showTicks: true,
            zeroAxis: false,
            orient: 'bottom',
            label: {
                fontFamily: 'Arial',
                fontSize: 14,
                fontWeight: true,
                fill: '#34495E'
            }
        },
        axisY: {
            showAxis: true,
            showLines: true,
            showLabels: true,
            showTicks: true,
            zeroAxis: false,
            orient: 'left',
            label: {
                fontFamily: 'Arial',
                fontSize: 14,
                fontWeight: true,
                fill: '#34495E'
            }
        }
    },

    //雷达图
    radar:{
        width: 320,
        height: 280,
        margin: {
            top: 20,
            left: 20,
            right: 30,
            bottom: 20
        },
        r: 150,
        max: 100,
        fill: "#2980B9",
        stroke: "#2980B9",
        animate: {
            type: 'oneByOne',
            duration: 200
        },
        label: {
            fontFamily: 'Arial',
            fontSize: 14,
            fontWeight: true,
            fill: '#bac7d4',
            fontStyle:{
                color:'white'
            }
        }
    },

    //树状图
    tree:{
        margin: {
            top: 20,
            left: 50,
            right: 80,
            bottom: 20
        },
        width: 200,
        height: 200,
        fill: "#2980B9",
        stroke: "#3E90F0",
        r: 2,
        animate: {
            type: 'oneByOne',
            duration: 200,
            fillTransition: 3
        },
        label: {
            fontFamily: 'Arial',
            fontSize: 8,
            fontWeight: true,
            fill: '#34495E'
        }

    }
}

module.exports = ChartStyle;