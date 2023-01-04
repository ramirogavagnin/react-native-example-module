import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-example-module' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const ExampleModule = NativeModules.ExampleModule
  ? NativeModules.ExampleModule
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return ExampleModule.multiply(a, b);
}

export const getWifiInfo = (): Promise<string | null> =>
  ExampleModule.getWifiInfo();

export const logSomethingInJavaConsole = (value: string): Promise<string> =>
  ExampleModule.logSomethingOnJavaConsole(value);
