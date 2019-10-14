import * as React from 'react';
import { Text, View, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import AssetExample from './components/AssetExample';
import { Card } from 'react-native-paper';
import { StackNavigator } from 'react-navigation';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        
          <AssetExample />
          <Text style={styles.appName}>
          Blood Donation App</Text>

          <View style={styles.theWordButton}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonWord}>
                Find Donor
              </Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonWord}>
                Donate Now
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.theImageButton}>
            <TouchableOpacity>
              <Image
                style={{width: 50, height: 50}}
                source={require('./assets/about.png')}
              />
              
            </TouchableOpacity>
            
            <TouchableOpacity>
              <Image
                style={{width: 50, height: 50}} 
                source={require('./assets/eligibility.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                style={{width: 50, height: 50}} 
                source={require('./assets/news.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                style={{width: 50, height: 50}} 
                source={require('./assets/contact.png')}
              />
            </TouchableOpacity>
          </View> 

        
          <View style={styles.footer}>
            <Text style={styles.footerText}>
            Copyright © 2019 LAGUARDIA 
            </Text>
          </View>
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

  theWordButton:{
    margin: 30,
    //flexDirection: "row",
    justifyContent: "space-between"
  },
  appName:{
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: -20
  },
  theImageButton:{
    marginLeft: 10,
    marginRight: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    
  },
  footer:{
    textAlign: 'center',
    backgroundColor: "gray",
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0
  },
  footerText:{
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Lucida Console'
  },
  button:{
    alignItems: 'center',
    backgroundColor: '#a30008',
    padding: 10,
    margin: 5,
    borderRadius: 10
  },
  buttonWord:{
    fontSize: 20,
    color: "white"
  }
});
