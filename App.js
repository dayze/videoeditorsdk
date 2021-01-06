/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {  VESDK } from 'react-native-videoeditorsdk';
import VideoEditor from './src/VideoEditor';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <VideoEditor/>
      </SafeAreaView>
    </>
  );
};


export default App;
