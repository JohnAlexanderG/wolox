import React, { useContext } from 'react'
import { View, Text, Pressable } from 'react-native'
import { StateContext } from '../context/StateContext'
import { colors } from '../themes/colors';

const SearchInputClose = () => {

    const { initialState: { showSearchInput }, setShowSearchInput } = useContext(StateContext);

    return (
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
                    color: colors.white,
                    fontWeight: 'bold',
                    fontSize: 20,
                    textAlign: 'center',
                }}>X</Text>
            </Pressable>
        </View>
    )
}

export default SearchInputClose;

