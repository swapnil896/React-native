import { StyleSheet, TextInput } from "react-native";
import Colors from "../../constants/Colors";

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
        color: Colors.secondary,
        borderBottomWidth: 2,
        borderBottomColor: Colors.secondary,
        width: 50,
        height: 60,
        margin: 8,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 32
    },
});