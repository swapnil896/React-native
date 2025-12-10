import { StyleSheet, View, Text } from "react-native";

const GuessItem = (props) => {
    return (
        <View style={styles.containerView}>
            <View style={styles.dataView}>
                <Text style={styles.textView}>#{props.indexNumber}</Text>
                <Text style={styles.textView}>Opponent's Guess: {props.guessedNumber}</Text>
            </View>
        </View>
    );
};

export default GuessItem;

const styles = StyleSheet.create({
    containerView: {
        width: '80%',
        backgroundColor: '#e6b800',
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 30,
        padding: 10,
    },
    dataView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textView: {
        fontSize: 16,
    },
});