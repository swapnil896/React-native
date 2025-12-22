import { Pressable, StyleSheet, View, Text } from "react-native";
import Colors from "../constants/Colors";

const ActionButton = (props) => {

    const actionButtonHandler = () => {
        props.onPress();
    }

    return (
        <Pressable onPress={actionButtonHandler} android_ripple={{ color: '#ffcc00' }} >
            <View style={styles.containerView}>
                <Text style={styles.textView}>{props.title}</Text>
            </View>
        </Pressable>
    );
};

export default ActionButton;

const styles = StyleSheet.create({
    containerView: {
        backgroundColor: Colors.primary500,
        paddingVertical: 10,
        paddingHorizontal: 50,
        margin: 8,
        borderRadius: 20
    },
    textView: {
        color: Colors.white
    }
});