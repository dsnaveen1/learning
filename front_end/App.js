import React, { Component } from 'react';
import { AppRegistry, Text, View,Image } from 'react-native';

class Greeting extends Component {
  // blynck code start
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }
  // bynck code end
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    // blynck render
    if (!this.state.isShowingText) {
      return null;
    }
   // blynck render end
    return (
      <View style={{alignItems: 'center'}}>
        <Text>My Porject </Text> 
        <Text>Hello {this.props.name}!</Text>
        <Image source={pic} style={{width: 193, height: 110}}/>
      </View>
    );
  }
}

export default class LotsOfGreetings extends Component {
 
  render() {
    
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Rexxar' pic='pic'/>
        {/*  to add new img pass pic='location'*/ }
        <Greeting name='Jaina' />      
        <Greeting name='Valeera' />
        
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => LotsOfGreetings);
