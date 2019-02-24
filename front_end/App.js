import React, { Component } from 'react';
import { AppRegistry,StyleSheet, Text,TextInput, View,Image } from 'react-native';
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
  constructor(props){
    super(props);
    this.state={text: ''}
  }
  render() {
    var field1 = this.state.field1;
    var field2 = this.state.field2;
    const result = field1&&field2?field1+field2:null;
    return (
      <View style={{flex: 1,alignItems: 'center'}}>
      <View style={{height:50,width: 500, backgroundColor: 'powderblue'}} />
        <Blync> name = " "</Blync>
        <Greeting name='Rexxar' pic='pic'/>
        {/*  to add new img pass pic='location'*/ }
        <TextInput  
        style={{height: 40}}
        placeholder="Enter Here"
        onChangeText={(text)=>this.setState({field1:parseInt(text)})}
        />
        <TextInput  
        style={{height: 40}}
        placeholder="Enter Here"
        onChangeText={(text)=>this.setState({field2:parseInt(text)})}
        />
         <Text style={{padding: 10, fontSize: 42}}>
          {result?<Text>{result}</Text>:null} 
        </Text>
        <TextInput
          style={{height: 40}}
          placeholder="Enter to transalte"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
        
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => LotsOfGreetings);
