import { StyleSheet, TextInput, View } from "react-native";

const NumberTextInput = (props) => {

    const textChangeHandler = (value) => {
        props.onChangeText(value);
    }

    return (
        <View style={styles.containerView}>
            <TextInput
                inputMode='numeric'
                style={styles.textInputView}
                value={props.textValue}
                onChangeText={textChangeHandler}
            >
            </TextInput>
        </View>
    );
};

export default NumberTextInput;

const styles = StyleSheet.create({
    containerView: {
        borderBottomWidth: 2,
        borderBottomColor: '#e6b800',
        margin: 8,
        width: 25
    },
    textInputView: {
        color: '#e6b800',
    },
});