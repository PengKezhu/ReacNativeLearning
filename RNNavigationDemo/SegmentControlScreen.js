import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableHighlight,
  ScrollView,
  Animated,
  ActivityIndicator,
  Button,
  DatePickerIOS,
  FlatList,
  SectionList,
  Slider,
  SegmentedControlIOS,
  SnapshotViewIOS,
  StatusBar,
  Switch,
  TabBarIOS,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ActionSheetIOS
} from 'react-native';

import React, {Component} from 'react';

export default class SegmentControlScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      sliderValue: 1,
      swichOn: true,
      tabSelectedIndex: 0,
      inputText: '',
      clickedTimes: 0
    }
  }

  static navigationOptions = {
    headerTitle: 'SegmentControl',
    headerStyle: {
      backgroundColor: 'black'
    }
  };

  // _sliderValueChanged(value) {
  //     alert({value})
  //     this._writeObj(value);
  // }
  //
  //  _writeObj(obj){
  //     alert('HHHH')
  //     var description = "";
  //     for(var i in obj){
  //         var property=obj[i];
  //         description+=i+" = "+property+"\n";
  //     }
  //     alert(description);
  // }

  componentDidMount() {
    StatusBar.setBarStyle('light-content', true);

  //   ActionSheetIOS.showShareActionSheetWithOptions({
  //     message: 'share message'
  //   },
  //   (error)=>{alert('share error')},
  //   (isSuccess, sharedString) => {
  //     if (isSuccess) {
  //       alert('success')
  //     }
  //   }
  // )
  }

  render() {
    var {
      height,
      width
    } = Dimensions.get('window');

    return (<TouchableHighlight style={{
        flex: 1
      }} onPress={() => this.refs.textInput1.blur()}>
      <View style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: 'white'
        }}>
        <SegmentedControlIOS style={{
            width: 200,
            height: 50
          }} values={['One', 'Two']} onValueChange={(value) => alert(value.toString())} selectedIndex={this.state.selectedIndex} onChange={(event) => this.setState({selectedindex: event.nativeEvent.selectedSegmentIndex})}/>
        <Slider style={{
            width: 200,
            height: 10,
            marginTop: 50 + this.state.sliderValue
          }} maximumValue={100} minimumTrackTintColor='red' maximumTrackTintColor='blue' minimumValue={1} onValueChange={(value) => {
            this.setState({sliderValue: value})
          }}/>
        <StatusBar showHideTransition='fade' hidden={false} animated={true} barStyle='light-content'/>
        <Switch style={{
            width: 50,
            height: 30
          }} onTintColor='green' onValueChange={(value) => {
            this.setState({swichOn: value})
          }} value={this.state.swichOn} tintColor='black'/>

        <Text style={{
            fontWeight: 'bold',
            fontSize: 30,
            backgroundColor: 'white',
            textAlign: 'center',
            lineHeight: 50
          }} selectable={false} textShadowOffset={{
            width: 10,
            height: 10
          }} textShadowColor='red' numberOfLines={1} onPress={() => {
            alert(this.state.inputText)
          }} pressRetentionOffset={{
            top: 100,
            left: 10,
            bottom: 10,
            right: 10
          }}>
          I am bold 长文本测试长文本测试长文本测试长文本测试长文本测试长文本测试
          <Text style={{
              color: 'red',
              fontSize: 15
            }}>
            and red
          </Text>
          <Text style={{
              color: 'red',
              fontSize: 15
            }}>
            and red
          </Text>
        </Text>
        <Text style={{
            color: 'blue',
            fontSize: 15
          }}>
          blue another text
        </Text>

        <TextInput style={{
            height: 50,
            width: 100,
            borderColor: 'black',
            borderWidth: 1
          }} ref='textInput1'
          // onBlur={()=>alert('失去焦点')}
          keyboardType='number-pad' placeholder='placeholder text' clearButtonMode='while-editing' multiline={false} onChangeText={(text) => this.setState({inputText: text})} returnKeyType='done' blurOnSubmit={true} secureTextEntry={false} maxLength={10}
          // onFocus={()=>alert('聚焦')}

          // onKeyPress={(aKey)=>alert(aKey)}
        />

        <TouchableHighlight style={{
            width: 100,
            height: 50,
            backgroundColor: 'gray',
            justifyContent: 'center',
            alignItems: 'center'
          }} activeOpacity={0.1} underlayColor='red' onPress={() => {
            this.setState({
              clickedTimes: this.state.clickedTimes + 1
            })
          }}>
          <Text>Press Me</Text>
        </TouchableHighlight>

        <TouchableOpacity style={{
            width: 100,
            height: 50,
            backgroundColor: '#DDDDDD',
            justifyContent: 'center',
            alignItems: 'center'
          }} activeOpacity={0.1} underlayColor='red' onPress={() => {
            this.setState({
              clickedTimes: this.state.clickedTimes + 1
            })
          }}>
          <Text>Press Me</Text>
        </TouchableOpacity>

        <Text>{this.state.clickedTimes}</Text>

        <View style={{
            backgroundColor: 'green',
            width: 40,
            height: 20
          }} hitSlop={{
            top: 10,
            bottom: 10,
            left: 0,
            right: 0
          }}></View>

        <TabBarIOS tintColor='red'>
          <TabBarIOS.Item title='Contacts' icon={require('./images/mom-icon.png')} selected={this.state.tabSelectedIndex == 0} onPress={() => {
              this.setState({tabSelectedIndex: 0})
            }} badge='6' renderAsOriginal={true}>
            <View/>
          </TabBarIOS.Item>

          <TabBarIOS.Item systemIcon="history" selected={this.state.tabSelectedIndex == 1} onPress={() => {
              this.setState({tabSelectedIndex: 1})
            }}>
            <View/>
          </TabBarIOS.Item>

          <TabBarIOS.Item systemIcon="downloads" onPress={() => {
              this.setState({tabSelectedIndex: 2})
            }} selected={this.state.tabSelectedIndex == 2}>
            <View/>
          </TabBarIOS.Item>
        </TabBarIOS>
      </View>

    </TouchableHighlight>)
  }
}
