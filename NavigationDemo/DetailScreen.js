import { View, Text, StyleSheet } from "react-native";
import { Button } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";

const DetailScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>Detail screen</Text>
            <Button onPress={() => navigation.push('Details')}>Go to Details again</Button>
            <Button onPress={() => navigation.popTo('Home')}>Go to specific Home Screen</Button>
            <Button onPress={() => navigation.popToTop()}>Go to the top of stack</Button>
        </View>
    )
};

export default DetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});