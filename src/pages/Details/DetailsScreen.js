import { Button, Text, View } from 'react-native';


export default function DetailsScreen({ navigation }) {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Home!"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}