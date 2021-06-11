import React from 'react'
import { ImageBackground, SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native'

const LayoutLogin = ( { children }: { children: Element[] } ) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar barStyle='default' />
            <ScrollView contentInsetAdjustmentBehavior="automatic" >
                <ImageBackground
                    source={require('../../assets/general/bc_inicio.png')}
                    resizeMode='cover'
                    style={styles.imageBackground}
                >
                    { children }
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    imageBackground: {
      flex: 1,
      width: "100%",
      height: "100%",
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default LayoutLogin
