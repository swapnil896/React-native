import { StyleSheet, View, Text } from "react-native";

const TitleView = () => {
    return (
        <View style={styles.containerView}>
            <Text style={styles.textView}>Guess My Number</Text>
        </View>
    );
};

export default TitleView;

const styles = StyleSheet.create({
    containerView: {
        borderWidth: 2.5,
        borderColor: '#000000',
        padding: 16,
        alignItems: 'center',
        marginBottom: 30
    },
    textView: {
        fontSize: 30,
        fontWeight: 'bold'
    }
});