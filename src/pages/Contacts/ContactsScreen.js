import { Button, Text, View } from 'react-native';


export default function ContactsScreen({ navigation }) {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Text>Contacts Screen</Text>
      <Button
        title="Go to Home!"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}