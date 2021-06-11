import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  useWindowDimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Pressable,
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';

import CheckBox from '@react-native-community/checkbox';
import { Picker } from '@react-native-picker/picker';

interface Ages {
  label: string;
  value: string;
}

const ages: Ages[] = require('wolox/assets/ages.json');
import { logIn, signUp } from '../utils/access';

import Storage from '../utils/AsyncStorage';
import { colors } from '../themes/colors';
import { color } from 'react-native-reanimated';

const LoginScreen = ({ navigation }: { navigation: any }) => {

  const { width, height } = useWindowDimensions();

  const [firstName, setFirstName] = useState('John Alexander');
  const [lastName, setLastName] = useState('Gil Beltran');
  const [email, setEmail] = useState('johnalexand3rg@gmail.com');
  const [password, setPassword] = useState('asd123qwe456');

  const [isLoginActived, setIsLoginActived] = useState(true);

  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [selectedAge, setSelectedAge] = useState();


  const onPressableHandle = () => {
    setIsLoginActived(!isLoginActived);
  }

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
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle='default' />
      <ScrollView contentInsetAdjustmentBehavior="automatic" >
        <ImageBackground
          source={require('../../assets/general/bc_inicio.png')}
          resizeMode='cover'
          style={styles.imageBackground}
        >
          <View style={styles.logo}>
            <Image
              source={require('../../assets/general/wbooks_logo.png')}
              style={styles.logoImg}
            />
          </View>
          <View style={{
            ...styles.formLogin,
            height: height - 140,
          }}>
            <View
              style={{
                ...styles.formLoginAccessed,
                width: width * 0.90,
              }}
            >
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
                {/* {isLoginActived ? (
              <>
                <View style={styles.separator}>
                  <Text style={styles.separatorText}>Or</Text>
                </View>
                <View style={styles.loginGuest}>
                  <Text style={styles.loginGuestText}>Login as a guest</Text>
                </View>
              </>
            ) : null} */}
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
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
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
  logo: {
    width: 100,
    flex: 1,
    marginVertical: 20,
  },
  logoImg: {
    width: 100,
    height: 100,
  },
  formLogin: {
    flexDirection: 'column',
  },
  formLoginAccessed: {
    backgroundColor: colors.white25,
    borderRadius: 20,
    paddingBottom: 20,
    alignItems: 'center',
  },
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

export default LoginScreen;
