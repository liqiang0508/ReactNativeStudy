import React from 'react';
import 'react-native-gesture-handler';
import { View, Text, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator,TransitionSpecs,TransitionPresets} from 'react-navigation-stack';
import HomeScreen from "./src/HomePage";
import DetailsScreen from "./src/DetailsScreen";

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

 
export default createAppContainer(AppNavigator);