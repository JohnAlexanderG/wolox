import React from 'react';
// react-native-gesture
import 'react-native-gesture-handler';
// react-navigation
import { NavigationContainer } from '@react-navigation/native'; // "^5.9.4",
import { createStackNavigator } from '@react-navigation/stack'; // "^5.14.5",
// Screem
import LoginScreen from './src/screens/LoginScreen';
import BookDetailScreen from './src/screens/BookDetailScreen';
// Stacks
import LibraryStack from './src/stacks/LibraryStack';
// Hooks
import useLogin from './src/hooks/useLogin';

const Stack = createStackNavigator();

const App = () => {

  // Hook - isLogin in Storage
  const { isLogIn } = useLogin();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName='home'
      >
        <Stack.Screen name="home" component={ isLogIn ? LibraryStack : LoginScreen } options={{ headerShown: false }} />
        <Stack.Screen name="login" component={ LoginScreen } options={{ headerShown: false }} />
        <Stack.Screen name="library" component={ LibraryStack } options={{ headerShown: false }} />
        <Stack.Screen name="book-detail" component={ BookDetailScreen } options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
