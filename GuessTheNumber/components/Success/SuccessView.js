import { View, StyleSheet, Text } from "react-native";
import ActionButton from "../ActionButton";
import Colors from "../../constants/Colors";

const SuccessView = ({ onRestartTap }) => {
    return (
        <View style={styles.containerView}>
            <Text style={styles.text}>You Won! Congrats</Text>
            <ActionButton title='Restart' onPress={onRestartTap} />
        </View>
    );
};

export default SuccessView;

const styles = StyleSheet.create({
    containerView: {
        padding: 50,
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    text: {
        color: Colors.white,
        fontSize: 30,
        fontWeight: 'bold',
        borderWidth: 5,
        borderColor: '#47d147',
        borderRadius: 35,
        padding: 20,
        marginBottom: 30
    }
});