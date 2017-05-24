/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    AlertIOS
} from 'react-native';
import LBRNHomeTopListView from './LBRNHomeTopListView'
var width = require('Dimensions').get('window').width;
// 获取数据
let homeTopMenuData = require('../../localData/HomeTopMenu').data;
var LBRNHomeTopView = React.createClass({
    getInitialState(){
        return{
            currentPage:0
        }
    },
    render(){
        return(
            <View style={styles.container}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  alwaysBounceVertical={false}
                  bounces={false}
                  pagingEnabled={true}
                  // 当一帧滚动完毕的时候调用
                  onMomentumScrollEnd={this.onScrollAnimationEnd}
                >
                    {this.renderScrollViewMethod()}
                </ScrollView>
                {/*设置指示器*/}
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    {this.indicatorMethod()}
                </View>
            </View>
        )
    },
    // 当滚动动画结束之后调用此回调
    onScrollAnimationEnd(event){
        // Math.floor(x)获取不大于x的最大整数
        var page = Math.floor(event.nativeEvent.contentOffset.x/width);
        console.log(page);
        this.setState({
            currentPage:page
        })
    },
    renderScrollViewMethod(){
        var dataCount = homeTopMenuData;
        var array = [];
        for (var i=0;i<dataCount.length;i++){
            array.push(
                <LBRNHomeTopListView
                    dataArray={homeTopMenuData[i]}
                    key={i}
                />
            )
        }
        return array;
    },
    indicatorMethod(){
        var colorsArray = [], bullColor;
        //&bull; 圆点
        for(var i=0;i<2;i++){
            bullColor = i == this.state.currentPage ? 'orange' : '#bbb';
            colorsArray.push(
                <Text style={[{fontSize:22,paddingRight:3}, style={color:bullColor}]} key={i}>&bull;</Text>
            )
        }
        return colorsArray;
    }

})
const styles = StyleSheet.create({
    container:{
        width:width,
        backgroundColor:'white'
    },
    colorStyle:{
        width:width,
    }
})
module.exports = LBRNHomeTopView;

