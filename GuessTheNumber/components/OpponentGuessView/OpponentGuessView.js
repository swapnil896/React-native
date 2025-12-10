import { StyleSheet, View, Text, FlatList } from "react-native";
import TitleView from "../TitleView";
import PredictionView from "./PredictionView";
import GuessItem from "./GuessItem";

const OpponentGuessView = (props) => {
    return (
        <View style={styles.containerView}>
            <TitleView title="Opponent's Guess" />
            <View style={styles.answerView}>
                <Text style={styles.answerText}>{props.guessedAnswer}</Text>
            </View>
            <PredictionView />
            <GuessItem />
        </View>
    );
};

export default OpponentGuessView;

const styles = StyleSheet.create({
    containerView: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 70
    },
    answerView: {
        borderWidth: 3,
        borderColor: '#e6b800',
        width: '60%',
        height: '20%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    answerText: {
        fontSize: 60,
        color: '#e6b800',
    }
});