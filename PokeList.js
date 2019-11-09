
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';






const PokeList: () => React$Node = () => {
  return (
      <View style={styles.thing}>
        <Text>This is the list</Text>
      </View>
      )

}

const styles = StyleSheet.create({
  thing: {
    flex: 3,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
  },
});

export default PokeList;
