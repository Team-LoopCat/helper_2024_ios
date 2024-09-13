// import {styled} from 'nativewind';
import React from 'react';
import { SafeAreaView } from 'react-native';
// import {Login} from './src/page/login/index';
import { Signup } from './src/page/signup';

// const SafeAreaView = styled(RNSafeAreaView);

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Signup />
    </SafeAreaView>
  );
}

export default App;
