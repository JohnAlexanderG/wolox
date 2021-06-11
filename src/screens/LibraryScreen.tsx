import React, { useContext, useEffect } from 'react';
// react-native
import { FlatList } from 'react-native';
// Components
import ItemVertical from '../components/itemVertical';
import Layout from '../components/layout';
import { StateContext } from '../context/StateContext';
// interfaces
import { Books } from '../interfaces/books';
import Http from '../utils/http';

const LibraryScreen = ({ navigation }: { navigation: any }) => {

    const { initialState, setBooks, setAllBooks } = useContext(StateContext);
    const { books, allBooks, showSearchInput } = initialState;

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
        <Layout title='Library' >
            <FlatList
                data={books}
                renderItem={({ item }: { item: Books }) => {
                    return <ItemVertical data={item} navigation={navigation} />
                }}
                keyExtractor={(item) => item.id.toString()}
            />
        </Layout>
    );
}

export default LibraryScreen;
