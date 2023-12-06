import { useState } from 'react';
import { Button, Text, View } from 'react-native';


export default function HelloWorldButton() {

    const [isHidden, setIsHidden] = useState(true);
    
    return (
        <View style={{ flex: 1, background: "#8fe3cc",  alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{color: "black", visibility: (isHidden ? "hidden" : "visible")}}>Hello, My Git Friends!</Text>
            <View style={{height: 8}}></View>
                <Button
                title="Cick On Me!" 
                onPress={() => setIsHidden(!isHidden)}>
                </Button>
        </View>
    );
}

