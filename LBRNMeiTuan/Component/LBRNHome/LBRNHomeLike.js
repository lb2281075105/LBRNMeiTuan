
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
    ListView,
    Image
} from 'react-native';
var width = require('Dimensions').get('window').width;
var homeBottomData = require('../../localData/HomeBottomData.json');
let imageWH=width/5.0;
var LBRNHomeLike = React.createClass({
    getDefaultProps(){
        return{
            api_url:'http://api.meituan.com/group/v2/recommend/homepage/city/20?userId=160495643&userid=160495643&__vhost=api.mobile.meituan.com&position=23.134643%2C113.373951&movieBundleVersion=100&utm_term=6.6&limit=40&wifi-mac=64%3A09%3A80%3A10%3A15%3A27&ci=20&__skcy=X6Jxu5SCaijU80yX5ioQuvCDKj4%3D&__skua=5657981d60b5e2d83e9c64b453063ada&__skts=1459731016.350255&wifi-name=Xiaomi_1526&client=iphone&uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&__skno=FEB757F5-6120-49EC-85B0-D1444A2C2E7B&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_source=AppStore&utm_medium=iphone&version_name=6.6&wifi-cur=0&wifi-strength=&offset=0&utm_campaign=AgroupBgroupD100H0&__skck=3c0cf64e4b039997339ed8fec4cddf05&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594'
        }
    },
    getInitialState(){
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return{
            dataSource : ds
        }
    },
    render(){
        return(
            <View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => this.renderRow(rowData)}
                />

            </View>
        )
    },
    componentDidMount(){
        // 从网络加载数据
        this.dataMethod();
    },
    dataMethod(){
        fetch(this.props.api_url)
            .then((responder)=>responder.json())
            .then(responderData=>{
                this.setState({dataSource:this.state.dataSource.cloneWithRows(responderData.data)})
            })
            .catch((error) => {
                this.setState({dataSource:this.state.dataSource.cloneWithRows(homeBottomData.data)})
            });
    },
    renderRow(rowData,sectionId,rowID){
        return(
            <View style={styles.cellsStyle}>
                <Image source={{uri:this.dealWithUrl(rowData.imageUrl)}} style={styles.imagesStyle}/>{/*处理一下url*/}
                <View style={{marginLeft:10,width:220}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
                        <Text style={{fontSize:18}}>{rowData.title}</Text>
                        <Text style={{color:'#bbb',position:'absolute', right:10}}>{rowData.topRightInfo}</Text>
                    </View>
                    {/*你给Text一个宽度，会自动换行*/}
                    <Text style={{color:'#bbb',marginBottom:10}}>{rowData.subTitle}</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={{color:'red',fontSize:15,marginBottom:10}}>￥{rowData.subMessage}</Text>
                        <Text style={{color:'#aaa',fontSize:12}}>{rowData.bottomRightInfo}</Text>
                    </View>
                </View>
            </View>
        )
    },
    dealWithUrl(url){

        if (url.search('w.h') == -1){
            return url.replace('.webp','');
        }else {
            return url.replace('w.h','120.90')
        }
    }
})
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    // 要使ListView换行,要设置ListView宽度
    contentStyle:{
        flexDirection:'row',
        flexWrap:'wrap',
        width:width
    },
    cellsStyle:{
        borderTopWidth:0.5,
        borderTopColor:'#bbb',
        backgroundColor:'white',
        flexDirection:'row',
        padding:10
    },
    imagesStyle:{
        width:120,
        height:90,
        borderRadius:10
    }
})
module.exports = LBRNHomeLike;





