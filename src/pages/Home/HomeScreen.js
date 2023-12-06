import { Button, Text, View } from 'react-native';
import HelloWorld from '../../components/HelloWorld/HelloWorld';
import styles from './../../assets/css/pages/Home/styles';


export default function HomeScreen ({ navigation }) {

    return (
      <View style={styles.container}>
        <Text  style={styles.pageTitle}>Home Screen</Text>
  
        <View style={styles.content}>
  
          <View style={{marginBottom: 10}}>
            <Text style={[styles.contactButtonTitle, styles.buttonTitle]}> Contact Screen </Text>
            <Button  title="Go to Details!" onPress={() => navigation.navigate('Details')} />
    
            <Text style={[styles.detailsButtonTitle, styles.buttonTitle]}> Details Screen </Text>
            <Button title="Go to Contact!" onPress={() => navigation.navigate('Contact')} />
          </View>

          <HelloWorld></HelloWorld>
        </View>

      </View>
    );
  
  }
