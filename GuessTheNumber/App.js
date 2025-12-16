import { StyleSheet, ImageBackground } from 'react-native';
import { useState } from 'react';
import GuessNumberView from './components/GuessNumberView/GuessNumberView';
import OpponentGuessView from './components/OpponentGuessView/OpponentGuessView';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [showOpponentsGuessView, setShowOpponentsGuessView] = useState(false);
  const [guessedAns, setGuessedAns] = useState('');

  const resetActionHandler = () => {

  }

  const confirmActionHandler = () => {
    const guessedAns = getRandomIntInRange(1, 99);
    setGuessedAns(guessedAns.toString());
    setShowOpponentsGuessView(true);
  }

  function getRandomIntInRange(min, max) {
    min = Math.ceil(min); // Ensure min is an integer
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let screen = <GuessNumberView
    onResetPress={resetActionHandler}
    onConfirmPress={confirmActionHandler}
  />

  if (showOpponentsGuessView) {
    screen = <OpponentGuessView guessedAnswer={guessedAns} />
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
        {screen}
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
