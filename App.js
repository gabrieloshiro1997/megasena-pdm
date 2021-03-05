import React, { useState } from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';

export default function App() {
  const [numbers, setNumbers] = useState([]);

  const generateNumbers = () => {
    var randomNumbers = [];

    while (randomNumbers.length < 6) {
      var number = Math.floor(Math.random() * 60) + 1;
      if (randomNumbers.indexOf(number) === -1) randomNumbers.push(number);
    }
    setNumbers(randomNumbers.sort((a, b) => a - b));
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <View style={styles.inputButton}>
          <Button title='Sortear números' onPress={generateNumbers} />
        </View>
      </View>
      <View style={styles.numbersContainer}>
        {numbers.map((number) => (
          <View style={styles.circle}>
            <Text style={styles.number}>{number}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 50,
  },
  inputView: {
    alignItems: 'center',
    marginBottom: 16,
  },
  inputButton: {
    width: '80%',
  },
  numbersContainer: {
    marginTop: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  circle: {
    backgroundColor: '#209869',
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
    justifyContent: 'center',
    alignContent: 'center',
    marginRight: 8,
  },
  number: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
