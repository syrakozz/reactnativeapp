
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Button,
    Text
} from 'react-native';
import { connect } from 'react-redux';
import { changeCount } from './redux/actions/counts';
import {SafeAreaView} from "react-native-safe-area-context";

import App4 from "./App4"

class App3 extends Component {


    incrementCount(){
        //alert("33")
        let {count} = this.props;
        count++;

        this.props.changeCount(count)
    }
    render() {
        return (
            <SafeAreaView >
                <Text>{this.props.count}</Text>

                <Button
                    title="increment"
                    onPress={() => this.incrementCount()}
                />

                <App4/>
            </SafeAreaView>
        );
    }
};


const mapStateToProps = state => ({
    count: state.countManager.count,
});


const mapDispatchToProps = dispatch => ({
    changeCount: (payload) => dispatch(changeCount(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(App3)
