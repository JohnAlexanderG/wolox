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
                        selectionColor='#1976d2'
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
                        selectionColor='#1976d2'
                        placeholder='last name'
                        placeholderTextColor='white'
                        value={lastName}
                        onChangeText={value => setLastName(value)}
                      />
                      <View style={styles.chooseYear}>
                        <Text style={styles.chooseYearTitle}>Choose your year of birth</Text>
                        <Picker
                          style={{
                            backgroundColor: 'teal'
                          }}
                          selectedValue={selectedAge}
                          onValueChange={(itemValue, itemIndex) =>
                            setSelectedAge(itemValue)
                          }>
                          {ages.map((item: any) => {
                            return <Picker.Item style={{ color: '#1976d2' }} key={`item-${item.value}`} label={item.label} value={item.value} />
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
                  selectionColor='#1976d2'
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
                  selectionColor='#1976d2'
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
                    tintColors={{ true: '#1976d2', false: 'rgba(227,242,253, 0.60)' }}
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
    // backgroundColor: 'crimson',
    flexDirection: 'column',
  },
  formLoginAccessed: {
    backgroundColor: 'rgba(250,250,250, 0.25)',
    borderRadius: 20,
    paddingBottom: 20,
    alignItems: 'center',
  },
  formLoginAccessedBtnWrapper: {
    backgroundColor: '#e3f2fd',
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
    backgroundColor: '#1976d2',
    borderRadius: 20,
  },
  formLoginAccessedText: {
    fontSize: 16,
    color: '#3e3e3e',
  },
  formLoginAccessedTextActive: {
    color: '#fefefe',
  },
  textInput: {
    backgroundColor: 'rgba(227,242,253, 0.25)',
    marginBottom: 15,
    color: '#fefefe',
    paddingLeft: 16,
  },
  btnSubmit: {
    backgroundColor: '#4791db',
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnSubmitActived: {
    backgroundColor: '#1976d2',
  },
  btnSubmitText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgba(250,250,250, 0.5)',
  },
  btnSubmitTextActived: {
    color: '#fefefe',
  },
  chooseYear: {
    backgroundColor: 'rgba(227,242,253, 0.25)',
    marginBottom: 15
  },
  chooseYearTitle: {
    color: '#fefefe',
    marginTop: 8,
    paddingLeft: 16
  },
  loginGuest: {
    backgroundColor: '#1976d2',
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginGuestText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fefefe',
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
