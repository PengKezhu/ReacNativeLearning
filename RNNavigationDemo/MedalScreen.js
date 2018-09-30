import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
    ScrollView,
    ActivityIndicator,
    ImageBackground,
    StatusBar,
    TouchableOpacity,
    Modal
} from 'react-native'

// create a component
class ShareAlert extends Component {
    render() {
        return (
            <View style={{flex:1, backgroundColor:'#f6f6f6', justifyContent:'center', alignItems:'center'}}>
                <Text>MyClass</Text>
            </View>
        );
    }
}


export class MedalScreen extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         medals : [],
         loading: true,
         showShareAlert: false
      }
      this._componentWithMedals = this._componentWithMedals.bind(this);
      this._totalMedals = this._totalMedals.bind(this);
      this._shareMedal = this._shareMedal.bind(this);
    }

    static navigationOptions = {
        title: '我的勋章',
        headerStyle: {

        },
        header: (<View style={{height:88, backgroundColor: 'transparent', height:0}}></View>)
    };

    componentDidMount () {

        fetch("https://testapi.qimeng.fm/api/read/medals?loginUserId=45653866&os=ios&userId=45653866&v=4.0.0",
            {
                method: "GET",
                headers: {
                    Accept: 'application/json',
                    contentType: "application/json"
                }
            }
        ).then((response) => {this.setState({loading:false});return response.json();})
        .then((json)=> this.setState({medals: json.data}))
        .catch((error)=>alert(error))
        StatusBar.setHidden(false)
        StatusBar.setBarStyle('light-content')
        // StatusBar.setBackgroundColor('#f6f')
        // StatusBar.setTranslucent(true);
    }

    _shareMedal(medal) {
        // alert('弹出分享框');
        this.setState({
            showShareAlert : true
        })
    }

    _componentWithMedals(medals) {
        var array = [];
        var i = 0;
        for (const medal of medals) {
            array.push(
                <TouchableOpacity style={{width: '33.3%', backgroundColor:'white', marginTop:i > 2 ? 15 : 0}} onPress={this._shareMedal}>
                    {/* <View style={{width: '33.3%', backgroundColor:'white', marginTop:i > 2 ? 15 : 0}}> */}
                        <Image resizeMode="contain" source={{uri: medal.imgUrl}} defaultSource={require('./images/radioHomeDefault.png')} style={{width: '100%', aspectRatio: 1}}></Image>
                        <Text style={{textAlign:'center'}}>{medal.medalName}</Text>
                    {/* </View>     */}
                </TouchableOpacity>
            );
            i++;
        }
        return array;
    }

    _totalMedals (medalGroups) {
        var totalCount = 0
        for (const medalGroup of medalGroups) {
            totalCount += medalGroup.list.length;
        }
        return totalCount;
    }
    

  render() {
      var index = 0;
    var medalView = [];
    for (const medalGroup of this.state.medals) {
        var view = 
        <View style={{backgroundColor: 'white', marginTop: index == 0 ? -10 : 10, width:'90%', borderRadius:4}}>
            <View style={{height:30, paddingLeft: 15, flexDirection:'row', alignItems:'center'}}>
                <Text style={{}}>{medalGroup.title}</Text>
                <Text style={{paddingLeft: 10, color:'gray'}}>{medalGroup.list.length}枚</Text>
            </View>            
            <View style={{backgroundColor:'#a6a6a6', height:1, marginTop:0}}></View>
            <View style={{flexDirection:'row', flexWrap:'wrap',alignContent:'flex-start', width:'100%', paddingVertical:20}}>
                {this._componentWithMedals(medalGroup.list)}
            </View>
        </View>; 
        index++;
        medalView.push(view)
    }
    return (
        <View style={{flex:1, backgroundColor:'#f6f6f6'}}>
            <ScrollView style={{flex:1}} contentContainerStyle={{alignItems:'center'}}>
                <View style={{width:'100%', aspectRatio:375/190, backgroundColor:'red'}}>
                    <ImageBackground source={require('./images/BG.png')} style={{flex:1, alignItems:"center", justifyContent: 'center'}}>
                        <View style={{justifyContent:'center', flexDirection:'row', width:'100%', marginTop: 24, height:44, alignItems:'center'}}>
                            <TouchableOpacity onPress={()=>this.props.navigation.pop()} style={{position: 'absolute', left:20, width: 44, aspectRatio: 1, top:0, justifyContent:'center'}}>
                                <Image source={require('./images/返回.png')} style={{tintColor:'white'}}></Image>
                            </TouchableOpacity>
                            <Text style={{color:'white', fontSize:17,fontWeight:'bold'}}>我的勋章</Text>
                        </View>
                        
                        <View style={{marginTop: 15}}>
                            <Text style={{color: 'white', fontSize: 30, fontWeight:"bold"}}>{this._totalMedals(this.state.medals)}<Text style={{fontSize:17}}>枚</Text></Text>
                            <Text style={{color: 'white', fontSize: 17, marginTop:10, textAlign:'center'}}>勋章</Text>
                        </View>
                        
                    </ImageBackground>
                </View>

                {medalView}

            </ScrollView>
            <ActivityIndicator size='large' hidesWhenStopped={true} style={{position:'absolute', top:'50%', left:'50%'}} animating={this.state.loading}></ActivityIndicator>
            <Modal animationType='fade' transparent={false} visible={this.state.showShareAlert}>
                <ShareAlert>
                    
                </ShareAlert>
            </Modal>
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
