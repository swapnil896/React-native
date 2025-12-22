import { StyleSheet, ImageBackground } from 'react-native';
import { useState } from 'react';
import GuessNumberView from './components/GuessNumberView/GuessNumberView';
import OpponentGuessView from './components/OpponentGuessView/OpponentGuessView';
import { LinearGradient } from 'expo-linear-gradient';
import SafeView from './components/SafeView';

export default function App() {
  const [showOpponentsGuessView, setShowOpponentsGuessView] = useState(false);
  const [enteredNumber, setEnteredNumber] = useState(null);

  const resetActionHandler = () => {

  }

  const confirmActionHandler = (enteredNumber) => {
    setEnteredNumber(enteredNumber);
    setShowOpponentsGuessView(true);
  }

  let screen = <GuessNumberView
    onResetPress={resetActionHandler}
    onConfirmPress={confirmActionHandler}
  />

  if (showOpponentsGuessView) {
    screen = <OpponentGuessView enteredNumber={enteredNumber} />
  }

  return (
    <LinearGradient colors={['#80002a', '#e6b800']}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require('./assets/images/background.png')}
        style={styles.rootScreen}
        resizeMode='cover'
        imageStyle={styles.backgroundImage}
      >
        <SafeView>
          {screen}
        </SafeView>
      </ImageBackground >
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    opacity: 0.20,
  },
  rootScreen: {
    flex: 1
  }
});
