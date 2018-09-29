import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native'

export class MedalScreen extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         medals : []
      }
      this._componentWithMedals = this._componentWithMedals.bind(this);
    }

    componentDidMount () {
        fetch("https://testapi.qimeng.fm/api/read/medals?loginUserId=45653866&os=ios&userId=45653866&v=4.0.0",
            {
                method: "GET",
                headers: {
                    Accept: 'application/json',
                    contentType: "application/json"
                }
            }
        ).then((response) => response.json())
        .then((json)=> this.setState({medals: json.data}))
        .catch((error)=>alert(error))

    }

    _componentWithMedals(medals) {
        var array = [];
        var i = 0;
        for (const medal of medals) {
            array.push(
                <View style={{width: '33.3%', aspectRatio:0.7, backgroundColor:'white'}}>
                    <Image source={{uri: medal.imgUrl}} defaultSource={require('./images/radioHomeDefault.png')} style={{width: '100%', aspectRatio: 1}}></Image>
                    <Text style={{textAlign:'center'}}>{medal.medalName}</Text>
                </View>
            );
        }
        return array;
    }
    

  render() {
    var medalView = [];
    for (const medalGroup of this.state.medals) {
        var view = 
        <View style={{backgroundColor: 'white', marginTop: 30}}>
            <View style={{height:40, justifyContent:'center'}}>
                <Text style={{}}>{medalGroup.title}</Text>
                <View style={{backgroundColor:'gray', height:1, marginTop:10}}></View>
            </View>            
            <View style={{flexDirection:'column', flexWrap:'wrap',alignContent:'space-between', backgroundColor:'red', width:'100%'}}>
                {this._componentWithMedals(medalGroup.list)}
            </View>
        </View>; 
        medalView.push(view)
    }
    return (
      <View style={{flex:1, backgroundColor:'gray'}}>
          {medalView}
      </View>
    )
  }
}

export default MedalScreen

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    headerView: {
        width: '100%',
        aspectRatio: 375/170
    },
    medalGroupView: {

    },
})
