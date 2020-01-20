import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
 
export default class DetailsScreen extends Component {
    static navigationOptions  = {
        title: 'Details',
        // titleStyle: {color: '#black'},
        // headerStyle:{backgroundColor:'blue'},

       
    };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details</Text>
        <Button
          title="Go Home"
          onPress={() => {
            this.props.navigation.goBack()
          }}
        />

      </View>
    );
  }
}