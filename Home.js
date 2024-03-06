import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri:'https://profile.ilakshyaerp.in/profile/5006/749ae5f9-3ea2-425c-9365-e003307c65a0'}}
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default Home;
