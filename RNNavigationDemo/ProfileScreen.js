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
    FlatList
} from 'react-native';

import React, {Component} from 'react';

export default class ProfileScreen extends Component {
    constructor (props){
        super(props);
        this.state = {date : new Date()};
    }
    static navigationOptions = {
        title : 'Profile screen'
    }

    clicked (){
        // this._flatList.scrollToEnd()
        this._flatList.scrollToIndex({animated:true, index:9, viewOffset:0, viewPosition:0.5})
    }



    setDate(newDate){
        this.setState({date : newDate})
    }
/*
{key:'item1', title : 'title text1'},
                    {key:'item2', title : 'title text2'}
* */

    render () {
        const ITEM_HEIGHT = 100;
        return (
            <View style={{flex : 1}}>
                <Text>Profile Screen</Text>
                <ActivityIndicator size='large' color='blue' animating = 'false'/>
                <ActivityIndicator size='small' color='red'/>
                <Button title="Button" onPress={this.clicked.bind(this)} color='blue' disabled={true}/>
                <DatePickerIOS date={this.state.date} onDateChange={this.setDate.bind(this)} maximumDate={new Date('June 30, 2017')} minuteInterval={2} mode="date"/>
                <FlatList
                    ref={(flatList)=>this._flatList = flatList}
                    ItemSeparatorComponent={ () =>
                        <View style={{height:1, backgroundColor:'red'}}></View>
                    }
                    ListEmptyComponent = { () =>
                        <View><Text>kongde</Text></View>
                    }
                    ListHeaderComponent = {() =>
                        <View style={{height:20,backgroundColor:'blue'}}></View>
                    }
                    getItemLayout={(data,index)=>(
                        {length: 100, offset: (100+2) * index, index}
                    )}
                    onRefresh = {() => {
                        alert('Refreshed')

                    }}
                    refreshing = {false}
                data = {[
                    {key:'item1', title : 'title text1'},
                    {key:'item2', title : 'title text2'},
                    {key:'item3', title : 'title text2'},
                    {key:'item4', title : 'title text2'},
                    {key:'item5', title : 'title text5'},
                    {key:'item6', title : 'title text2'},
                    {key:'item7', title : 'title text2'},
                    {key:'item8', title : 'title text2'},
                    {key:'item9', title : 'title text2'},
                    {key:'item10', title : 'title text2'},
                    {key:'item11', title : 'title text10'},
                    ]}

                renderItem={({item, separators}) =>
                    <View style={{height:100,backgroundColor:'red'}}>
                        <Text>{item.title}</Text>
                        <Button title={item.title + 'button'} onPress={this.clicked.bind(this)}/>
                        <Image source={{uri: 'https://qiniuuwmp3.7mtt.cn/VIPBanner.png'}}
                        style={{width: 187.5, height: 30}}
                               borderColor='white'
                               borderWidth={1}
                               borderRadius={10}
                               resizeMode='contain'
                        />
                    </View>
                }
                    horizontal={false}
                />
                <FlatList
                    data={[{key: 'a'}, {key: 'b'}]}
                    renderItem={({item}) => <Text>{item.key}</Text>}
                />
            </View>

        );
    }
}