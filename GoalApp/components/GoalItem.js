import { StyleSheet, View, Text, Pressable } from 'react-native';

const GoalItem = ({ value, onDeleteItem }) => {
    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{ color: '#dddddd' }}
                onPress={onDeleteItem.bind(this, value.id)}
                style={(pressedData) => pressedData.pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}>{value.text}</Text>
            </Pressable>
        </View >
    );
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        backgroundColor: "#801a00",
        color: 'white',
        borderRadius: 10
    },
    pressedItem: {
        opacity: 0.5
    },
    goalText: {
        color: 'white',
        padding: 8
    },
});