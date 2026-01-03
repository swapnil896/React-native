import { StyleSheet, View, Text, FlatList } from "react-native";
import TitleView from "../TitleView";
import PredictionView from "./PredictionView";
import GuessItem from "./GuessItem";
import Colors from "../../constants/Colors";
import { useState } from "react";

const OpponentGuessView = ({ enteredNumber, onSuccessfulGuess }) => {
    const initialGuess = getRandomIntInRange(1, 99);
    const [currentNumber, setCurrentNumber] = useState(initialGuess);
    const [listData, setListData] = useState([]);

    function getRandomIntInRange(min, max) {
        min = Math.ceil(min); // Ensure min is an integer
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const lowerActionHandler = () => {
        const lowerNumber = getRandomIntInRange(parseInt(enteredNumber), currentNumber);
        setCurrentNumber(lowerNumber.toString());
        if (lowerNumber === parseInt(enteredNumber)) {
            // show Success view
            onSuccessfulGuess();
        } else {
            setListData((currentListData) => [
                ...currentListData,
                {
                    id: currentListData.length + 1,
                    score: currentNumber
                }
            ])
        }
    }

    const higherActionHandler = () => {
        const higherNumber = getRandomIntInRange(currentNumber, parseInt(enteredNumber));
        setCurrentNumber(higherNumber.toString());

        if (higherNumber === parseInt(enteredNumber)) {
            // Show Success view
            onSuccessfulGuess();
        } else {
            setListData((currentListData) => [
                ...currentListData,
                {
                    id: currentListData.length + 1,
                    score: currentNumber
                }
            ]);
        }
    }

    return (
        <View style={styles.containerView}>
            <TitleView>Opponent's Guess</TitleView>
            <View style={styles.answerView}>
                <Text style={styles.answerText}>{currentNumber.toString() + ' / ' + enteredNumber}</Text>
            </View>
            <PredictionView onTapLower={lowerActionHandler} onTapHigher={higherActionHandler} />
            <View style={styles.listContainerView}>
                <FlatList
                    data={listData}
                    renderItem={({ item }) => <GuessItem indexNumber={item.id} guessedNumber={item.score} />}
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
        paddingTop: 70,
        paddingBottom: 20
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
    },
    listContainerView: {
        width: '90%',
        paddingBottom: 20
    }
});