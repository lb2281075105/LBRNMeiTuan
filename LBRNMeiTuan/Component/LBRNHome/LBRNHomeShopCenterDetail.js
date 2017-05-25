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
    Navigator,
    Platform,
    Image,
    TouchableOpacity,
    AlertIOS,
    WebView
} from 'react-native';

var width = require('Dimensions').get('window').width;

var LBRNHomeShopCenterDetail = React.createClass({

    getInitialState(){
      return{
          detailUrl: this.props.url + '?uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_term=6.6&utm_source=AppStore&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&version_name=6.6&userid=160495643&utm_medium=iphone&lat=23.134709&utm_campaign=AgroupBgroupD100Ghomepage_shoppingmall_detailH0&token=b81UqRVf6pTL4UPLLBU7onkvyQoAAAAAAQIAACQVmmlv_Qf_xR-hBJVMtIlq7nYgStcvRiK_CHFmZ5Gf70DR47KP2VSP1Fu5Fc1ndA&lng=113.373890&f=iphone&ci=20&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594'
      }
    },
    render(){
        return(
          <View style={{flex:1}}>
            <View  style={styles.container}>
                <Text style={{color:'white',fontSize:18,marginTop: 25}}>{
                    '购物中心详情'}</Text>
                <TouchableOpacity style={{position:'absolute',left:15,marginTop:17}} onPress={()=>this.navBackMethod()}>
                    <Image source={{uri:'navigationbar_arrow_up.png'}} style={{width:13,height:18,marginTop:10}}></Image>
                </TouchableOpacity>
            </View>
            <WebView
                  automaticallyAdjustContentInsets={true}
                  source={{uri: this.state.detailUrl}}
                  javaScriptEnabled={true}
                  domStorageEnabled={true}
                  decelerationRate="normal"
                  startInLoadingState={true}
            />
           </View>
        )
    },
    navBackMethod(){
        this.props.navigator.pop()
    }
})
const styles = StyleSheet.create({

    container:{
        width:width,
        height:Platform.OS === 'ios' ? 64 : 44,
        backgroundColor:'#FB6320',
        flexDirection:'row',
        justifyContent:'center'

    }
})
module.exports=LBRNHomeShopCenterDetail;

