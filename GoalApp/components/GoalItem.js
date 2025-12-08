import { StyleSheet, View, Text, Pressable } from 'react-native';

const GoalItem = ({ value, onDeleteItem }) => {

    const deleteGoalHandler = () => {
        onDeleteItem(value.id);
    }

    return (
        <Pressable onPress={deleteGoalHandler}>
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>{value.text}</Text>
            </View>
        </Pressable>
    );
};

export default GoalItem;

const styles = StyleSheet.create({
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