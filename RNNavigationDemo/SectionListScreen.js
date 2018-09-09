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
    SectionList
} from 'react-native';

import React, {Component} from 'react';

export default class SectionListScreen extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: '组列表',
    };

    render () {
        var sourceData = [
            {
                key:'1',
                value: {name : 'xiaoMing', age : 20},
                data: [
                    'section0_row0',
                    'section0_row1',
                    'section0_row2',
                ]
            },
            {
                key: '2',
                value: {name : 'xiaoHai', age : 19},
                data: [
                    'section1_row0',
                    'section1_row1',
                    'section1_row2',
                    'section1_row3',
                    'section1_row4',
                    'section1_row5',
                ]
            }
            ];
        return (
            <SectionList sections={sourceData}
                         renderItem={({item, index, section, separators}) => <Text style={{height:section.key=='1'?30:60}}>{item}</Text>}
                         keyExtractor = {(item, index) => item}
                         renderSectionHeader={({section: {value}}) => <View style={{height: 40, backgroundColor:'gray', justifyContent:'center'}}><Text>header_{value.name}{value.age}</Text></View>}
                         ItemSeparatorComponent={()=><View style={{height: 1, backgroundColor: 'gray'}}></View>}
                         stickySectionHeadersEnabled={true}
            ></SectionList>
        )
    }
}