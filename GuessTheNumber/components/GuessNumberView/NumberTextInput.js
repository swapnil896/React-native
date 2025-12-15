import { StyleSheet, TextInput } from "react-native";

const NumberTextInput = (props) => {

    const textChangeHandler = (value) => {
        props.onChangeText(value);
    }

    return (
        <TextInput
            keyboardType='numeric'
            maxLength={2}
            style={styles.textInputView}
            value={props.textValue}
            onChangeText={textChangeHandler}
        >
        </TextInput>
    );
};

export default NumberTextInput;

const styles = StyleSheet.create({
    textInputView: {
        color: '#e6b800',
        borderBottomWidth: 2,
        borderBottomColor: '#e6b800',
        width: 50,
        height: 60,
        margin: 8,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 32
    },
});