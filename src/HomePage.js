import React, { Component } from 'react';
import { View, Text, Button, TouchableHighlight, TouchableNativeFeedback, StyleSheet, Platform, ToastAndroid } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import utils from "./utils"
import ConstantItem from './ConstantItem'
export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Login',
        // titleStyle: {color: '#black'},
        // headerStyle:{backgroundColor:'blue'},


    };
 

    constructor(props) {
        super(props);
        // this.state = { textInputValue: '' };
        this.TextLogin = null;
        this.state = {
            text: "Login",
            userName:""
        }
       
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <Text ref={(e) => { this.TextLogin = e; }} style={{ fontSize: 40 }}>{this.state.text}</Text>
                {/* <Text style={{ fontSize: 30, color: "green" }}>{this.state.text}</Text> */}
                <TextInput ref={(e) => { this.Account = e; }} placeholder="Please input Account" style={{ marginTop: 10, backgroundColor: "#ffff", width: 200 }} onChangeText={(userName)=>this.setState({userName})} />

                <TextInput secureTextEntry={true} placeholder="Please input passward" style={{ marginTop: 5, backgroundColor: "#ffff", width: 200 }} />

                <View style={{ width: 200, marginTop: 10 }}>
                    <Button
                        title="Submit"
                        onPress={this.loginBtnClick}
                        color="#841584">
                    </Button>
                </View>

                {/* <TouchableHighlight onPress={this.login} underlayColor="black">
                    <View style={styles.button}>
                        <Text style={styles.buttonText} >submit</Text>
                    </View>
                </TouchableHighlight> */}
            </View>
        );
    }

    componentDidMount() {
        this.intervalFun = setInterval(() => {
            this.login()
        }, 1000);
        console.log(ConstantItem[1].Name)
        // this.delayFun = utils.DelayFun(()=>{
        //     console.log("delayer====")
        // },1000)
    }
    componentWillUnmount() {
        this.intervalFun && clearInterval(this.intervalFun)
        this.delayFun && clearTimeout(this.delayFun)
        // if (this.intervalFun)
        // {
        //     this.delayFun&&clearInterval(this.intervalFun)
        // }

        // if (this.delayFun)
        // {
        //     clearTimeout(this.delayFun)
        // }

    }

    loginBtnClick = () => {
        // this.props.navigation.navigate('Details')
        // utils.show()
        // utils.showAlert("title", "hello world", [
        //     { text: "yes", onPress: () => { this.showToast("yes") }, style: "cancel" },
        //     { text: "no", onPress: () => { this.showToast("no") }, style: "destructive" }
        // ], { cancelable: false })
        this.showToast(this.state.userName)
        this.Account.blur()//失去焦点
        // this.showToast(  new Date().toLocaleTimeString())

        // showAlert
        // Alert.alert("hh","123",[{text:"yes",onPress : ()=>{ console.log("yes")}},{text:"no",onPress : ()=>{ console.log("no")} }])
        this.setText("LOL")
    }

    showToast(str) {
        if (Platform.OS == "android") {
            ToastAndroid.show(str, ToastAndroid.SHORT);
        }
    }
    login = () => {
        if (this.TextLogin) {
            this.TextLogin.setNativeProps({ style: { color: this.rendomColor() } });
        }


        // console.log(this.TextLogin)
        // alert("login");
    }
    add = () => {
        this.state.text = this.state.text + 1
        this.setState({text })

    }


    rendomColor() {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        var color = 'rgba(' + r + ',' + g + ',' + b + ',1.0)';
        return color;
    }

    setText(txt) {
        this.state.text = txt
        this.setState({ text: this.state.text })
    }


}

const styles = StyleSheet.create({
    button: {
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 30
    }
});