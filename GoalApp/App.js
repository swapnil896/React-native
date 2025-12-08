import { use, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goalsList, setGoalsList] = useState([]);

  const addGoalHandler = (enteredGoal) => {
    setGoalsList((currentGoalsList) => [
      ...currentGoalsList,
      {
        id: Math.random().toString(),
        text: enteredGoal
      }
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsView}>
        <FlatList
          data={goalsList}
          renderItem={(itemData) => {
            return (
              <GoalItem value={itemData.item.text} />
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
  goalsView: {
    flex: 5
  },
});
