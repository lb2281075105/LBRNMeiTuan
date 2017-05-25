/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Platform,
    ScrollView,
    Image,
    TouchableOpacity,
    AlertIOS,
    Navigator,
    ListView
} from 'react-native';
var width = require('Dimensions').get('window').width;
var widthView;
var LBRNHomeHotView = React.createClass({

        getDefaultProps(){
            return{
                data:[],
                popToHot:null
            }
        },
        getInitialState(){
            let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            if(this.props.data.length == 2){
                widthView = width/2.0;
            }else {
                widthView = width/4;
            }
            return{
                dataSource : ds.cloneWithRows(this.props.data)
            }
        },
        render(){
            return (
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    contentContainerStyle={styles.contentStyle}
                />
            );
        },
        renderRow(rowData){
            return(
                <View>
                    <TouchableOpacity activeOpacity={0.5} onPress={()=>this.pressMethod(rowData.target)} style={[styles.touchableStyle,{borderRightWidth: 0.5,borderTopWidth: 0.5,borderRightColor:'#bbb',borderTopColor:'#bbb',width:widthView}]}>
                      <Text style={{fontSize:14,color:'black',marginBottom:5}}>{rowData.title}</Text>
                      <Text style={{fontSize:10,color:'orange',marginBottom:5}}>{rowData.subTitle}</Text>
                      <Image source={{uri:rowData.hotImage}} style={{width:50,height:50,borderRadius:25}}/>
                    </TouchableOpacity>
                </View>
            )
        },
        pressMethod(target){

            if (target.length == 0)return;
            this.props.popToHot(target.replace('imeituan://www.meituan.com/web?url=',''));
        }
    }
)


const styles = StyleSheet.create({
    contentStyle:{
        flexDirection:'row'
    },
    touchableStyle:{
        justifyContent:'center',
        alignItems:'center',
        paddingTop:10,
        paddingBottom:10
    }
});

module.exports = LBRNHomeHotView;
