import React, { Component } from 'react'
import {
    Text,
    View,

} from 'react-native'

export class MedalScreen extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         medals : [{title:'defalut'}]
      }
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
    

  render() {
    return (
      <View>
          {<Text style={{width: 100,height: 20}}>medalGroup.title</Text>}
        {/* <Text> {JSON.stringify(this.state.medals)} </Text> */}
        
{
    this.state.medals.length > 0 ? 
    <Text style={{width: 100,height: 20, backgroundColor: 'red'}}>{this.state.medals[0].title}</Text>
    // <Text style={{width: 100,height: 20}}>medalGroup.title</Text>
    // this.state.medals.forEach(medalGroup => {     
    // }) 
     : null
}

      </View>
    )
  }
}

export default MedalScreen