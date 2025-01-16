import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  return (
      <View
        style={styles.dynamicStyle(100)}
      >
        <Text>Hello</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  dynamicStyle: (value: number) => ({
    height: value,
  }),
});

export default App;
