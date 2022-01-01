import React, { Component } from 'react';
import { View, TextInput, Text, Button } from 'react-native';

class App extends Component {
    constructor(props) {
        super(props);
       
    }

    state = {
        result: '+',
        num1: 0,
        num2: 0,
        akhir: 0
    }

    add = (a1,a2) => {
        this.setState({
            result: '+',
            akhir: parseInt(a1) + parseInt(a2)
        })
    }

    substrak = (s1,s2)=> {
        this.setState({
            result: '-',
            akhir: parseInt(s1) - parseInt(s2)
        })
    }

    multiply = (m1,m2) =>{
        this.setState({
            result: 'x',
            akhir: parseInt(m1) * parseInt(m2)
        })
    }

    divide = (d1,d2) => {
        this.setState({
            result: '/',
            akhir: parseInt(d1) / parseInt(d2)
        })
    }

    render() { 
        return ( 
            <View>
                <View style={{flexDirection: 'row', alignContent: 'center', marginLeft: 60, marginTop: 40}}>
                    {/* INPUT NILAI KE 1 */}
                    <TextInput style={{
                        flex: 1,
                        fontFamily: 'calibri',
                        backgroundColor: '#F0ECE3',
                        margin: 15,
                        padding: 10
                    }} onChangeText={(teks)=>this.setState({num1: teks})} />

                    {/* HASIL */}
                    <Text style={{marginTop: 25}}>{this.state.result}</Text>

                    {/* INPUT NILAI KE 2 */}
                    <TextInput style={{
                        flex: 1,
                        fontFamily: 'calibri',
                        backgroundColor: '#F0ECE3',
                        margin: 15, 
                        padding: 10
                    }} onChangeText={(text)=>this.setState({num2:text})}/>

                    <Text style={{marginTop: 25}}>=</Text>

                    {/* HASIL */}
                    <Text style={{marginTop: 25, flex: 1, marginLeft: 10}}>{this.state.akhir}</Text>
                
                {/* ADD */}
                </View> 
                <View style={{
                    marginTop: 40,
                    marginLeft: 40,
                    marginRight: 40,
                    marginBottom: 10
                }}>
                    <Button title='add' onPress={(an1,an2)=> this.add(this.state.num1, this.state.num2)} />
                </View>

                {/* SUBSTRACT */}
                <View style={{
                    marginTop: 5,
                    marginLeft: 40,
                    marginRight: 40,
                    marginBottom: 10
                }}>
                    <Button title='substract' onPress={(sn1,sn2)=> this.substrak(this.state.num1, this.state.num2)} />
                </View>

                {/* MULTIPLY */}
                <View style={{
                    marginTop: 5,
                    marginLeft: 40,
                    marginRight: 40,
                    marginBottom: 10
                }}>
                    <Button title='Multiply' onPress={(mn1,mn2)=>this.multiply(this.state.num1, this.state.num2)} />
                </View>

                {/* DIVIDE */}
                <View style={{
                    marginTop: 5,
                    marginLeft: 40,
                    marginRight: 40,
                    marginBottom: 10
                }}>
                    <Button title='Divide' onPress={(dn1,dn2)=>this.divide(this.state.num1, this.state.num2)} />
                </View>
            </View>
           
         );
    }
}
 
export default App;