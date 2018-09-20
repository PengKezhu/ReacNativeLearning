import {Platform, StyleSheet, Text, View, Image, ImageBackground, TouchableHighlight, ScrollView, Animated, Button} from 'react-native';
import React, {Component} from 'react';

class FadeInView extends Component {
    constructor (props) {
        super(props);
        this.state = {
            fadeValue : new Animated.Value(0),
        }
    }

    componentDidMount () {
        Animated.timing (
            this.state.fadeValue,
            {
                toValue: 1,
                duration: 2000
            }
        ).start();
    }

    render () {
        return (
            <Animated.View style = {{...this.props.style, opacity: this.state.fadeValue}}>
                {this.props.children}
            </Animated.View>
        );
    }
}

// class FadeInView extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             fadeValue: new Animated.Value(0),          // 透明度初始值设为0
//         };
//     }
//     componentDidMount() {
//         Animated.timing(                            // 随时间变化而执行的动画类型
//             this.state.fadeValue,                      // 动画中的变量值
//             {
//                 toValue: 1,                             // 透明度最终变为1，即完全不透明
//             }
//         ).start();                                  // 开始执行动画
//     }
//     render() {
//         return (
//             <Animated.View                            // 可动画化的视图组件
//                 style={{
//                     ...this.props.style,
//                     opacity: this.state.fadeValue,          // 将透明度指定为动画变量值
//                 }}
//             >
//                 {this.props.children}
//             </Animated.View>
//         );
//     }
// }


class CC extends Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <View><Text>dddd</Text></View>
        )
    }
}

export default class MainScreen extends  Component {
    // static  navigationOptions = {
    //   title : "DAO HANG LAN"
    // };
    static navigationOptions = {
        title: '首页',
    };

    _onPressButton(){
        const { navigate } = this.props.navigation;
        navigate('Profile', {name : 'Jane'})
    }

    _onPressMoviesButton() {
        const { navigate } = this.props.navigation;
        navigate('Movies')
    }

    _onPressLoginButton() {
        const { navigate } = this.props.navigation;
        navigate('Login')
    }

    _onPressSectionListButton () {
        const { navigate } = this.props.navigation;
        navigate('SectionList')
    }

    _onPressSegmentControlButton () {
        const { navigate } = this.props.navigation;
        navigate('SegmentControl')
    }

    _onPressWebViewButton () {
      const { navigate } = this.props.navigation;
      navigate('WebViewScreen')
    }

    render () {
        return (
            <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
                <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
                <Button title="点击跳转主页" onPress={this._onPressButton.bind(this)} />
                <Button title="点击跳转电影页面" onPress={this._onPressMoviesButton.bind(this)} />
                <Button title="点击跳转登录页面" onPress={this._onPressLoginButton.bind(this)} />
                <Button title="点击跳转sectionList页面" onPress={this._onPressSectionListButton.bind(this)} />
                <Button title="点击跳转SegmentControl页面" onPress={this._onPressSegmentControlButton.bind(this)} />
                <Button title="点击跳转webView页面" onPress={this._onPressWebViewButton.bind(this)} />
            </FadeInView>

    );
    }
}
{/*<ScrollView>*/}
    {/*<Text style={styles.title}>Hello World</Text>*/}
    {/*<Image source={{uri: 'https://qiniuuwmp3.7mtt.cn/VIPBanner.png', cache: 'only-if-cached'}}*/}
           {/*style={{width: 375, height: 100}} />*/}
    {/*<TouchableHighlight onPress = {this._onPressButton}>*/}
        {/*<Text> Button </Text>*/}
    {/*</TouchableHighlight>*/}
{/*</ScrollView>*/}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
    }
});
