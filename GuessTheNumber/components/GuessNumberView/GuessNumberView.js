import { StyleSheet, View } from "react-native";
import TitleView from "../TitleView";
import GamingView from "./GamingView";

const GuessNumberView = (props) => {

    const resetActionHandler = () => {
        props.onResetPress();
    }

    const confirmActionHandler = () => {
        props.onConfirmPress();
    }

    return (
        <View style={styles.container}>
            <TitleView>Guess My Number</TitleView>
            <GamingView onResetPress={resetActionHandler} onConfirmPress={confirmActionHandler} />
        </View>
    );
};

export default GuessNumberView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 120
    },
});