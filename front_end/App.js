import React, { Component } from 'react';
import { AppRegistry,StyleSheet, Text, View,Image } from 'react-native';
const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
class Blync extends Component {
  // blynck code start
  constructor(props){
    super(props);
    this.state = {isShowingText: true};
    // Toggle the state every second
    setInterval(()=> (
      this.setState(previousState=>(
        {isShowingText: !previousState.isShowingText }
      ))
    ),5000);
  }
    // bynck code end
    render(){
      if(!this.state.isShowingText) {
        return null;
      }
      return(
        <Text style={styles.bigBlue}> My Porject {this.props.name} </Text>
      );
    
  }
}

class Greeting extends Component {
  
   
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={{alignItems: 'center'}}>
        <Text style={styles.red}>Hello {this.props.name}!</Text>
        <Image source={pic} style={{width: 193, height: 110}}/>
      </View>
    );
  }
}

export default class LotsOfGreetings extends Component {
 
  render() {
    
    return (
      <View style={{alignItems: 'center'}}>
        <Blync> name = " "</Blync>
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
