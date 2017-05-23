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
    Navigator
} from 'react-native';
var width = require('Dimensions').get('window').width;
var LBRNMoreCellComponent = require('./LBRNMoreCellComponent');
var LBRNCellComponent = require('./LBRNCellComponent');
var LBRNMore = React.createClass({

        render(){
            return (
                <View style={styles.container}>
                    {/* 导航栏 */}
                    {this.setUpNav()}
                    {/* 添加ScrollView */}
                    <ScrollView >
                        <View>
                             <LBRNMoreCellComponent
                                title='消息提醒'
                                isShowText={true}
                                wenbenString="2条"
                                 />
                             <LBRNMoreCellComponent
                                title='友情好友'
                                isOrSwitch={true}
                                 />
                             <LBRNMoreCellComponent
                                title='清空缓存'
                                isShowText={true}
                                wenbenString="1.23M"
                                />
                        </View>
                        <View style={styles.rowStyle}>
                             <LBRNMoreCellComponent
                                title='意见反馈'
                                isShowImage={true}
                                imageString='icon_shop_local.png'/>
                             <LBRNMoreCellComponent
                                title='问题调查'
                                isShowImage={true}
                                imageString='icon_hot.png'/>
                             <LBRNMoreCellComponent
                                title='支持帮助'/>
                             <LBRNMoreCellComponent
                                title='网络诊断'
                                isOrSwitch={true}/>
                             <LBRNMoreCellComponent
                                title='关于美团'
                                isOrSwitch={true}/>
                             <LBRNMoreCellComponent
                                title='我要应聘'/>
                        </View>
                        <View style={styles.rowStyle}>
                             <LBRNMoreCellComponent
                                title='精品应用'/>
                        </View>

                    </ScrollView>

                </View>
            );
        },
        setUpNav(){
            return(
                    <View style={styles.navViewStyle}>
                        <Text style={{color:'white',fontSize:18,marginTop: 25}}>更多</Text>
                        <TouchableOpacity style={{position:'absolute',right:10,marginTop:22}} onPress={()=>this.setButtonMethod()}>
                            <Image source={{uri:'icon_navigationItem_set_white'}} style={styles.settingStyle} />
                        </TouchableOpacity>
                    </View>
            )
         },
        setButtonMethod(){
            //AlertIOS.alert('设置');
            //MARK-----传值
            this.props.navigator.push({
                component: LBRNCellComponent,
                title: 'setting',
                passProps:{
                    name: '设置',
                    meinv:'阿虎省份',
                }
            });
        }
    }
)


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#DCDCDB',
    },
    navViewStyle:{
        width:width,
        height:Platform.OS === 'ios' ? 64 : 44,
        backgroundColor:'#FB6320',
        flexDirection:'row',
        justifyContent:'center'
    },
    settingStyle:{
        width:30,
        height:30
    },
    rowStyle:{
        marginTop:20
    }
});

module.exports = LBRNMore;
