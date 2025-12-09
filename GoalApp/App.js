import { use, useState } from 'react';
import { Button, FlatList, StyleSheet, View, StatusBar } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goalsList, setGoalsList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const addGoalHandler = (enteredGoal) => {
    setGoalsList((currentGoalsList) => [
      ...currentGoalsList,
      {
        id: Math.random().toString(),
        text: enteredGoal
      }
    ]);
    cancelGoalHandler();
  };

  const deleteGoalHandler = (id) => {
    console.log("Delete");
    setGoalsList((currentGoalsList) => {
      return currentGoalsList.filter(goal => goal.id !== id);
    });
  }

  const addNewGoalHandler = () => {
    setIsModalVisible(true);
  }

  const cancelGoalHandler = () => {
    setIsModalVisible(false);
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <View style={styles.addGoalView}>
          <Button title='Add New Goal' onPress={addNewGoalHandler} color={'#ff3300'} />
        </View>
        <GoalInput
          onAddGoal={addGoalHandler}
          isVisible={isModalVisible}
          onCancelGoal={cancelGoalHandler}
        />
        <View style={styles.goalsView}>
          <FlatList
            data={goalsList}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  value={itemData.item}
                  onDeleteItem={deleteGoalHandler}
                />
              )
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View >
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#ffd6cc',
    padding: 80,
    paddingHorizontal: 16
  },
  goalsView: {
    flex: 5
  },
  modal: {
    backgroundColor: '#dddddd'
  },
  addGoalView: {
    borderWidth: 1.5,
    height: 40,
    borderColor: '#000000',
    borderRadius: 8
  }
});
