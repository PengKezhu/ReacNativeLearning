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
    SnapshotViewIOS
} from 'react-native';

import React, {Component} from 'react';

export default class SegmentControlScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex : 0,
            sliderValue : 1
        }
    }

    static navigationOptions = {
        title: 'SegmentControl',
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

    render () {
        return (
             <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
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
            </View>
        )
    }
}