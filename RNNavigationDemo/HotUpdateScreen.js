import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Button,
    Platform
} from 'react-native'
import {
    checkUpdate,
    isFirstTime,
    isRolledBack,
    packageVersion,
    currentVersion,
    downloadUpdate,
    switchVersion,
    switchVersionLater,
    markSuccess
} from 'react-native-update'

import _updateConfig from './update.json'

const {appKey} = _updateConfig[Platform.OS];

export default class HotUpdateScreen extends Component {


  render() {
    return (
      <View style={styles.container}>
        <Text style={{marginTop: 50}}>这是模拟热更新的界面</Text>

        <Button title="检查更新" onPress={()=>{checkUpdate(appKey).then(info => {
            if (info.expired) {
                alert('应用已经过期，请前往AppStore下载HHHHHHHHHHH');
            } else {
                alert(JSON.stringify(info));
            }
        })}}></Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
      flex : 1,
      backgroundColor: 'white',
      alignItems: 'center'
  }
})
