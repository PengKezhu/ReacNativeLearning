import React, {
    Component
} from 'react'
import {
    Text,
    View,
    ScrollView,
    StyleSheet
} from 'react-native'

export default class PageScollViewScreen extends Component {

constructor(props) {
    super(props)
    this._renderItems = this._renderItems.bind(this);
    this.state = {
        count: 0
    }
}

componentDidMount () {
    var count = 1;
    this.timerTag = setInterval( ()=> {
        count++;
        // this.setState({count: count})
        let scrollView = this.refs.adScrollView; 
        scrollView.scrollTo({x:375 * (count % 6), y:0, animated:true});
        if (count % 5 == 0) {
            count = 1;
            scrollView.scrollTo({x:375, y:0, animated:false});
        }
        
    }, 1000)
}

componentWillUnmount () {
    clearInterval(this.timerTag)
}

_renderItems (array) {
    var viewArray = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        var view = <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor: index == 0 ? 'red' : index == 1 ? 'blue' : index == 2 ? 'white' : index == 3 ? 'orange' : index == 4 ? 'black' : index == 5 ? 'green' : 'yellow'}}>
                        <Text style={{color:'white', fontSize:32}}>{element}</Text>
                   </View>
        viewArray.push(view);
    }
    return viewArray;
}

  render() {
      var datas = ['Fourth', 'First', 'Second', 'Third', 'Fourth', 'First'];
    return (
      <View style={styles.container}>
            <View style={styles.adScrollView}>
                <ScrollView ref='adScrollView' contentContainerStyle={styles.adScrollViewContent} horizontal={true} pagingEnabled={true} contentOffset={{x:375, y:0}}>
                    {this._renderItems(datas)}
                </ScrollView>
            </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
      flex:1,
      backgroundColor: 'white'
  },
  adScrollViewContent: {
    width: 375 * 6,
    height:  375 * 3/4,
    backgroundColor:'white',
  },
  adScrollView: {
      width: '100%',
      aspectRatio: 4/3,
      backgroundColor:'gray'
  }
})
