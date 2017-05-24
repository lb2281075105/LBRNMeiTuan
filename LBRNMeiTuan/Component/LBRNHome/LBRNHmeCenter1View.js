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
    Image,
    ListView
} from 'react-native';

///封装中间的小组件
var width = require('Dimensions').get('window').width;
var LBRNHmeCenter1View = React.createClass({
    getDefaultProps(){
        return{
            dataArray:[]
        }
    },
    getInitialState(){
        let dataSource = new ListView.DataSource({rowHasChanged:(row1,row2) => row1 !== row2});
        return{
            dataSource:dataSource.cloneWithRows(this.props.dataArray)
        }
    },
    render(){
        return(
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderCenterRow}
                contentContainerStyle={styles.contentStyle}
            />

        )
    },
    //cell
    renderCenterRow(rowData){
        return(
            <View style={styles.container}>
                <View >
                  <Text style={{color:rowData.typeface_color,fontSize:18,fontWeight:'bold'}}>{rowData.maintitle}</Text>
                  <Text style={{marginTop:5,color:'#bbb'}}>{rowData.deputytitle}</Text>
                </View>
               <Image source={{uri:'yyms',width:80,height:40,marginLeft:30,fontSize:13}}/>
            </View>
        )
    }
})
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        height:65,
        alignItems:'center',
        backgroundColor:'white',
        width:width/2.0,
        justifyContent:'center',
        borderRightWidth:0.5,
        borderColor:'#bbb',
        borderTopWidth:0.5
    },
    contentStyle:{
        flexDirection:'row',
        flexWrap:'wrap',
        width:width
    }
})
module.exports=LBRNHmeCenter1View;

