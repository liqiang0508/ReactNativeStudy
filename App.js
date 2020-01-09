// import React, { Component } from 'react';
// import { StyleSheet, Button,Alert, TextInput, Text, View } from 'react-native';

// export default class HelloWorldApp extends Component {

//   state = {
//     text: ''
//   }

//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <Text style={{ fontSize: 30, color: "green" }}>{this.state.text}</Text>
//         <TextInput style={{ height: 40 }} placeholder="Type here to translate!"
//           onChangeText={(text) => this.setState({ text })}
//           value={this.state.text} />

//         <Button title="press me" onPress={() => {  console.log("click btn**") }} />

//       </View>
//     );
//   }
// }


import React from 'react';
import 'react-native-gesture-handler';
import { View, Text, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator,TransitionSpecs,TransitionPresets} from 'react-navigation-stack';
import HomeScreen from "./src/HomePage";
import DetailsScreen from "./src/MyPage";

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
  },
}, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      // gestureEnabled: true,
      // cardOverlayEnabled: true,
      ...TransitionPresets.SlideFromRightIOS,
    },
  //   defaultNavigationOptions : () => ({
  //     // transitionSpec: {
  //     //   open: TransitionSpecs.TransitionIOSSpec,
  //     //   close: TransitionSpecs.TransitionIOSSpec,
  //     // },
  //     TransitionPresets:TransitionPresets.ModalSlideFromBottomIOS
  // }), 
});

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
 
export default createAppContainer(AppNavigator);