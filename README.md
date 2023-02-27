# react-native-example-module

Example React Native module

## Installation

```sh
yarn react-native-example-module
```

## Usage

```js
import {
  multiply,
  getDeviceName,
  logSomethingInJavaConsole,
} from 'react-native-example-module';

// Return the multiplied result
const result = await multiply(3, 7);

// Return your device name
const deviceName = await getDeviceName();

// Return the string you've just logged on your device console
const loggedValue = await logValueOnDevice("Any string you wanna log");
``


## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
```
