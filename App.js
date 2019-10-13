import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        
          <AssetExample />
          <Text style={styles.appName}>
          Blood Donation App</Text>

          <View style={styles.mainMenuButton}>
            <Button 
              title="Find Donor"
            />
            <Button 
              title="Donate Now"
            />  
          </View>
        <Text style={styles.paragraph}>
         "We make a living by what we get, but we make a life by what we give."<br></br> - Winston Churchill
        </Text>
        
        <Text style={styles.copyright}>
          Copyright © 2019 LAGUARDIA 
        </Text>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ff9791',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mainMenuButton:{
    margin: 30,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  appName:{
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  copyright:{
    fontSize: 12,
    textAlign: 'center',
    marginTop: 70,
    paddingTop: 4,
    marginBottom: -4,
    flex: 0.50,
    backgroundColor: "gray",
    fontWeight: 'bold'
  }
});
