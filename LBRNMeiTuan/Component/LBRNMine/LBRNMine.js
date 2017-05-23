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
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
var width = require('Dimensions').get('window').width;
var LBRNMineCell = require('./LBRNMineCell');
var LBRNMine = React.createClass({
        render(){
            return (
                <View style={styles.container}>
                    <View style={styles.backgroundStyle}>
                    </View>
                    <View style={{position:'absolute',marginTop:-300}}>
                        <ScrollView>
                            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:30}}>
                                <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'#FB6320'}}>
                                    <Image source={{uri:'wm'}} style={{width: 80,height:80,borderRadius:40}}/>
                                    <Text style={{color:'red',fontSize:18}}>LBRNMeiTuan</Text>
                                    <Image source={{uri:'avatar_vip'}} style={{width: 20,height:20,marginLeft:5}}/>
                                </View>
                                <TouchableOpacity>
                                    <Image source={{uri:'icon_cell_rightarrow'}} style={{width: 20,height:20,marginRight:10}}/>
                                </TouchableOpacity>
                            </View>
                            {/*美团劵、评价、收藏*/}
                            <View style={{height:60,width:width,backgroundColor:'#FC8135',flexDirection:'row'}}>
                                {this.renderViewMethod('500','美团劵')}
                                <View style={{backgroundColor:'#ddd',height:56,marginTop:2,width:0.5}}></View>
                                {this.renderViewMethod('500','评价')}
                                <View style={{backgroundColor:'#ddd',height:56,marginTop:2,width:0.5}}></View>
                                {this.renderViewMethod('500','收藏')}
                            </View>
                            {/*待付款、待使用、待评价、退货/售后*/}
                            <View style={{height:80,width:width,backgroundColor:'white',flexDirection:'row'}}>
                                {this.renderImageMethod('order1','待付款')}
                                {this.renderImageMethod('order2','待使用')}
                                {this.renderImageMethod('order3','待评价')}
                                {this.renderImageMethod('order4','退货/售后')}
                            </View>
                            <View style={{height:20,width:width,backgroundColor: '#DCDCDB'}}>
                            </View>
                            <View>
                                <LBRNMineCell
                                    title='我的钱包'
                                    iconLeftString='pay'
                                    arrowString='icon_cell_rightarrow'
                                    // rightImageString=''
                                    rightText='帐户余额：&yen;8452'
                                />
                                <LBRNMineCell
                                    title='抵用券'
                                    iconLeftString='card'
                                    arrowString='icon_cell_rightarrow'
                                    rightImageString='icon_hot'
                                    // rightText=''
                                />
                            </View>
                            <View style={{height:20,width:width,backgroundColor: '#DCDCDB'}}>
                            </View>
                            <View >
                                <LBRNMineCell
                                    title='积分商城'
                                    iconLeftString='card'
                                    arrowString='icon_cell_rightarrow'
                                    rightImageString='icon_hot'
                                    // rightText=''
                                />
                            </View>
                            <View style={{height:20,width:width,backgroundColor: '#DCDCDB'}}>
                            </View>
                            <View>
                                <LBRNMineCell
                                    title='今日推荐'
                                    iconLeftString='like'
                                    arrowString='icon_cell_rightarrow'
                                    rightImageString='icon_hot'
                                    // rightText=''
                                />
                            </View>
                            <View style={{height:20,width:width,backgroundColor: '#DCDCDB'}}>
                            </View>
                            <View>
                                <LBRNMineCell
                                    title='我要合作'
                                    iconLeftString='new_friend'
                                    arrowString='icon_cell_rightarrow'
                                    // rightImageString='icon_hot'
                                    rightText='轻松开店,招财进宝'
                                />
                            </View>
                            <View style={{height:100,width:width,backgroundColor: '#DCDCDB'}}>
                            </View>
                        </ScrollView>
                    </View>

                </View>
            );
        },
        renderViewMethod(count,name){
            return(
                <View style={{justifyContent:'center',width:width/3.0,alignItems:'center'}}>
                    <Text style={{color:'white'}}>{count}</Text>
                    <Text style={{color:'white',marginTop:7}}>{name}</Text>
                </View>
                )

        },
        renderImageMethod(imageString,name){
            return(
                <View style={{justifyContent:'center',width:width/4.0,alignItems:'center'}}>
                    <Image source={{uri:imageString}} style={{width:30,height:20}}/>
                    <Text style={{color:'#bbb',marginTop:7}}>{name}</Text>
                </View>
                )

        }
    }
)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DCDCDB',
    },
    backgroundStyle:{
        width:width,
        height:300,
        backgroundColor:'#FB6320',
        position:'absolute',
        top:0
    }
});

module.exports = LBRNMine;
