import React from 'react';
import { TextInput, useWindowDimensions } from 'react-native';

const searchInput = () => {
    const { width } = useWindowDimensions();

    // const onHandleSearchInput = (text: string) => {
    //     const books = allBooks.filter((query: Books) => {
    //         return query.title.toLowerCase().includes(text.toLowerCase()) || query.author.toLowerCase().includes(text.toLowerCase());
    //     })
    //     console.log('books', books);
    //     setBooks(books);
    // }

    return (
        <TextInput
            style={{
                backgroundColor: 'rgba(227,242,253, 0.25)',
                width: width * 0.9,
                paddingLeft: 16,
                borderRadius: 4,
                color: '#fefefe'
            }}
            // onChangeText={(text: string) => { onHandleSearchInput(text) }}
            selectionColor='#1976d2'
            placeholder='Search'
            placeholderTextColor='white'
        />
    );
}

export default searchInput;
