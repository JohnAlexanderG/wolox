import React, { useContext } from 'react';
import { StyleSheet, TextInput, useWindowDimensions } from 'react-native';
import { StateContext } from '../context/StateContext';
import { Books } from '../interfaces/books';
import { colors } from '../themes/colors';

const SearchInput = () => {
    
    const { width } = useWindowDimensions();

    const { initialState, setBooks } = useContext(StateContext);
    const { allBooks } = initialState;
    
    const onHandleSearchInput = (text: string) => {
        const books = allBooks.filter((query: Books) => {
            return query.title.toLowerCase().includes(text.toLowerCase()) || query.author.toLowerCase().includes(text.toLowerCase());
        })
        setBooks(books);
    }

    return (
        <TextInput
            style={{ ...styles.textInput, width: width * 0.9 }}
            onChangeText={(text: string) => { onHandleSearchInput(text) }}
            selectionColor={colors.secondary}
            placeholder='Search'
            placeholderTextColor='white'
        />
    );
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: colors.blue25,
        paddingLeft: 16,
        borderRadius: 4,
        color: colors.white
    },
});

export default SearchInput;
