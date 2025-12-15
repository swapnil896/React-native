import { StyleSheet, View, Text } from "react-native";

const TitleView = (props) => {
    return (
        <View style={styles.containerView}>
            <Text style={styles.textView}>{props.children}</Text>
        </View>
    );
};

export default TitleView;

const styles = StyleSheet.create({
    containerView: {
        borderWidth: 2.5,
        borderColor: '#ffffff',
        padding: 16,
        alignItems: 'center',
        marginBottom: 30
    },
    textView: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#ffffff'
    }
});