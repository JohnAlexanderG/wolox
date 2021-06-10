import React from 'react';
// react-native
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    useWindowDimensions,
    Pressable,
    TextInput,
} from 'react-native';

import { Books } from '../interfaces/books';

function Header({ title, allBooks, setBooks, showSearchInput, setShowSearchInput }: { title: String, allBooks: any, setBooks: any, showSearchInput: any, setShowSearchInput: any }) {

    const { width } = useWindowDimensions();

    const onHandleSearchInput = (text: string) => {
        const books = allBooks.filter((query: Books) => {
            return query.title.toLowerCase().includes(text.toLowerCase()) || query.author.toLowerCase().includes(text.toLowerCase());
        })
        console.log('books', books);
        setBooks(books);
    }

    return (
        <ImageBackground
            source={require('wolox/assets/general/bc_nav_bar.png')}
            resizeMode='cover'
            style={{
                ...styles.imageBackground,
                width: width,
            }}
        >
            {!showSearchInput
                ? (
                    <View style={{ ...styles.header, width: width, }}>
                        <Image style={styles.headerImg} source={require('wolox/assets/navigation-bar/ic_notifications.png')} />
                        <Text style={styles.headerTitle} >{title}</Text>
                        <Pressable onPress={() => setShowSearchInput(!showSearchInput)}>
                            <Image style={styles.headerImg} source={require('wolox/assets/navigation-bar/ic_search.png')} />
                        </Pressable>
                    </View>
                )
                : (
                    <View>
                        <TextInput
                            style={{
                                backgroundColor: 'rgba(227,242,253, 0.25)',
                                width: width * 0.9,
                                paddingLeft: 16,
                                borderRadius: 4,
                                color: '#fefefe'
                            }}
                            onChangeText={(text: string) => { onHandleSearchInput(text) }}
                            selectionColor='#1976d2'
                            placeholder='Search'
                            placeholderTextColor='white'
                        />
                        <View style={{
                            width: 50,
                            height: 50,
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            justifyContent: 'center',
                            alignContent: 'center',
                        }}>
                            <Pressable
                                onPress={() => {
                                    setShowSearchInput(!showSearchInput)
                                }}
                            >
                                <Text style={{
                                    color: '#fefefe',
                                    fontWeight: 'bold',
                                    fontSize: 20,
                                    textAlign: 'center',
                                }}>X</Text>
                            </Pressable>
                        </View>
                    </View>
                )
            }
        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    imageBackground: {
        height: 102,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    header: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerImg: {
        width: 25,
        height: 25
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fefefe',
    },
});

export default Header;
