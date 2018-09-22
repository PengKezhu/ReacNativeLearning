/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  TextInput,
  Button,
  KeyboardAvoidingView
} from 'react-native';

export default class KeyboardScreen extends Component {

  constructor (props) {
    super(props);
    this.state = {
      display : 'flex'
    }
  }

  componentDidMount () {
    this.keywillShowListener = Keyboard.addListener('keyboardDidShow', (event)=>{
      console.log('keyboardDidShow' + JSON.stringify(event))
    })
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', ()=>{
      console.log('keyboardDidHide')
    })
  }

  componentWillUnmount () {
    console.log('componentWillUnmount')
    Keyboard.dismiss();
    this.keywillShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior='position'>
        <Text style={{textAlign: 'center'}}>I'm the KeyboardScreen component</Text>
        <TextInput style={styles.textInput} placeholder='HHHHHHHHHHHHH'></TextInput>
        <View style={{backgroundColor: 'blue', display: this.state.display}}>
            <Button title='隐藏键盘' onPress={() => {Keyboard.dismiss();this.setState({display: 'none'})}} color='red'></Button>
        </View>
        <View style={{backgroundColor: 'red', width: 100,height: 50, overflow:'hidden'}}>
          <View style={{backgroundColor: 'green', width: 10,height: 10, position:'absolute', right:80, top: 30}}></View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: 50,
    backgroundColor: 'gray',
    marginTop: 15
  }
});
