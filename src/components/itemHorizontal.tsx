import React from 'react';
// react-native
import {
    View,
    Text,
    StyleSheet,
    Image,
    Pressable,
} from 'react-native';
// interfaces
import { Books } from '../interfaces/books';

const ItemHorizontal = (props: any) => {
    const { title, image_url }: Books = props.data;
    const navigation = props.navigation;

    const onHandleBookItem = () => {
        navigation.navigate('book-detail', { ...props.data })
    }

    return (
        <View>
            <Pressable onPress={onHandleBookItem} >
                <View style={styles.itemContainer}>
                    <Image
                        style={styles.itemImg}
                        source={
                            image_url !== null
                                ? { uri: image_url }
                                : require('wolox/assets/general/img_book_placeholder.png')
                        }
                    />
                    <View style={styles.wrapperText}>
                        <Text style={styles.textTitle}>{title.trim()}</Text>
                    </View>
                </View>
            </Pressable >
        </View >
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#fefefe',
        marginBottom: 10,
        marginHorizontal: 16,
        paddingVertical: 10,
        paddingHorizontal: 16,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 8,
        minHeight: 200,
    },
    itemImg: {
        width: 60,
        height: 80
    },
    wrapperText: {
        paddingLeft: 8,
        width: 100,
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 8,
    },
});

export default ItemHorizontal;
