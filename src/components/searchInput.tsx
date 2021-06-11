import React, { useContext } from 'react';
import { StyleSheet, TextInput, useWindowDimensions } from 'react-native';
import { StateContext } from '../context/StateContext';
import { Books } from '../interfaces/books';

const SearchInput = () => {
    
    const { width } = useWindowDimensions();

    const { initialState, setBooks } = useContext(StateContext);
    const { allBooks } = initialState;
    
    const onHandleSearchInput = (text: string) => {
        const books = allBooks.filter((query: Books) => {
            return query.title.toLowerCase().includes(text.toLowerCase()) || query.author.toLowerCase().includes(text.toLowerCase());
        })
        console.log('books', books);
        setBooks(books);
    }

    return (
        <TextInput
            style={{ ...styles.textInput, width: width * 0.9 }}
            onChangeText={(text: string) => { onHandleSearchInput(text) }}
            selectionColor='#1976d2'
            placeholder='Search'
            placeholderTextColor='white'
        />
    );
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: 'rgba(227,242,253, 0.25)',
        paddingLeft: 16,
        borderRadius: 4,
        color: '#fefefe'
    },
});

export default SearchInput;
