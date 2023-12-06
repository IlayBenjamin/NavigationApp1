
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import ContactsScreen from './src/pages/Contacts/ContactsScreen';
import DetailsScreen from './src/pages/Details/DetailsScreen';
import HomeScreen from './src/pages/Home/HomeScreen';

const Stack = createNativeStackNavigator();


export default function App() {

  return (

    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Contact" component={ContactsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>

  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff2da'
  }
});





