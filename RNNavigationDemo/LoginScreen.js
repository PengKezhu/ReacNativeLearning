import {Platform, StyleSheet, Text, View, Image, Button, KeyboardAvoidingView, MaskedViewIOS, Modal, ProgressViewIOS, ScrollView, RefreshControl, FlatList} from 'react-native';
import React, {Component} from 'react';
import {Dimensions} from 'react-native'

export default class LoginScreen extends Component {
    static navigationOptions = {
        title: '登录',
    };
    state = {
        modalVisible : false,
        refreshing : false
    };

    constructor (props) {
        super(props);
        this._stopRefreh = this._stopRefreh.bind(this);
    }

    _onPress() {
        this.setState({
            modalVisible : !this.state.modalVisible
        })
    }

    _onRefresh() {
        this.setState({
            refreshing : true
        })
        setTimeout(this._stopRefreh, 2000);
    }

    _stopRefreh() {
        this.setState({
            refreshing : false
        })
    }
    static isPink = true;
    _renderCell({item}) {
        LoginScreen.isPink = !LoginScreen.isPink;
        return (
            <View style={{height: 100, backgroundColor: LoginScreen.isPink? 'pink' : 'blue', paddingTop:4, alignItems:'center'}}>
                {/*<View style={{flex:1, paddingTop:4}}>*/}
                    <Text>
                        {item.key}
                    </Text>
                {/*</View>*/}
            </View>

        )
    }

    render () {
    var {height,width} =  Dimensions.get('window');

    return (
            <View style={styles.container}>
                <Modal animationType="slide" transparent={false} visible={this.state.modalVisible} onDismiss={()=>{
                    alert('closed')
                }
            }>
                    <MaskedViewIOS style={styles.container} maskElement={
                        <View style={styles.maskView}>
                            <Text style={{color:'black', fontSize:60, fontWeight:'bold'}}>文字据说可以透出底下的东西</Text>
                        </View>
                    }>
                        <View style={styles.view}></View>
                        <View style={styles.view1}></View>
                        <Button title='开启或者关闭modalView' onPress={this._onPress.bind(this)}/>
                    </MaskedViewIOS>
                </Modal>
                <Button title='开启或者关闭modalView' onPress={this._onPress.bind(this)}/>
                <ProgressViewIOS style={{width: 100, height: 2, marginTop:50}} progress={0.5} progressTintColor='blue' trackTintColor='red' progressViewStyle='default'></ProgressViewIOS>
                <ScrollView refreshControl={<RefreshControl onRefresh={this._onRefresh.bind(this)} refreshing={this.state.refreshing}/>} style={{marginTop: 50, backgroundColor: 'gray', flex: 1}}>
                    <Text>1111111111111</Text>
                    <Text>1111111111111</Text>
                    <Text>1111111111111</Text>
                </ScrollView>
                <ScrollView style={styles.scrollView} pagingEnabled={true} horizontal={true}>
                    <FlatList data={[{key: 'a'}, {key: 'b'}]} renderItem={this._renderCell.bind(this)} style={{width:width}}></FlatList>
                    <FlatList data={[{key: 'c'}, {key: 'd'}]} renderItem={this._renderCell.bind(this)} style={{width:width}}></FlatList>
                </ScrollView>
            </View>
        )
    }
}

{/*<KeyboardAvoidingView style = {styles.container} behavior='padding'>*/}

{/*</KeyboardAvoidingView>*/}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'white',
        justifyContent: 'flex-start',
        alignItems : 'center',
    },
    view : {
        width : 375,
        height : 50,
        backgroundColor: 'red'
    },
    view1 : {
        width : 375,
        height : 50,
        backgroundColor: 'blue'
    },
    maskView : {
        backgroundColor: 'transparent',
        flex : 1,
        justifyContent: 'flex-start',
        alignItems : 'center',
    },
    scrollView : {
        flex : 1,
        marginTop : 10,
        backgroundColor : 'blue'
    },

})