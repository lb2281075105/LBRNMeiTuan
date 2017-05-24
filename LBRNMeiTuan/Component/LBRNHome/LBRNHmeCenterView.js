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
    Image
} from 'react-native';

var LBRNHmeCenterView = React.createClass({
    getDefaultProps(){
      return{
          title1:'',
          title2:'',
          iconString:'',
          colorSring:''
      }
    },
    render(){
        return(
            <View style={styles.container}>
                <View >
                    <Text style={{color:this.props.colorSring,fontSize:18,fontWeight:'bold'}}>{this.props.title1}</Text>
                    <Text style={{marginTop:5,color:'#bbb'}}>{this.props.title2}</Text>
                </View>
                <Image source={{uri:this.props.iconString,width:80,height:40,marginLeft:30,fontSize:13}}/>
            </View>
        )
    }
})
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        height:65,
        alignItems:'center'

    }
})
module.exports=LBRNHmeCenterView;

