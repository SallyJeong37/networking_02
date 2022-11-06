import React from 'react';
import Movies from './screens/Movies';
import Detail from './screens/Detail';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const MainStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name='Movie' component={Movies} 
        options={{title: "movieList"}}/>
        <MainStack.Screen name='Detail' component={Detail} />
      </MainStack.Navigator>

    </NavigationContainer>

  );
};

export default App;