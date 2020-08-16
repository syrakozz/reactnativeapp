/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import axios from "axios"
import {
    SafeAreaView,
    View,
    Image,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    Text
} from 'react-native';
import Color from "../core/Color"
import {exp} from "react-native-reanimated";
import Config from "../core/Config";
import CoreEngine from "./CoreEngine";


class Home extends CoreEngine {

    constructor(props) {
        super(props);

        this.state = {
            data:[],
            finalvalue : 0,
            isloading:true,
            isFetching: false,
        }

       var  a  =1 ;
        var b = 3

        const text = a.toString()+b.toString()

        console.log("constructor")
    }


    onRefresh() {
        this.setState({isFetching: true,},() => {this.prepareData();});
    }

    componentDidMount() {
        console.log("componentDidMount")
        this.prepareData()
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    prepareData(){
        axios.get(Config.url).then((res)=>{


            const result = res.data.data
            debugger
            this.setState({
                data:result,
                isloading:false,
                isFetching:false
            })


            console.log("response is here")
        }).catch(()=>{
            console.log("xxx")
        })

    }

    renderView(item){


        return <TouchableOpacity  onPress={()=>{
            this.props.goto()
        }}>
            <View style={{
                // backgroundColor:"green",
                margin:19,
                flexDirection:"row"
            }}>
                <View style={{width:60,borderRadius:30,height:60}}>
                    <Image source={{uri:item.full_picture}} style={{width:60,height:60}} />
                </View>
                <View style={{marginLeft:10,marginRight:10}}>
                    <Text style={styles.minitext}>{item.name}</Text>
                    <Text style={{fontWeight:"bold", padding:5,paddingRight:50}} >{item.email}</Text>
                    <Text style={styles.minitext}>{item.location}</Text>
                </View>

            </View>
        </TouchableOpacity>
    }

    render (){
      if(this.state.isloading){
            return this.renderLoading();
        }


        return  ( <SafeAreaView style={{flex:1}}>
<Text style={{fontSize:24,fontWeight:"bold",color:Color.header.color1,margin:15}}> Top Heading {this.renderDate("sss")}</Text>


           <FlatList

           data={this.state.data}
renderItem={({item})=>this.renderView(item)}
           onRefresh={() => this.onRefresh()}
           refreshing={this.state.isFetching}

           />

            </SafeAreaView>
        );
    }

}

export default Home;





const styles = StyleSheet.create({

    minitext:{
        color:"grey",
        padding:5
    }



})
