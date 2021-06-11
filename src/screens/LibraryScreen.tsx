import React, { useContext, useEffect, useState } from 'react';
// react-native
import {
    SafeAreaView,
    StatusBar,
    FlatList,
} from 'react-native';
// Components
import Header from '../components/header';
import ItemVertical from '../components/itemVertical';
import { StateContext } from '../context/StateContext';
// interfaces
import { Books } from '../interfaces/books';
import Http from '../utils/http';

const LibraryScreen = ({ navigation }: { navigation: any }) => {

    const { initialState, setBooks, setAllBooks } = useContext(StateContext);
    const { books, allBooks } = initialState;

    const [showSearchInput, setShowSearchInput] = useState(false);

    useEffect(() => {
        if (books.length < allBooks.length || allBooks.length == 0) {
            (async () => {
                const response = await Http.instance.get('http://127.0.0.1:3000/books')
                setBooks(response);
                setAllBooks(response);
            })();
        }
    }, [showSearchInput]);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'rgba(227,242,253, 1)' }}>
            <StatusBar barStyle='default' />
            <Header
                title='Library'
                showSearchInput={showSearchInput}
                setShowSearchInput={setShowSearchInput}
            />
            <FlatList
                data={books}
                renderItem={({ item }: { item: Books }) => {
                    return <ItemVertical data={item} navigation={navigation} />
                }}
                keyExtractor={(item) => item.id.toString()}
            />
        </SafeAreaView>
    );
}

export default LibraryScreen;
