package com.examplemodule;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

import android.content.Context;
import java.util.logging.Level;
import java.util.logging.Logger;

import android.os.Build;


@ReactModule(name = ExampleModuleModule.NAME)
public class ExampleModuleModule extends ReactContextBaseJavaModule {
  public static final String NAME = "ExampleModule";
    private final static Logger LOGGER = Logger.getLogger("com.examplemodule");

  public ExampleModuleModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }

  @ReactMethod
  public void multiply(double a, double b, Promise promise) {
    promise.resolve(a * b);
  }

  @ReactMethod
  public void logValueOnDevice(String value, Promise promise) {
    LOGGER.log(Level.INFO, value);
    promise.resolve(value);
  }


  @ReactMethod
  public void getDeviceName(Promise p) { p.resolve(Build.DEVICE); }
}
