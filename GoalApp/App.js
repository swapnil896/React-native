import { use, useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [goalsList, setGoalsList] = useState([]);

  const addGoalHandler = () => {
    setGoalsList((currentGoalsList) => [
      ...currentGoalsList,
      {
        id: Math.random().toString(),
        text: enteredGoal
      }
    ]);
  }

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.goalTextArea}>
        <TextInput style={styles.textInput} placeholder='Enter your Goal' onChangeText={goalInputHandler} />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsView}>
        <FlatList
          data={goalsList}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            )
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 50,
    paddingHorizontal: 16
  },
  goalTextArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 4
  },
  goalsView: {
    flex: 5
  },
  goalItem: {
    margin: 8,
    padding: 8,
    backgroundColor: "#5e0acc",
    color: 'white',
    borderRadius: 10
  },
  goalText: {
    color: 'white'
  },
});
