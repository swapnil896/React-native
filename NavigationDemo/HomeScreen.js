import { StyleSheet, View, Text } from "react-native";
import { Link, useNavigation } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";

const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Link screen="Details">Go to Details</Link>
            <Button screen="Cart">Tap to go to Cart</Button>
            <Button onPress={() => navigation.navigate('Details')}>Details with useNavigation</Button>
        </View>
    )
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});