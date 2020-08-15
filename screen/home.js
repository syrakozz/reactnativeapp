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
    FlatList,
    StyleSheet,
    Text
} from 'react-native';
import Color from "../core/Color"

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data:[],
            isloading:true,
            isFetching: false,
        }

        console.log("this screen constructor is just started")
    }

    onRefresh() {
        this.setState({isFetching: true,},() => {this.prepareData();});
    }

    componentDidMount() {
        console.log("this screen  is just started")

        this.prepareData()
    }

    prepareData(){
        axios.get("http://localhost:3066/api/admin/technician/list").then((res)=>{


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


        return <View style={{
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
    }

    render (){


        if(this.state.isloading){
            return <SafeAreaView >
                <Text style={{textAlign:"center",fontWeight:"bold",fontSize:24,color: "red"}}>Loading...</Text>
            </SafeAreaView>;
        }


        return  ( <SafeAreaView style={{flex:1}}>
<Text style={{fontSize:24,fontWeight:"bold",color:Color.header.color1,margin:15}}> Top Heading</Text>


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
