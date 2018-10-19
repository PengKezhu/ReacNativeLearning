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
    Modal,
    Button,
    Dimensions
} from 'react-native'

// create a component
class ShareAlert extends Component {
    render() {
        const {width, height} = Dimensions.get('window');
        return (
            <View style={{position:'absolute', width:width, height:height, backgroundColor:'#00000088',justifyContent:'center', alignItems:'center'}}>
                <View style={{backgroundColor: 'white', width: '90%', height: 300, justifyContent:'center', alignItems:'center', borderRadius:8}}>
                    <Text>{this.props.medal.medalName}</Text>
                    <Image source={{uri: this.props.medal.imgUrl}} style={{width:100, aspectRatio: 1}}></Image>
                    <Text style={{textAlign:"center"}}>{new Date().toLocaleDateString()}</Text>
                    <View style={{ backgroundColor:'red', marginTop: 20}}>
                        <Button title="分享朋友圈" color='white' onPress={()=>alert('点击了分享朋友圈')}></Button>
                    </View>
                    <TouchableOpacity style={{alignSelf:'flex-end', position:'absolute', top:-10, right:-10}} onPress={()=>{
                        this.props.closeBlcok();
                    }
                }>
                        <Image source={require('./images/close.png')}></Image>
                    </TouchableOpacity>
                    
                </View>
                
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
         showShareAlert: false,
         clickedMedal: null,
         scrollOffsetY: 0
      }
      this._componentWithMedals = this._componentWithMedals.bind(this);
      this._totalMedals = this._totalMedals.bind(this);
      this._shareMedal = this._shareMedal.bind(this);
      this._getNavigationTitleColor = this._getNavigationTitleColor.bind(this);
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
        this.setState({
            showShareAlert : true,
            clickedMedal: medal
        })
    }

    _componentWithMedals(medals) {
        var array = [];
        var i = 0;
        for (const medal of medals) {
            array.push(
                <TouchableOpacity style={{width: '33.3%', backgroundColor:'white', marginTop:i > 2 ? 15 : 0}} onPress={() => this._shareMedal(medal)}>
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

    _getNavigationTitleColor (scrollViewOffsetY) {
        // alert(scrollViewOffsetY);
        var color = 255 * (1 - scrollViewOffsetY / 60);
        if (scrollViewOffsetY / 60 > 1) {
            StatusBar.setBarStyle('dark-content')
        } else {
            StatusBar.setBarStyle('light-content')
        }
        return 'rgb(' + color +',' + color + ',' + color + ')';
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
            <ScrollView scrollEventThrottle={10} style={{flex:1}} contentContainerStyle={{alignItems:'center'}} onScroll={(event)=>{
                // alert(JSON.stringify (event.nativeEvent));
                this.setState({scrollOffsetY: event.nativeEvent.contentOffset.y})
                console.log(this.state.scrollOffsetY);
            }}>
                <View style={{width:'100%', aspectRatio:375/190, backgroundColor:'red'}}>
                    <ImageBackground source={require('./images/BG.png')} style={{flex:1, alignItems:"center", justifyContent: 'center'}}>
                        <View style={{marginTop: 15}}>
                            <Text style={{color: 'white', fontSize: 30, fontWeight:"bold"}}>{this._totalMedals(this.state.medals)}<Text style={{fontSize:17}}>枚</Text></Text>
                            <Text style={{color: 'white', fontSize: 17, marginTop:10, textAlign:'center'}}>勋章</Text>
                        </View>
                        
                    </ImageBackground>
                </View>

                {medalView}

            </ScrollView>
            <ActivityIndicator size='large' hidesWhenStopped={true} style={{position:'absolute', top:'50%', left:'50%'}} animating={this.state.loading}></ActivityIndicator>
            {/* <Modal animationType='fade' presentationStyle='overFullScreen' transparent={true} visible={this.state.showShareAlert} style={{backgroundColor:'red'}}> */}
{
    this.state.showShareAlert ? <ShareAlert medal={this.state.clickedMedal} closeBlcok={()=>this.setState({showShareAlert: false})}></ShareAlert> : null
}
                    
            {/* </Modal> */}
            <View style={{position:'absolute',width:'100%',justifyContent:'flex-end', height:64,backgroundColor:'rgba(255, 255, 255,' +  + this.state.scrollOffsetY/60 + ')'}}>
                <View style={{justifyContent:'center',position:'absolute', flexDirection:'row', width:'100%', height:44, alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.pop()} style={{position: 'absolute', left:20, width: 44, aspectRatio: 1, top:0, justifyContent:'center'}}>
                        <Image source={require('./images/返回.png')} style={{tintColor:this._getNavigationTitleColor(this.state.scrollOffsetY)}}></Image>
                    </TouchableOpacity>
                    <Text style={{color:this._getNavigationTitleColor(this.state.scrollOffsetY), fontSize:17,fontWeight:'bold'}}>我的勋章</Text>
                </View>
            </View>
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
