import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
 
export default class DetailsScreen extends Component {
    static navigationOptions  = {
        title: 'DetailsLOL',
        // titleStyle: {color: '#black'},
        // headerStyle:{backgroundColor:'blue'},

       
    };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Detailsppppp</Text>
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