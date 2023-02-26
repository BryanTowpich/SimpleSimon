import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home"
          component={HomeScreen}
          options={{title: 'Simple Simon'}}
        />
        <Stack.Screen name="Game"
          component={Game}
        />
        {/* <Stack.Screen name="Score"
          component={ScoreScreen}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export class HomeScreen extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const {navigation} = this.props;
    return(
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
    );
  }
}

export class Game extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const {navigation} = this.props;
    return(
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
