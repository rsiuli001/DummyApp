package com.investec;

import android.os.Build;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Locale;

public class CustomModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactApplicationContext;
    CustomModule(ReactApplicationContext context) {
        super(context);
        reactApplicationContext = context;
    }

    @ReactMethod
    public void getDeviceType(Callback callback) {

        try {
            if( android.os.Build.FINGERPRINT.startsWith("generic")
                    || android.os.Build.FINGERPRINT.startsWith("unknown")
                    || android.os.Build.MODEL.contains("google_sdk")
                    || android.os.Build.MODEL.toLowerCase(Locale.ROOT).contains("droid4x")
                    || android.os.Build.MODEL.contains("Emulator")
                    || android.os.Build.MODEL.contains("Android SDK built for x86")
                    || android.os.Build.MANUFACTURER.contains("Genymotion")
                    || android.os.Build.HARDWARE.contains("goldfish")
                    || android.os.Build.HARDWARE.contains("ranchu")
                    || android.os.Build.HARDWARE.contains("vbox86")
                    || android.os.Build.PRODUCT.contains("sdk")
                    || android.os.Build.PRODUCT.contains("google_sdk")
                    || android.os.Build.PRODUCT.contains("sdk_google")
                    || android.os.Build.PRODUCT.contains("sdk_x86")
                    || android.os.Build.PRODUCT.contains("vbox86p")
                    || android.os.Build.PRODUCT.contains("emulator")
                    || android.os.Build.PRODUCT.contains("simulator")
                    || android.os.Build.BOARD.toLowerCase(Locale.ROOT).contains("nox")
                    || android.os.Build.BOOTLOADER.toLowerCase(Locale.ROOT).contains("nox")
                    || android.os.Build.HARDWARE.toLowerCase(Locale.ROOT).contains("nox")
                    || android.os.Build.PRODUCT.toLowerCase(Locale.ROOT).contains("nox")
                    || android.os.Build.SERIAL.toLowerCase(Locale.ROOT).contains("nox")
                    || (android.os.Build.BRAND.startsWith("generic") && android.os.Build.DEVICE.startsWith("generic"))) {
                callback.invoke(true);
            } else{
                callback.invoke(false);
            }

        } catch (Exception e) {
            callback.invoke(null);
        }
    }
    @NonNull
    @Override
    public String getName() {
        return "CustomModule";
    }
}
