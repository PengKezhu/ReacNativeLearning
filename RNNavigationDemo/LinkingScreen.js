import React, { Component } from 'react'
import { Text, StyleSheet, View, Linking, Button, NetInfo,  TouchableOpacity } from 'react-native'

export default class LinkingScreen extends Component {
constructor(props) {
  super(props)

  this.state = {
     newworkState : ''
  }
}

componentDidMount () {
  NetInfo.addEventListener ('connectionChange', ({type, effectiveType})=>{
    NetInfo.isConnected.fetch().then((isConnected)=>{
      alert(JSON.stringify(isConnected));
    })
    this.setState({
      newworkState : type
    });
    if (type == 'wifi') {
      alert('wifi')
    }
  })
}


  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={{ backgroundColor: 'gray', height: 44, justifyContent: "center" }} onLongPress={() => {
          Linking.canOpenURL('weixin://').then((isSupported) => {
            if (isSupported) {
              Linking.openURL('weixin://').catch((error) => {
                console.error('An error occurred', err);
              })
            } else {
              console.log('url is not suppoted ' + 'weixin://');
            }
          })
        }}>
          <Text style={{ textAlign: 'center' }} >点击跳转微信应用</Text>
        </TouchableOpacity>
        <Button onPress={() => {
          Linking.canOpenURL('mailTo://330312471@qq.com').then((isSupported) => {
            if (isSupported) {
              Linking.openURL('mailTo://330312471@qq.com').catch((error) => {
                console.error('An error occurred', err);
              })
            } else {
              console.log('url is not suppoted ' + 'mailTo://330312471@qq.com');
            }
          })
        }} title='点击跳转发邮件'></Button>

        <Text>当前的网络状态为：{this.state.newworkState}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})




