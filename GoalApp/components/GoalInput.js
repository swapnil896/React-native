import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from "react";

const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <View style={styles.goalTextArea}>
            <TextInput
                style={styles.textInput}
                placeholder='Enter your Goal'
                onChangeText={goalInputHandler}
                value={enteredGoal} />
            <Button title='Add Goal' onPress={addGoalHandler} />
        </View>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
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
});