import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TitleView from './components/TitleView';
import GamingView from './components/GamingView';

export default function App() {
  return (
    <View style={styles.container}>
      <TitleView />
      <GamingView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
