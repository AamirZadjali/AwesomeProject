import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  const [name, setName] = useState('Aamir');

  useEffect(() => {
    SplashScreen.hide();
  }, []); // <-- dependency array to run only once

  return (
    <View>
      <Text>Hello {name}</Text>
    </View>
  );
};

export default App;
