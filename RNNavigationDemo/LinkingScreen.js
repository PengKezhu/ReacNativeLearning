import React, { Component } from 'react'
import {
  Text,
  StyleSheet,
  View,
  Linking,
  Button,
  Settings,
  NetInfo,
  PushNotificationIOS,
  TouchableOpacity,
  Share,
  Systrace,
  Vibration,
  Platform,
  NativeModules,
  NativeEventEmitter
} from 'react-native'

import RNMyFancyLibrary from 'react-native-my-fancy-library';
import RNKevinLibrary from 'react-native-kevin-library';

export default class LinkingScreen extends Component {
constructor(props) {
  super(props)
RNKevinLibrary.testLog('I am RN String');

RNKevinLibrary.doSomethingAsync({name: 'kezhu'}).then((result)=>{
  // alert(result);
},
(errorResult)=>{

}
)

  alert(RNKevinLibrary);
  // RNMyFancyLibrary.testLog('HHHH');
  // alert(RNMyFancyLibrary);

  this.state = {
     newworkState : ''
  }
}

componentDidMount () {
  if (Platform.OS == 'ios') {
    // RNMyFancyLibrary.testLog("HHHHH");
  }

  const nativeAlert = NativeModules.NativeAlert;
  nativeAlert.showAlert({
    title: 'title',
    detail: 'HAJFLDJLFKDJLSF'
  })

  // alert(nativeAlert.deviceName); 
  
  const nativeListenTester = NativeModules.EventTester;
  const emitter = new NativeEventEmitter(nativeListenTester);
  nativeListenTester.testSendEvent();
  const subscription = emitter.addListener('eventName', (result)=>{
      alert(result);
  })
  alert('subscription_' + subscription);

  NetInfo.addEventListener ('connectionChange', ({type, effectiveType})=>{
    NetInfo.isConnected.fetch().then((isConnected)=>{
      // alert(JSON.stringify(isConnected));
    })
    this.setState({
      newworkState : type
    });
    if (type == 'wifi') {
      // alert('wifi')
    }
  })

  PushNotificationIOS.requestPermissions({alert: 1, badge: 1}).then((value, reason) => {
    // alert(JSON.stringify(value) + reason)
  });

  PushNotificationIOS.addEventListener('localNotification', (notification)=> {
    // alert(JSON.stringify(notification));
    // alert(notification.getAlert());
  })

  //不知道怎么用
  // Settings.watchKeys(['age', 'name'], (watchId) => {
  //     alert('watchId');
  // })
}

componentWillUnmount () {
  const emitter = new NativeEventEmitter(NativeModules.EventTester);  
  const subscription = emitter.listeners('eventName');
  alert('emitter.listeners_' + subscription); 
  emitter.removeAllListeners('eventName');
  
  PushNotificationIOS.removeEventListener('localNotification', (notification) => {

  });
  console.log('LinkingScreen will unmount');
}


  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={{ backgroundColor: 'gray', height: 44, justifyContent: "center", borderWidth: StyleSheet.hairlineWidth, borderColor: 'red' }} onLongPress={() => {
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
          <Text style={{ textAlign: 'center', transform: [{rotate: '270deg'}, {scaleX: 2}, {scaleY: 2}, {translateX: 100}]}} >点击跳转微信应用</Text>
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
        <Button title='创建一个本地通知' onPress={()=>{
              PushNotificationIOS.presentLocalNotification({
              alertBody: 'bodyMessage',
              applicationIconBadgeNumber: 1
            })
        }}></Button>

        <Button title='定时发送一个本地通知' onPress={()=>{
          var time = Date.now();
          console.log(time);
          // alert(time);
          PushNotificationIOS.scheduleLocalNotification({
                fireDate: Date.now()+10000,
                alertTitle: 'title',
                alertBody: 'body',
                repeatInterval: 'day'
          })
        }}></Button>

        <Button title="setting setKey" onPress={()=>{
          Settings.set({
            name: 'kezhu',
            age: '25'
          })
        }}></Button>

        <View style={styles.shadowButton}>
          <Button color='white' title="setting getValue" onPress={()=>{
              Settings.set({
              age: '18'
            })
            // alert(Settings.get('name') + ' ' + Settings.get('age'));
          }}/>
        </View>

        <Button title="share" onPress={()=>{
              Share.share({
                message: 'message',
                title: 'title',
                url: 'https://baidu.com'
              },
              {
                tintColor: 'red',
                subject: 'subject'
              }
              ).then(({action, actionType})=>{
                alert(action + '_' + actionType);
              })
          }}/>
        <Button title='开启震动' onPress={()=>{
            Vibration.vibrate(1000)
        }}></Button>
        <Button title='关闭震动' onPress={()=>{
            Vibration.cancel();
        }}></Button>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  shadowButton : {
      ...StyleSheet.absoluteFillObject,
      // marginLeft: 20,
      left: 10,
      width: 150,
      height: 50,
      backgroundColor: 'gray',
      // justifyContent: 'center',
      shadowOffset: {
        width: -10,
        height: 0
      },
      shadowOpacity: 1,
      shadowColor: 'yellow',
      shadowRadius: 8
    }
})




