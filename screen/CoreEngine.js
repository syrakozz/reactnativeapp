/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import {
    SafeAreaView,
    Text
} from 'react-native';
class CoreEngine extends Component {

    renderDate (value){
        return value+"AM";
    }

    renderLoading (){
        return <SafeAreaView >
            <Text style={{textAlign:"center",fontWeight:"bold",fontSize:24,color: "red"}}>Loading...</Text>
        </SafeAreaView>;
    }

}

export default CoreEngine;


