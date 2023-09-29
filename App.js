import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import Orangejuice from './Orangejuice';
import Banansmoothie from './Bananasmoothie';
import Cider from './Cider';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Hem' component={Home}/>
        <Stack.Screen name='Apelsinjuice' component={Orangejuice}/>
        <Stack.Screen name='Banansmoothie' component={Banansmoothie}/>
        <Stack.Screen name='Cider' component={Cider}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
