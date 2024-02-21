import React from 'react';
import { Button, StyleSheet, View,useColorScheme} from 'react-native';
import { useNavigation } from '@react-navigation/native'


export default function Btn() {
  const colorScheme = useColorScheme();
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
              <Text>useColorScheme(): {colorScheme}</Text>
        <View style={styles.buttonContainer}>
          <Button onPress={() => {
    console.log('You tapped the button!');
  }}title="Press Me" />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => {
                console.log('You tapped the button!');
              }}
            title="Press Me"
            color="#841584"
          />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button onPress={() => {
    console.log('You tapped the button!');
  }} title="This looks great!" />
          <Button onPress={() => {
    console.log('You tapped the button!');
  }} title="OK!" color="#841584" />
        </View>
      </View>
    );
    
  }

 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
