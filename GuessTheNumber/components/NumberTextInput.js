import { StyleSheet, TextInput, View } from "react-native";

const NumberTextInput = () => {
    return (
        <View style={styles.containerView}>
            <TextInput
                inputMode='numeric'
                placeholder="  "
                style={styles.textInputView}
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
        margin: 8
    },
    textInputView: {
        color: '#e6b800',
    },
});