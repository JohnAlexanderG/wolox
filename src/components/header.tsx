import React, { useContext } from 'react';
// react-native
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    useWindowDimensions,
    Pressable,
} from 'react-native';
// State Context
import { StateContext } from '../context/StateContext';
import { colors } from '../themes/colors';
// Components
import SearchInput from './searchInput';
import SearchInputClose from './searchInputClose';

// Header Interface
interface HeaderProps {
    title: String;
    isBookDetail: boolean | undefined;
    navigation: any;
}

function Header({ title, isBookDetail, navigation }: HeaderProps) {
    const { width } = useWindowDimensions();
    const { initialState: { showSearchInput }, setShowSearchInput } = useContext(StateContext);
    return (
        <ImageBackground
            source={require('wolox/assets/general/bc_nav_bar.png')}
            resizeMode='cover'
            style={{
                ...styles.imageBackground,
                width: width,
            }}
        >
            {!showSearchInput ?
                !isBookDetail ?
                    (
                        <View style={{ ...styles.header, width: width, }}>
                            <Image style={styles.headerImg} source={require('wolox/assets/navigation-bar/ic_notifications.png')} />
                            <Text style={styles.headerTitle} >{title}</Text>
                            <Pressable onPress={() => setShowSearchInput(!showSearchInput)}>
                                <Image style={styles.headerImg} source={require('wolox/assets/navigation-bar/ic_search.png')} />
                            </Pressable>
                        </View>
                    ) : (
                        <View style={{ ...styles.header, width: width, }}>
                            <Pressable onPress={() => navigation.push('library')} >
                                <Image style={styles.headerImg} source={require('wolox/assets/navigation-bar/ic_back.png')} />
                            </Pressable>
                            <Text style={styles.headerTitle} >{title}</Text>
                            <Image style={{ ...styles.headerImg, opacity: 0 }} source={require('wolox/assets/navigation-bar/ic_search.png')} />
                        </View>
                    )
                : (
                    <View>
                        <SearchInput />
                        <SearchInputClose />
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
        color: colors.white,
    },
});

export default Header;
