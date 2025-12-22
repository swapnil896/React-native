import { StyleSheet, View, Text } from "react-native";
import ActionButton from "../ActionButton";
import Colors from "../../constants/Colors";

const PredictionView = (props) => {

    const lowerActionHandler = () => {

    }

    const higherActionHandler = () => {

    }

    function getRandomIntInRange(min, max) {
        min = Math.ceil(min); // Ensure min is an integer
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
        <View style={styles.containerView}>
            <Text style={styles.textView}>Higher or Lower?</Text>
            <View style={styles.actionButtonsContainer}>
                <ActionButton title='-' onPress={lowerActionHandler} />
                <ActionButton title='+' onPress={higherActionHandler} />
            </View>
        </View>
    );
};

export default PredictionView;

const styles = StyleSheet.create({
    containerView: {
        width: '90%',
        paddingBottom: 20,
        backgroundColor: Colors.primary700,
        alignItems: 'center',
        borderRadius: 20,
        margin: 50
    },
    textView: {
        padding: 20,
        color: '#e6b800',
        fontSize: 20,
        fontWeight: '600'
    },
    actionButtonsContainer: {
        flexDirection: 'row',
    }
});