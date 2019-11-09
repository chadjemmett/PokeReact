/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import PokeList from './PokeList'

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar />
      <SafeAreaView>


        <ScrollView>
          <PokeList />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  thing: {
    flex: 3,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
  },
});

export default App;
