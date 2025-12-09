import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";
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
        <Modal
            visible={props.isVisible}
            animationType='slide'
        >
            <View style={styles.goalTextArea}>
                <Image source={require('../assets/images/goal.png')} style={styles.image} />
                <TextInput
                    style={styles.textInput}
                    placeholder='Enter your Goal'
                    placeholderTextColor={{ color: '#000000' }}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.actionButtonsContainer}>
                    <View style={styles.actionButton}>
                        <Button title='Cancel' onPress={props.onCancelGoal} color={'#e62e00'} />
                    </View>
                    <View style={styles.actionButton}>
                        <Button title='Add Goal' onPress={addGoalHandler} color={'#000000'} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    goalTextArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff6666'
    },
    textInput: {
        borderWidth: 2,
        borderColor: '#000000',
        borderRadius: 8,
        width: '90%',
        height: 45,
        padding: 10,
        color: '#000000',
        backgroundColor: '#ffffff'

    },
    actionButtonsContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    actionButton: {
        width: '30%',
        marginHorizontal: 8
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
});