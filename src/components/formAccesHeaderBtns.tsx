import React from 'react';
import { View, Text, StyleSheet, Pressable, useWindowDimensions } from 'react-native';
import { colors } from '../themes/colors';

const FormAccesHeaderBtns = ({ isLoginActived, setIsLoginActived }: {
    isLoginActived: any;
    setIsLoginActived: any;
}) => {
    const { width } = useWindowDimensions();
    const onPressableHandle = () => {
        setIsLoginActived(!isLoginActived);
    }
    return (
        <View
            style={{
                ...styles.formLoginAccessedBtnWrapper,
                width: width * 0.80,
            }}
        >
            <View style={[
                styles.formLoginAccessedBtn,
                isLoginActived ? styles.formLoginAccessedBtnActive : null,
            ]}>
                <Pressable onPress={onPressableHandle}>
                    <Text style={[
                        styles.formLoginAccessedText,
                        isLoginActived ? styles.formLoginAccessedTextActive : null,
                    ]}>Log in</Text>
                </Pressable>
            </View>
            <View
                style={[
                    styles.formLoginAccessedBtn,
                    isLoginActived ? null : styles.formLoginAccessedBtnActive,
                ]}
            >
                <Pressable onPress={onPressableHandle}>
                    <Text style={[
                        styles.formLoginAccessedText,
                        isLoginActived ? null : styles.formLoginAccessedTextActive,
                    ]}>Sign up</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    formLoginAccessedBtnWrapper: {
        backgroundColor: colors.white_secondary,
        height: 50,
        borderRadius: 20,
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    formLoginAccessedBtn: {
        width: '50%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    formLoginAccessedBtnActive: {
        backgroundColor: colors.secondary,
        borderRadius: 20,
    },
    formLoginAccessedText: {
        fontSize: 16,
        color: colors.textColorBlack,
    },
    formLoginAccessedTextActive: {
        color: colors.white,
    },
});

export default FormAccesHeaderBtns;
