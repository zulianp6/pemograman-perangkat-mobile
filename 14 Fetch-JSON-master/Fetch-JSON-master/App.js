import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';

/*
const users = [
  {
    name: 'brynn',
    avatar: 'https://uifaces.co/our-content/donated/1H_7AxP0.jpg',
  },
  {
    name: 'thot leader',
    avatar:
      'https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
  },
  {
    name: 'jsa',
    avatar: 'https://uifaces.co/our-content/donated/bUkmHPKs.jpg',
  },
  {
    name: 'talhaconcepts',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    name: 'andy vitale',
    avatar: 'https://uifaces.co/our-content/donated/NY9hnAbp.jpg',
  },
  {
    name: 'katy friedson',
    avatar:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_UY256_CR16,0,172,256_AL_.jpg',
  },
];
*/



class App extends Component {
    state = {
      users: []
    }

  componentDidMount(){
    this.getData('https://jsonplaceholder.typicode.com/posts')
    .then(
      data => {
        this.setState({users: data})
    })
  }

  getData = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    return data
  }

  render(){
    let data 
    if(this.state.users.length > 0){
      data =  <Card>
      <Card.Title>CARD WITH DIVIDER</Card.Title>
      <Card.Divider />
      {this.state.users.map((u, i) => {
        return (
          <View key={i}>
            <View key={i} style={styles.user}>
              <Text style={styles.name}>{u.title}</Text>
            </View>
            
          <View>
              <Card.Divider />
          </View>
          </View>
        );
      })}
    </Card>
    }
    return (
      <ScrollView>
        <View style={styles.container}>
         {data}
          <Card>
            <Card.Divider />
            <Button
              icon={
                <Icon
                  name="code"
                  color="#ffffff"
                  iconStyle={{ marginRight: 10 }}
                />
              }
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="VIEW NOW"
            />
          </Card>
        </View>
      </ScrollView>
  );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default App;