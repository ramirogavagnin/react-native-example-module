import * as React from 'react';

import { View, Text, TextInput, Pressable } from 'react-native';
import {
  multiply,
  logValueOnDevice,
  getDeviceName,
} from 'react-native-example-module';

import styles from './styles';

const PLACEHOLDER = 'Write what ever you want to log :)';
const DISCLAIMER =
  '*REMEMBER: To see logs in Android (Java Console), just run $ adb logcat in the root of this project';

enum Keys {
  a = 'a',
  b = 'b',
}

export default function App() {
  const [result, setResult] = React.useState<number>(0);
  const [value, setValue] = React.useState<string>('');
  const [numbers, setNumbers] = React.useState<{ a: number; b: number }>({
    a: 0,
    b: 0,
  });

  const [deviceName, setDeviceName] = React.useState<string>('unknown');

  const addNumber = (key: Keys) =>
    setNumbers((state) => ({ ...state, [key]: state[key] + 1 }));

  const subtractNumber = (key: Keys) =>
    setNumbers((state) => ({ ...state, [key]: state[key] - 1 }));

  const getResult = () => multiply(numbers.a, numbers.b).then(setResult);

  const getName = () => getDeviceName().then(setDeviceName);

  const logValue = () => {
    logValueOnDevice(value);
    console.warn(`Logged: ${value} *=== Check your device console ;) ===*`);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.margin, styles.title]}>Result: {result}</Text>
      <View style={styles.numbersContainer}>
        <View style={styles.numbersRow}>
          <Pressable
            onPress={() => subtractNumber(Keys.a)}
            style={styles.pressable}
          >
            <Text style={styles.pressableText}>sub</Text>
          </Pressable>
          <Text>A: {numbers.a}</Text>
          <Pressable onPress={() => addNumber(Keys.a)} style={styles.pressable}>
            <Text style={styles.pressableText}>add</Text>
          </Pressable>
        </View>
        <View style={styles.numbersRow}>
          <Pressable
            onPress={() => subtractNumber(Keys.b)}
            style={styles.pressable}
          >
            <Text style={styles.pressableText}>sub</Text>
          </Pressable>
          <Text>B: {numbers.b}</Text>
          <Pressable onPress={() => addNumber(Keys.b)} style={styles.pressable}>
            <Text style={styles.pressableText}>add</Text>
          </Pressable>
        </View>
      </View>
      <Pressable style={styles.pressable} onPress={getResult}>
        <Text style={styles.pressableText}>Get result</Text>
      </Pressable>
      <Text style={[styles.margin, styles.title]}>
        Device name: {deviceName}
      </Text>
      <Pressable style={styles.pressable} onPress={getName}>
        <Text style={styles.pressableText}>Get device name</Text>
      </Pressable>
      <Text style={[styles.margin, styles.text]}>TextInput value: {value}</Text>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={PLACEHOLDER}
        style={styles.textInput}
      />
      <Pressable style={styles.pressable} onPress={logValue} disabled={!value}>
        <Text style={styles.pressableText}>Log value ;)</Text>
      </Pressable>
      <Text style={styles.margin}>{DISCLAIMER}</Text>
    </View>
  );
}
