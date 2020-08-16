// In App.js in a new project

import React,{useEffect,useState} from 'react';
import { Button, View, Text } from 'react-native';
function DetailsScreen({details,subtitle,number=1}) {
    const [result,setResult] = useState("")
    useEffect(()=>{
        console.log("DetailsScreen only 1");
    },[]);

    useEffect(()=>{
        console.log("checking number");

        if(number>5){
            setResult("result is OK")
        }
    },[number]);

    return (
        <View style={{ flex: 1, }}>
            <Text>DetailsScreen {details}  {subtitle}  </Text>
            <Text>number is {number}   </Text>
            <Text> {result}   </Text>
        </View>
    );
}

export default DetailsScreen;
