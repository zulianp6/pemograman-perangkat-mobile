import React, { Component } from 'react';
import {View, Text,Button} from 'react-native';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Welcome to Home Screen</Text>
                <Button title="Go to Order" 
                onPress={()=>this.props.navigation.push("Order",{
                    purchase: [
                        {name:'Macbook',price:20000000,qty:2},
                        {name:'Iphone X',price:15000000,qty:3}
                    ]
                })}/>
            </View>
         );
    }
}
 
export default HomeScreen;