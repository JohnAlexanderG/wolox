import React from 'react';
// react-native
import { 
    View,
    Text,
    StyleSheet,
    Pressable,
    useWindowDimensions,
} from 'react-native';
import { colors } from '../themes/colors';
// Storage - AsyncStorage
import Storage from '../utils/AsyncStorage';

function Logout({ navigation }: { navigation: any }) {
    const { width } = useWindowDimensions();

    const onPressableHandleLogout = () => {
        Storage.instance.remove('logIn');
        navigation.navigate('login');
    }
    
    return (
        <View style={{ ...styles.btnLogout, marginHorizontal: width * 0.1 }}>
            <Pressable onPress={onPressableHandleLogout}>
                <Text style={styles.btnLogoutText}>Logout</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    btnLogout: {
        backgroundColor: colors.primary,
        height: 60,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    btnLogoutText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.white,
    }
});

export default Logout