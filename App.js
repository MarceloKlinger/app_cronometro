import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.body}>
        <Image source={require('./images/relogio.png')}/>;
          <Text style={styles.timer}>0.00</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
        backgroundColor: '#2c1f30',
        alignItems: 'center',
       justifyContent: 'center',
  },
    timer: {
        color: '#baa07a',
        fontSize: 80,
        fontWeight: 'bold',
        backgroundColor: 'transparente'

    }
});
