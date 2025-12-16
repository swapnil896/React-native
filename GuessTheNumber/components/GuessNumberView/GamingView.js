import { StyleSheet, View, Text, Alert } from "react-native";
import ActionButton from "../ActionButton";
import NumberTextInput from "./NumberTextInput";
import { useState } from "react";

const GamingView = (props) => {
    const [number, setNumber] = useState('');

    const resetActionHandler = () => {
        setNumber('');
        props.onResetPress();
    }

    const textChangeHandler = (value) => {
        setNumber(value);
    }

    const confirmActionHandler = () => {
        const enteredNumber = parseInt(number);
        if (isValidNumber(enteredNumber)) {
            props.onConfirmPress();
        } else {
            Alert.alert(
                'Invalid Number!',
                'Please enter a number between 1 and 99',
                [
                    {
                        text: 'Okay',
                        style: 'default',
                        onPress: resetActionHandler
                    }
                ]
            )
        }
    }

    const isValidNumber = (number) => {
        return (number > 0 && number < 100);
    }

    return (
        <View style={styles.containerView}>
            <Text style={styles.textView}>Enter a Number</Text>
            <NumberTextInput textValue={number} onChangeText={textChangeHandler} />
            <View style={styles.actionButtonsContainer}>
                <ActionButton title='Reset' onPress={resetActionHandler} />
                <ActionButton title='Confirm' onPress={confirmActionHandler} />
            </View>
        </View>
    );
};

export default GamingView;

const styles = StyleSheet.create({
    containerView: {
        width: '90%',
        paddingBottom: 20,
        backgroundColor: '#80002a',
        alignItems: 'center',
        borderRadius: 20,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 6
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