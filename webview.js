import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet, Text, View } from 'react-native';

export default function webview() {
  return (
    <View style={{flex:1}}>
      <StatusBar hidden />
      <WebView source={{ uri: 'https://localhost/app-gallery' }} />
    </View>
  );
}
