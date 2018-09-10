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
    Switch
} from 'react-native';

import React, {Component} from 'react';

export default class SegmentControlScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex : 0,
            sliderValue : 1,
            swichOn : true
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

        return (
             <View style={{flex: 1, justifyContent:'center', alignItems:'center', backgroundColor:'white'}}>
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
            </View>
        )
    }
}