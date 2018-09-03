import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList
} from 'react-native'

import React, {Component} from 'react';

var MOCKED_MOVIES_DATA = [
    {
        title: "标题",
        year: "2015",
        posters: { thumbnail: "https://i.imgur.com/UePbdph.jpg" }
}
];

var REQUEST_URL =
    "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";


export default class MoviesScreen extends Component {
    constructor (props) {
        super(props);
        this.state = {
            movies : null
        }
        this.fetchData = this.fetchData.bind(this);
        this.renderMovie = this.renderMovie.bind(this);
    }

    componentDidMount () {
        this.fetchData();
}
    static navigationOptions = {
        title: '电影',
    };

    fetchData () {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({movies : responseData.movies})
            })
    }

    renderLoadingView () {
        return (
            <View style={styles.container}>
                <Text>正在加载中...</Text>
            </View>
        )
    }

    renderMovie({item}) {
    return (
        <View style={styles.container}>
            <Image source={{uri : item.posters.thumbnail}} style={{width:100, height:100}}></Image>
            <View style={styles.rightContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.year}>{item.year}</Text>
            </View>
        </View>
    )
}

    render () {
        if (!this.state.movies)
            return this.renderLoadingView();
        var movie = this.state.movies[0];
        return (
            <View style={styles.container}>
            <FlatList
                data = {this.state.movies}
                renderItem = {this.renderMovie}
            />
            </View>
        )
    }
}

var styles = StyleSheet.create({
        container : {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white'
        },
        rightContainer : {
            flex: 1,
        },
        title : {
            fontSize : 20,
            textAlign: 'center'
        },
        year: {
            textAlign: 'center'
        }
    }
)
