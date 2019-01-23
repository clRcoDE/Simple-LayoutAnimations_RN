/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import LayAnimFire from './src/components/LayAnimFire';
import FireLights from './src/components/FireLights'
import LayMyMenu from './src/components/LayMyManu';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <LayAnimFire /> */}
        {/* <FireLights/> */}
        {/* <LayMyMenu/> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
});
