import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import Cart from './Cart';

const RootStack = createNativeStackNavigator({
    initialRouteName: 'Home',
    screens: {
        Home: {
            screen: HomeScreen,
            options: {
                title: 'Overview'
            },
        },
        Details: {
            screen: DetailScreen,
            options: {
                title: 'Detail'
            }
        },
        Cart: {
            screen: Cart,
            options: {
                title: 'Cart'
            }
        }
    }
})

export const Navigation = createStaticNavigation(RootStack);