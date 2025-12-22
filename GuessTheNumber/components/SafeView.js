import { SafeAreaView } from 'react-native-safe-area-context';

const SafeView = ({ children }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
    );
};

export default SafeView;