import * as React from 'react';

import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import {
  multiply,
  getWifiInfo,
  logSomethingInJavaConsole,
} from 'react-native-example-module';

import styles from './styles';

const DEFAULT_VALUE = 'Default value to log on Java Console';
const PLACEHOLDER = 'Write what ever you want to log :)';
const DISCLAIMER =
  '*REMEMBER: To see logs on Java Console just run $ adb logcat in the root of this project';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();
  const [wifiInfo, setWifiInfo] = React.useState<string | null>(null);
  const [value, setValue] = React.useState<string>(DEFAULT_VALUE);

  React.useEffect(() => {
    multiply(3, 7).then(setResult);
    getWifiInfo().then(setWifiInfo);
  }, []);

  const logValue = () => {
    logSomethingInJavaConsole(value);
    console.warn(`Logged: ${value} *=== Check your Java Console ;) ===*`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.margin}>Result: {result}</Text>
      <Text style={styles.margin}>WifiInfo: {wifiInfo}</Text>
      <Text style={[styles.margin, styles.text]}>TextInput value: {value}</Text>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={PLACEHOLDER}
        style={styles.textInput}
      />
      <TouchableOpacity style={styles.touchableOpacity} onPress={logValue}>
        <Text style={styles.touchableText}>Log value ;)</Text>
      </TouchableOpacity>
      <Text style={styles.margin}>{DISCLAIMER}</Text>
    </View>
  );
}
