import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <View>
                <Text style={{
                    backgroundColor: '#000B49',
                    textAlign: 'center',
                    color: 'white',
                    padding: 10}}
                >React Math</Text>
            </View>
         );
    }
}
 
export default Header;