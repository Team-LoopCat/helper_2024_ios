import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Login} from './src/page/login/index';
import {Signup} from './src/page/signup';
import CustomText from './src/components/customText';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.main}>
      <Signup />
      {/* <Login /> */}
      <CustomText style={styles.text}>

      </CustomText>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  text: {
    fontSize: 20,
  },
});

export default App;
