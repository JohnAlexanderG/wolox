import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

const Logo = () => {
    return (
        <View style={styles.logo}>
            <Image
                source={require('../../assets/general/wbooks_logo.png')}
                style={styles.logoImg}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 100,
        flex: 1,
        marginVertical: 20,
    },
    logoImg: {
        width: 100,
        height: 100,
    },
});

export default Logo
