import React, { useState } from 'react';
// react-native
import {
    View,
    Text,
    TextInput,
    Pressable,
    StyleSheet,
    useWindowDimensions,
    Alert
} from 'react-native';
// react-native-community
import CheckBox from '@react-native-community/checkbox';
// react-native-picker
import { Picker } from '@react-native-picker/picker';
// themes
import { colors } from '../themes/colors';
// utils
import Storage from '../utils/AsyncStorage';
import { logIn, signUp } from '../utils/access';

interface Ages {
    label: string;
    value: string;
}

const ages: Ages[] = require('wolox/assets/ages.json');

const FormAccessContent = ({ isLoginActived, navigation }: {
    isLoginActived: any;
    navigation: any;
}) => {

    const { width } = useWindowDimensions();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [selectedAge, setSelectedAge] = useState();

    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const onPressableHandleAccess = async () => {
        let access;
        if (isLoginActived) {
            if (email.includes('@') && password.length > 0 && toggleCheckBox == true) {
                const { access, message } = await logIn(email, password, toggleCheckBox);
                if (access) {
                    message
                    Alert.alert(
                        "Sorry,",
                        message,
                        [
                            {
                                text: "Ok",
                                onPress: () => {
                                    navigation.navigate('library');
                                    Storage.instance.store('logIn', JSON.stringify(true));
                                    Storage.instance.get('logIn');
                                },
                                style: "default",
                            },
                        ],
                    );
                } else {

                }
            }
        } else {
            access = await signUp(firstName, lastName, email, password, toggleCheckBox);
            if (access) {
            } else {
                Alert.alert(
                    "Sorry,",
                    `we are unable to process your request at this time.`,
                    [
                        {
                            text: "Ok",
                            onPress: () => { },
                            style: "default",
                        },
                    ],
                );
            }
        }
    }
    
    return (
        <View>
            {
                !isLoginActived ? (
                    <>
                        <TextInput
                            style={{
                                ...styles.textInput,
                                width: width * 0.8,
                            }}
                            selectionColor={colors.secondary}
                            placeholder='firts name'
                            placeholderTextColor='white'
                            value={firstName}
                            onChangeText={value => setFirstName(value)}
                        />
                        <TextInput
                            style={{
                                ...styles.textInput,
                                width: width * 0.8,
                            }}
                            selectionColor={colors.secondary}
                            placeholder='last name'
                            placeholderTextColor='white'
                            value={lastName}
                            onChangeText={value => setLastName(value)}
                        />
                        <View style={styles.chooseYear}>
                            <Text style={styles.chooseYearTitle}>Choose your year of birth</Text>
                            <Picker
                                selectedValue={selectedAge}
                                onValueChange={(itemValue, itemIndex) =>
                                    setSelectedAge(itemValue)
                                }>
                                {ages.map((item: any) => {
                                    return <Picker.Item style={{ color: colors.secondary }} key={`item-${item.value}`} label={item.label} value={item.value} />
                                })}
                            </Picker>
                        </View>
                    </>
                ) : null
            }
            <TextInput
                style={{
                    ...styles.textInput,
                    width: width * 0.8,
                }}
                selectionColor={colors.secondary}
                placeholder='your@email.com'
                placeholderTextColor='white'
                value={email}
                onChangeText={value => setEmail(value)}
            />
            <TextInput
                style={{
                    ...styles.textInput,
                    width: width * 0.8,
                }}
                secureTextEntry
                selectionColor={colors.secondary}
                placeholder='password'
                placeholderTextColor='white'
                value={password}
                onChangeText={value => setPassword(value)}
            />
            <View style={[
                styles.btnSubmit,
                email.includes('@') && password.length > 0 && toggleCheckBox ? styles.btnSubmitActived : null
            ]}>
                <Pressable onPress={onPressableHandleAccess}>
                    <Text style={[
                        styles.btnSubmitText,
                        email.includes('@') && password.length > 0 && toggleCheckBox ? styles.btnSubmitTextActived : null,
                    ]}>{isLoginActived ? 'Log in' : 'Sing up'}</Text>
                </Pressable>
            </View>
            <View style={styles.termsAndConditions}>
                <CheckBox
                    tintColors={{ true: colors.secondary, false: 'rgba(227,242,253, 0.60)' }}
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                />
                <Text style={styles.termsAndConditionsText} >I have read and accept the terms and conditions</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: colors.blue25,
        marginBottom: 15,
        color: colors.white,
        paddingLeft: 16,
    },
    btnSubmit: {
        backgroundColor: colors.secondary_disabled,
        height: 60,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnSubmitActived: {
        backgroundColor: colors.secondary,
    },
    btnSubmitText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.white50,
    },
    btnSubmitTextActived: {
        color: colors.white,
    },
    chooseYear: {
        backgroundColor: colors.blue25,
        marginBottom: 15
    },
    chooseYearTitle: {
        color: colors.white,
        marginTop: 8,
        paddingLeft: 16
    },
    loginGuest: {
        backgroundColor: colors.secondary,
        height: 60,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginGuestText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.white,
    },
    separator: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        marginTop: 15,
        marginBottom: 15
    },
    separatorText: {

    },
    termsAndConditions: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
    },
    termsAndConditionsText: {
        fontSize: 12
    },
});


export default FormAccessContent
