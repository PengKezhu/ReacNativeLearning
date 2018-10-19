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
  Button,
  ActionSheetIOS,
  Alert,
  Easing,
  AsyncStorage,
  CameraRoll,
  TouchableOpacity,
  Clipboard,
  Dimensions,
  ImagePickerIOS
} from 'react-native';
import React, {Component} from 'react';

class FadeInView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeValue: new Animated.Value(0)
    }
  }

  componentDidMount() {
    Animated.timing(this.state.fadeValue, {
      toValue: 1,
      duration: 2000
    }).start();
  }

  render() {
    return (<Animated.View style={{
        ...this.props.style,
        opacity: this.state.fadeValue
      }}>
      {this.props.children}
    </Animated.View>);
  }
}

class CC extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (<View>
      <Text>dddd</Text>
    </View>)
  }
}

export default class MainScreen extends Component {
  // static  navigationOptions = {
  //   title : "DAO HANG LAN"
  // };


  constructor(props) {
    super(props);
    this.state = {
      animatedValue: new Animated.Value(0),
      animatedWidth: new Animated.Value(100),
      imgURL:'http://www.hangge.com/blog/images/logo.png',
      location: null,
      pickedImg: 'http://www.hangge.com/blog/images/logo.png'
    }
    this._getClipboardStr.bind(this);
    this._onPressLoginButton = this._onPressLoginButton.bind(this);
  }

  componentDidMount() {
// navigator.geolocation.getCurrentPosition((position)=>{
//     this.setState({location: JSON.stringify(position)})
// },
//   (error) => alert(error.message),
//   {timeout: 15000, maximumAge: 1000, enableHighAccuracy: true}
// )

navigator.geolocation.watchPosition((position) => {
  this.setState({location: JSON.stringify(position)})
},
(error) => alert(error.message),
{timeout: 15000, maximumAge: 1000, distanceFilter: 1000}
)

    var timing = Animated.timing
    Animated.parallel([
      timing(this.state.animatedValue, {
        duration: 3000,
        toValue: 50
      }),
      timing(this.state.animatedWidth, {
        duration: 3000,
        toValue: 50
      })
    ]).start();
// Geolocation.requestAuthorization();
    // Geolocation.setRNConfiguration(config);


// Geolocation.requestAuthorization();
    // Animated.timing(this.state.animatedValue, {
    //   duration: 7000,
    //   toValue: 100,
    //   easing: Easing.linear // 缓动函数
    // }).start();
  }

  static navigationOptions = {
    title: '首页'
  };

  _onPressButton() {
    
    const {navigate} = this.props.navigation;
    // navigate('Profile', {name: 'Jane'})

    navigate('PageScollViewScreen');
    return;

    let userHabit = {
      button: 'profileButton',
      user: {age: 10}
    };

    let userHabitDelta = {
      button: 'profileButtonTwo',
      user: {tall: 180}
    };

    AsyncStorage.setItem('userHabit', JSON.stringify(userHabit), (error)=>{
      AsyncStorage.mergeItem('userHabit', JSON.stringify(userHabitDelta), (error)=>{
        AsyncStorage.getItem('userHabit', (error, result) => {
          alert(result);
        })
      })
    })

    Clipboard.setString('剪贴板内容');
  }

  _onPressMoviesButton() {
    const {navigate} = this.props.navigation;
    navigate('Movies')
    this._getClipboardStr();
  }

  async _getClipboardStr () {
    var clipboardString = await Clipboard.getString();

    alert(clipboardString);

  }

  _onPressLoginButton() {
    const {navigate} = this.props.navigation;
    navigate('Login')
    // alert(this.state.imgURL)
  }

  _onPressSectionListButton() {
    const {navigate} = this.props.navigation;
    navigate('SectionList')
  }

  _onPressSegmentControlButton() {
    const {navigate} = this.props.navigation;
    navigate('SegmentControl')
  }

  _onPressWebViewButton() {
    const {navigate} = this.props.navigation;
    navigate('WebViewScreen')
  }

  _showActionSheetIOS() {
    ActionSheetIOS.showActionSheetWithOptions({
      options: [
        'cancel', 'confirm'
      ],
      cancelButtonIndex: 0,
      title: '标题',
      message: '提示'
    }, (buttonIndex) => {
      if (buttonIndex == 1) {
        alert('I am sure');
      }
    })
  }

  _showAlert() {
    Alert.alert('title', 'message', [
      {
        text: 'cancel',
        onPress: () => alert('canceled')
      }, {
        text: 'confirm',
        onPress: () => alert(this.state.imgURL)
      }
    ])
  }

  _pickPhoto() {
    // ImagePickerIOS.openCameraDialog({}, (img) => this.setState({pickedImg: img}), (error)=>{alert(error)})
    ImagePickerIOS.openSelectDialog({}, (img) => this.setState({pickedImg: img}), (error)=>{alert(error)})
  }


  _pressShowKeyBoardButton () {
    this.props.navigation.navigate('KeyboardScreen');
  }

  _pressLinkingButton () {
    this.props.navigation.navigate('LinkingScreen');
  }

  _pressMedalButton () {
    this.props.navigation.navigate('MedalScreen');
  }

  render() {
    var {width, height} = Dimensions.get('window');
    return (<FadeInView style={{
        width: 250,
        height: 50,
        backgroundColor: 'powderblue',
        alignItems: 'center'
      }}>
      <Text style={{
          fontSize: 28,
          textAlign: 'center',
          margin: 10
        }}>Fading in</Text>
      <Button title="广告轮播" onPress={this._onPressButton.bind(this)}/>
      <Button title="点击跳转电影页面" onPress={this._onPressMoviesButton.bind(this)}/>
      <Button title="点击跳转登录页面" onPress={this._onPressLoginButton}/>
      <Button title="点击跳转sectionList页面" onPress={this._onPressSectionListButton.bind(this)}/>
      <Button title="点击跳转SegmentControl页面" onPress={this._onPressSegmentControlButton.bind(this)}/>
      <Button title="点击展示actionSheet" onPress={this._showActionSheetIOS.bind(this)}/>
      <Button title="点击展示alert" onPress={this._showAlert.bind(this)}/>
      <Button title="点击跳转webView页面" onPress={this._onPressWebViewButton.bind(this)}/>
      <View style={{flexDirection : 'row'}}>
        <Button title="点击跳转选择照片" onPress={this._pickPhoto.bind(this)}/>
        <Image style={{width:50, height: 50}} source={{uri: this.state.pickedImg}}></Image>
      </View>
      <Button title="点击跳转Keyboard页面" onPress={this._pressShowKeyBoardButton.bind(this)}/>
      <Button title="点击跳转Linking页面" onPress={this._pressLinkingButton.bind(this)}/>
      <Button title="点击跳转勋章页面" onPress={this._pressMedalButton.bind(this)}/>
      <Button title="点击跳转热更新页面" onPress={()=>{this.props.navigation.navigate('HotUpdateScreen')}}/>
{/* //请注意下列边框圆角样式目前在 iOS 的图片组件上还不支持：
//borderTopLeftRadius
//borderTopRightRadius
//borderBottomLeftRadius
//borderBottomRightRadius */}


      <Image style={{width: 50,height: 50, borderRadius: 10,borderWidth:1,borderColor:'white', backgroundColor: 'blue', overflow: 'hidden'}} source={{uri: this.state.imgURL}} ></Image>
      <Text style={{width: width, height: 100, borderRadius: 10,borderWidth:1, borderColor:'white', backgroundColor:'red', overflow: 'hidden'}}>{this.state.location}</Text>
      <Animated.View style={{
          width: 50,
          height: this.state.animatedWidth,
          backgroundColor: 'black',
          // opacity: this.state.animatedValue,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: this.state.animatedValue
        }}>
        <TouchableOpacity>
          <Text style={{
              width: 30,
              height: 20,
              color: 'white'
            }}
            onPress={()=>{
              // CameraRoll.saveToCameraRoll(imgURL);
              CameraRoll.getPhotos({first: 1,
                                    assetType: 'Photos',
              }).then(r => {
                  this.setState({imgURL: r.edges[0].node.image.uri})
                  alert(this.state.imgURL)
              })
            }}
            >HAHAHAHAH</Text>
        </TouchableOpacity>
      </Animated.View>

    </FadeInView>);
  }
} {/* <ScrollView> */
} {/* <Text style={styles.title}>Hello World</Text> */
} {/*<Image source={{uri: 'https://qiniuuwmp3.7mtt.cn/VIPBanner.png', cache: 'only-if-cached'}}*/
} {/*style={{width: 375, height: 100}} />*/
} {/* <TouchableHighlight onPress = {this._onPressButton}> */
} {/* <Text> Button </Text> */
} {/* </TouchableHighlight> */
} {/* </ScrollView> */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});
