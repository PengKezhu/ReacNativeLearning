import {Platform,
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
    Dimensions
} from 'react-native';

import React, {Component} from 'react';

export default class SegmentControlScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex : 0,
            sliderValue : 1,
            swichOn : true,
            tabSelectedIndex : 0,
        }
    }

    static navigationOptions = {
        headerTitle: 'SegmentControl',
        headerStyle : {backgroundColor : 'black'}
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

    componentDidMount () {
        // StatusBar.setBarStyle('light-content', true);
    }

    componentWillUnmount () {
        StatusBar.setBarStyle('dark-content', false);
        // alert('unmount');
    }


    render () {
      var {height,width} =  Dimensions.get('window');

        return (
             <View style={{flex: 1, justifyContent:'center', backgroundColor:'white'}}>
                <SegmentedControlIOS
                    style={{width: 200, height: 50}}
                    values={['One', 'Two']}
                    onValueChange={(value) => alert(value.toString())}
                    selectedIndex={this.state.selectedIndex}
                    onChange={(event) => this.setState({selectedindex: event.nativeEvent.selectedSegmentIndex})}
                />
                 <Slider
                    style={{width: 200, height: 10, marginTop: 50+this.state.sliderValue}}
                    maximumValue={100}
                    minimumTrackTintColor='red'
                    maximumTrackTintColor= 'blue'
                    minimumValue={1}
                    onValueChange={(value) => {
                        this.setState({
                            sliderValue : value
                        })
                    }}
                 />
                 <StatusBar showHideTransition='fade' hidden={false} animated={true} barStyle='light-content'/>
                 <Switch style={{width: 50, height: 30}} onTintColor='green' onValueChange={(value) => {
                        this.setState({swichOn: value})
                 }} value={this.state.swichOn} tintColor='black' />

                 <TabBarIOS tintColor='red'>
                   <TabBarIOS.Item
                     title='Contacts'
                     icon={require('./images/mom-icon.png')}
                     selected={this.state.tabSelectedIndex == 0}
                     onPress={()=>{
                          this.setState({tabSelectedIndex:0})
                     }}
                     badge='6'
                     renderAsOriginal={true}
                   >
                     <View/>
                   </TabBarIOS.Item>

                   <TabBarIOS.Item
                     systemIcon="history"
                     selected={this.state.tabSelectedIndex == 1}
                     onPress={()=>{
                          this.setState({tabSelectedIndex:1})
                     }}

                   >
                     <View/>
                   </TabBarIOS.Item>

                   <TabBarIOS.Item
                     systemIcon="downloads"
                     onPress={()=>{
                          this.setState({tabSelectedIndex:2})
                     }}
                     selected={this.state.tabSelectedIndex == 2}
                   >
                     <View/>
                   </TabBarIOS.Item>
                 </TabBarIOS>
            </View>
        )
    }
}
