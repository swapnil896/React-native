import { Pressable, StyleSheet, View, Text } from "react-native";

const ActionButton = (props) => {

    const actionButtonHandler = () => {
        props.onPress();
    }

    return (
        <Pressable onPress={actionButtonHandler} >
            <View style={styles.containerView}>
                <Text style={styles.textView}>{props.title}</Text>
            </View>
        </Pressable>
    );
};

export default ActionButton;

const styles = StyleSheet.create({
    containerView: {
        backgroundColor: '#cc0044',
        paddingVertical: 10,
        paddingHorizontal: 50,
        margin: 8,
        borderRadius: 20
    },
    textView: {
        color: '#ffffff'
    }
});