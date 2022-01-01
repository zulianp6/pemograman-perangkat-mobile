import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from './Component/Header';
import Form from './Component/Form'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <View>
        <Header/>
        <Form/>
      </View>
     );
  }
}
 
export default App;