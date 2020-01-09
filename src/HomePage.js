import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

export default class HomeScreen extends Component {
    static navigationOptions  = {
        title: 'home',
        // titleStyle: {color: '#black'},
        // headerStyle:{backgroundColor:'blue'},

       
    };
    state = {
        text: 0
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Text style={{ fontSize: 30, color: "green" }}>{this.state.text}</Text>
                <Button
                    title="Go to Details"
                    onPress={
                        () => {

                        navigate("Details");
                        this.add()
                        
                    }
                }
                />
            </View>
        );
    }

    add(){
        this.state.text = this.state.text+1
        this.setState({text:this.state.text})

    }
}