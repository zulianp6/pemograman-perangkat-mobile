import React, { Component } from 'react';
import {View, Text, Button} from 'react-native';

class DetailScreen extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Detail Screen</Text>
                <Button title='Go to Home' onPress={()=>this.props.navigation.popToTop()}/>
                
            </View>
         );
    }
}
 
export default DetailScreen;
