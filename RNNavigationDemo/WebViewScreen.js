/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  WebView,
  TouchableOpacity
} from 'react-native';

export default class WebViewScreen extends Component {
  static navigationOptions = ({navigation}) => ({
      headerTitle: 'W e b Vi e w',
      headerLeft: <TouchableOpacity onPress={()=> navigation.goBack()}><Text>返回</Text></TouchableOpacity>,
  });

  render() {
    return (
      <WebView source={{uri: 'https://baidu.com'}} style={styles.container} onLoad={()=>alert('加载成功')} startInLoadingState={true} ></WebView>
      // {/* <WebView originWhitelist={['*']} source={{html: '<h1>Title</h1>'}} style={styles.container}></WebView> */}
      // <WebView source={{uri: 'https://baidu.com'}} style={styles.container} onLoad={()=>alert('加载成功')} onLoadEnd={()=>alert('加载完成')} startInLoadingState={true} onShouldStartLoadWithRequest={(url) =>{alert(url.toString);return true}}></WebView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
