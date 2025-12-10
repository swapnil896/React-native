import { StyleSheet, View, Text } from "react-native";
import ActionButton from "./ActionButton";
import NumberTextInput from "./NumberTextInput";

const GamingView = () => {
    return (
        <View style={styles.containerView}>
            <Text style={styles.textView}>Enter a Number</Text>
            <NumberTextInput />
            <View style={styles.actionButtonsContainer}>
                <ActionButton title='Reset' />
                <ActionButton title='Confirm' />
            </View>
        </View>
    );
};

export default GamingView;

const styles = StyleSheet.create({
    containerView: {
        width: '90%',
        height: 200,
        backgroundColor: '#80002a',
        alignItems: 'center',
        borderRadius: 20
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