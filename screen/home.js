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
    View,
    FlatList,
    Text
} from 'react-native';
import Color from "../core/Color"

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data:[
                {title:"a"},
                {title:"b"},
                {title:"c"}, {title:"d"},
                {title:"e"},

            ]
        }
    }


    renderView(item){
        return <View>
            <Text>{item.title}</Text>
        </View>
    }

    render (){
        return  (
            <SafeAreaView>
<Text style={{fontSize:24,fontWeight:"bold",color:Color.header.color1}}> Top Heading</Text>

           <FlatList
           data={this.state.data}
renderItem={({item})=>this.renderView(item)}

           />

            </SafeAreaView>
        );
    }

}

export default Home;
