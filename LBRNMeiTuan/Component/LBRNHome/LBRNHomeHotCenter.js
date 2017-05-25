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

var LBRNHomeHotCenter = React.createClass({

    getInitialState(){
        return{
            detailUrl:this.props.url
        }
    },
    render(){
        return(
            <View style={{flex:1}}>
                <View  style={styles.container}>
                    <Text style={{color:'white',fontSize:18,marginTop: 25}}>{
                        '热门中心'}</Text>
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
module.exports=LBRNHomeHotCenter;

