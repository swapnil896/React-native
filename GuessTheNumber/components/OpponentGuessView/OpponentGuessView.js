import { StyleSheet, View, Text, FlatList } from "react-native";
import TitleView from "../TitleView";
import PredictionView from "./PredictionView";
import GuessItem from "./GuessItem";
import Colors from "../../constants/Colors";
import { useState } from "react";

const OpponentGuessView = (props) => {
    const initialGuess = getRandomIntInRange(1, 99);
    const [currentNumber, setCurrentNumber] = useState(initialGuess);
    const [listData, setListData] = useState(
        [
            {
                id: 1,
                score: currentNumber
            }
        ]
    );

    function getRandomIntInRange(min, max) {
        min = Math.ceil(min); // Ensure min is an integer
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const lowerActionHandler = () => {
        const lowerNumber = getRandomIntInRange(parseInt(props.enteredNumber), currentNumber);
        setCurrentNumber(lowerNumber.toString());
        setListData((currentListData) => [
            ...currentListData,
            {
                id: currentListData.length + 1,
                score: currentNumber
            }
        ])
    }

    const higherActionHandler = () => {
        const higherNumber = getRandomIntInRange(currentNumber, parseInt(props.enteredNumber));
        setCurrentNumber(higherNumber.toString());
        setListData((currentListData) => [
            ...currentListData,
            {
                id: currentListData.length + 1,
                score: currentNumber
            }
        ]);
    }

    return (
        <View style={styles.containerView}>
            <TitleView>Opponent's Guess</TitleView>
            <View style={styles.answerView}>
                <Text style={styles.answerText}>{currentNumber.toString() + ' / ' + props.enteredNumber}</Text>
            </View>
            <PredictionView onTapLower={lowerActionHandler} onTapHigher={higherActionHandler} />
            <View>
                <FlatList
                    data={listData}
                    renderItem={({ item }) => <GuessItem indexNumber={item.id} guessedNumber={item.score.toString()} />}
                    keyExtractor={item => item.id}
                />
            </View>
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
        borderColor: Colors.secondary,
        width: '60%',
        height: '20%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    answerText: {
        fontSize: 60,
        color: Colors.secondary,
    }
});