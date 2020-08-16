// In App.js in a new project

import React, { useState, useEffect } from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from "./screen/DetailsScreen";



function HomeScreen({ navigation }) {

    const [count,setCount] = useState(0)

    useEffect(()=>{

        console.log("HomeScreen only 1");
        //setCount(5);
    },[]);


    return (
        <View style={{ flex: 1, }}>


            <Text>the total count is {count}</Text>



            <Button title={"press me"} onPress={
                ()=> {
                    setCount(count+1)
                }
            }
             />


             <DetailsScreen details={"testing 123"} number={count} subtitle={"aaaa"}  />
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
