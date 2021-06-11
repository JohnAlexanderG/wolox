import React, { useState } from 'react';
import { View, useWindowDimensions, StyleSheet } from 'react-native';

import { colors } from '../themes/colors';

import FormAccesHeaderBtns from './formAccesHeaderBtns';
import FormAccessContent from './formAccessContent';

const FormAccess = ({ navigation }: { navigation: any }) => {

    const { width, height } = useWindowDimensions();

    const [isLoginActived, setIsLoginActived] = useState(true);
    
    return (
        <View style={{ ...styles.formLogin, height: height - 140, }}>
            <View style={{ ...styles.formLoginAccessed, width: width * 0.90, }}>
                <FormAccesHeaderBtns isLoginActived={isLoginActived} setIsLoginActived={setIsLoginActived} />
                <FormAccessContent isLoginActived={isLoginActived} navigation={navigation} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    formLogin: {
        flexDirection: 'column',
    },
    formLoginAccessed: {
        backgroundColor: colors.white25,
        borderRadius: 20,
        paddingBottom: 20,
        alignItems: 'center',
    },
});

export default FormAccess;
