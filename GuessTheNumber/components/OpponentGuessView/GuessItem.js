import { StyleSheet, View, Text } from "react-native";
import Colors from "../../constants/Colors";

const GuessItem = (props) => {
    return (
        <View style={styles.containerView}>
            <View style={styles.dataView}>
                <Text style={styles.textViewNumber}>#{props.indexNumber}</Text>
                <Text style={styles.textViewValue}>Opponent's Guess: {props.guessedNumber}</Text>
            </View>
        </View>
    );
};

export default GuessItem;

const styles = StyleSheet.create({
    containerView: {
        width: '90%',
        backgroundColor: Colors.secondary,
        borderWidth: 1,
        borderColor: Colors.black,
        borderRadius: 30,
        padding: 10,
        margin: 10
    },
    dataView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textViewNumber: {
        fontSize: 16,
        textAlign: 'left'
    },
    textViewValue: {
        fontSize: 16,
        textAlign: 'right',
        width: '90%'
    }
});