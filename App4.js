
import React, { Component } from 'react';
import {
    Text,
    SafeAreaView, Button
} from 'react-native';
import { connect } from 'react-redux';
import {changeCount} from "./redux/actions/counts";

class App4 extends Component {



    incrementCount(){
        //alert("33")
        let {count} = this.props;
        count--;

        this.props.changeCount(count)
    }
    render() {
        return (
            <SafeAreaView >
                <Text>the count is : {this.props.count}</Text>

                <Button
                    title="decremnt"
                    onPress={() => this.incrementCount()}
                />

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

export default connect(mapStateToProps,mapDispatchToProps)(App4)
