import { StyleSheet, View, Text } from 'react-native';

const GoalItem = ({ value }) => {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{value}</Text>
        </View>
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