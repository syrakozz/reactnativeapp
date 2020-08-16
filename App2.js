// In App.js in a new project

import React, { useState, useEffect } from 'react';
import { Button, View, Text,Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from "./screen/DetailsScreen";
import Home from "./screen/home";



function HomeScreen({ navigation }) {

    const [count,setCount] = useState(0)

    useEffect(()=>{


        if( Platform.OS === 'ios' ){
            alert("your are in ios")
        }else{
            alert("your are in android ")
        }

        //setCount(5);
    },[]);


    return (
        <View style={{ flex: 1, }}>


            <Text style={{margin:Platform.OS === 'ios'?10:15}}>sasaassssthe total count is {count}</Text>






            <Button title={"press me"} onPress={
                ()=> {
                    setCount(count+1)
                }
            }
             />


            {Platform.OS === 'ios' ?<Text>ios</Text>:<Text>android</Text>}



        </View>
    );
}


const Stack = createStackNavigator();

function App2() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App2;
