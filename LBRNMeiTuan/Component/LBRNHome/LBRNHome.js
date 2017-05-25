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
    Image,
    TextInput,
    TouchableOpacity,
    AlertIOS,
    ScrollView,
    Navigator
} from 'react-native';

var width = require('Dimensions').get('window').width;
//导入文件(.js后缀名可加可不加)
import LBRNHomeTopView from './LBRNHomeTopView.js';
import LBRNHmeCenterView from './LBRNHmeCenterView.js';
import LBRNHmeCenter1View from './LBRNHmeCenter1View.js';
import LBRNHomeShopCenterView from './LBRNHomeShopCenterView.js';
import LBRNHomeLike from './LBRNHomeLike.js';
import LBRNHomeShopCenterDetail from './LBRNHomeShopCenterDetail.js';

//var LBRNHomeTopView = require('./LBRNHomeTopView');
//获取数据(后缀名可加可不加)
var homeCenterMenuData = require('../../localData/HomeCenterMenu');
var homeCenter1MenuData = require('../../localData/HomeCenter1Menu');
var homeShopCenter = require('../../localData/HomeShopCenter.json');


var LBRNHome = React.createClass({
        render(){
            return (
                <View style={styles.container}>
                    {/*导航栏设置*/}
                    {this.renderHomeNavbar()}
                    {/*上部滑动组件*/}
                    {this.renderTopView()}
                </View>
            );
        },
        renderHomeNavbar(){
            return(
                <View style={styles.homeStyle}>
                    <TouchableOpacity onPress={()=>{AlertIOS.alert('济南')}}>
                        <Text style={{color:'white',fontSize:16,marginLeft:10,fontWeight:'bold'}}>济南</Text>
                    </TouchableOpacity>

                    <TextInput style={styles.textInputStyle}
                               placeholder={'输入商家，品类，商圈'}
                               placeholderTextColor={'#bbb'}
                               underlineColorAndroid='white'
                               returnKeyType='search'
                    />
                    <Image source={{uri:'icon_homepage_message'}} style={[styles.toolBarIcon,{marginTop:3}]}/>
                    <Image source={{uri:'icon_homepage_scan'}} style={[styles.toolBarIcon,{marginRight:10,marginTop:5}]}/>
                </View>
            )
        },
        renderTopView(){
            return(
                 // 底部如果是ScrollView,那么根节点就是ScrollView,不要把根节点设置为View
                 <ScrollView>
                    <LBRNHomeTopView
                    />
                     {/*天天特价、名店请购、一元吃*/}
                     {this.renderCenterViewMethod()}
                     {/*一元肯德基、领21元红包、新用户专享、一元抢吧*/}
                     {this.renderCenterView1Method()}
                     {/*购物中心*/}
                     {this.renderShopCenterMethod()}
                     {/*猜你喜欢*/}
                     {this.renderHomeLike()}
                 </ScrollView>
            )
        },
        renderCenterViewMethod(){
             return(
                 <View style={styles.centerViewStyle}>
                     <View style={{width:width/2.0,alignItems:'center', borderRightWidth:0.5,
                         borderRightColor:'#bbb'}}>
                         <Image source={{uri:homeCenterMenuData.dataLeft[0].img1}} style={{width:96,height:25,marginTop:10}}/>
                         <Image source={{uri:homeCenterMenuData.dataLeft[0].img2}} style={{width:96,height:25,marginBottom:10,marginTop:10}}/>
                         <Text style={{color:'#bbb',marginBottom:10}}>{homeCenterMenuData.dataLeft[0].title}</Text>
                         <View style={{flexDirection:'row'}}>
                             <Text style={{color:'green',marginRight:5,marginBottom:10}}>{homeCenterMenuData.dataLeft[0].price}</Text>
                             <Text style={{backgroundColor:'yellow',marginBottom:10}}>{homeCenterMenuData.dataLeft[0].sale}</Text>
                         </View>
                     </View>
                     <View style={{width:width/2.0,alignItems:'center'}}>
                         <LBRNHmeCenterView
                             title1={homeCenterMenuData.dataRight[0].title}
                             title2={homeCenterMenuData.dataRight[0].subTitle}
                             iconString={homeCenterMenuData.dataRight[0].rightImage}
                             colorSring={homeCenterMenuData.dataRight[0].titleColor}
                         />
                         <View style={{height:0.5,backgroundColor:'#bbb',width:width/2.0}}></View>
                         <LBRNHmeCenterView
                             title1={homeCenterMenuData.dataRight[1].title}
                             title2={homeCenterMenuData.dataRight[1].subTitle}
                             iconString={homeCenterMenuData.dataRight[1].rightImage}
                             colorSring={homeCenterMenuData.dataRight[1].titleColor}
                         />
                     </View>

                 </View>
             )
        },
        renderCenterView1Method(){
            return(
                <View style={{marginTop:10}}>
                  <LBRNHmeCenter1View
                      dataArray={homeCenter1MenuData.data}
                  />
                </View>
            )
        },
        renderShopCenterMethod(){
             return(
                 <View style={{backgroundColor:'white',marginTop:10}}>
                     <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
                         <View style={{flexDirection:'row',alignItems:'center'}}>
                             <Image source={{uri:'gw'}} style={{width:40,height:40}}/>
                             <Text style={{marginLeft:5,color:'#bbb'}}>购物中心</Text>
                         </View>
                         <View style={{flexDirection:'row',alignItems:'center',marginRight:5}}>
                             <Text style={{marginRight:5,color:'#bbb'}}>{homeShopCenter.tips}</Text>
                             <Image source={{uri:'icon_cell_rightarrow'}} style={{width:15,height:15}}/>
                         </View>
                     </View>
                     <View>
                         <ScrollView horizontal={true}
                                     showsHorizontalScrollIndicator={false}
                         >
                           <LBRNHomeShopCenterView
                               dataArray={homeShopCenter.data}
                               popToHome={(url)=>this.popToHome(url)}///回调函数
                           />
                         </ScrollView>
                     </View>
                 </View>
             )
        },
        renderHomeLike(){
            return(
                <ScrollView>
                    <LBRNHomeLike

                    />
                </ScrollView>
            )
        },
        popToHome(url){
            console.log(url);
            this.props.navigator.push({
                component:LBRNHomeShopCenterDetail,
                passProps:{'url':url},
                title:'购物中心详情'
            })
        }
    }
)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd',
    },
    homeStyle:{
        width:width,
        height:Platform.OS === 'ios' ? 64 : 44,
        backgroundColor:'#FB6320',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    textInputStyle:{
        width:width*0.6,
        height:35,
        backgroundColor:'white',
        borderRadius:18,
        paddingLeft:14,
        marginTop:18
    },
    toolBarIcon:{
        width:30,
        height:30
    },
    centerViewStyle:{
        marginTop:10,
        backgroundColor:'white',
        flexDirection:'row'
    }
});

module.exports = LBRNHome;
