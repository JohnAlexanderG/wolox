import React from 'react';
// react-native
import { 
    View,
    Text,
    StyleSheet,
    Pressable,
    useWindowDimensions,
} from 'react-native';
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
        backgroundColor: '#03a9f4',
        height: 60,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    btnLogoutText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fefefe',
    }
});

export default Logout