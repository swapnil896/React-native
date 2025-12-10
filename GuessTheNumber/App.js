import { StyleSheet, ImageBackground } from 'react-native';
import { useState } from 'react';
import GuessNumberView from './components/GuessNumberView/GuessNumberView';
import OpponentGuessView from './components/OpponentGuessView/OpponentGuessView';

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

  return (
    <ImageBackground source={require('./assets/images/background.png')} style={styles.image} >
      {showOpponentsGuessView ?
        <OpponentGuessView guessedAnswer={guessedAns} /> :
        <GuessNumberView
          onResetPress={resetActionHandler}
          onConfirmPress={confirmActionHandler}
        />}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1
  }
});
