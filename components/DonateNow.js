import React from 'react';
import { Text, Image, View, Button} from 'react-native';
const util = require('util');

export default class DonateNow extends React.Component{
  static navigationOptions = {
    title: 'Donate Now'
  };
  render(){
    return(
      <View>
        <Text> This is a screen test. </Text>
        <Button
          title = ""
        />
      </View>
    );
  }
}