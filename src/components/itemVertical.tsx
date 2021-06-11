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
import { colors } from '../themes/colors';

const ItemVertical = (props: any) => {
    const { author, title, image_url }: Books = props.data;
    const navigation = props.navigation;
    
    const onHandleBookItem = () => {
        navigation.navigate('book-detail', { ...props.data })
    }

    return (
        <View>
            <Pressable onPress={onHandleBookItem} >
                <View style={ styles.itemContainer }>
                    <Image 
                        style={ styles.itemImg }
                        source={
                            image_url !== null
                                ? { uri: image_url }
                                : require('wolox/assets/general/img_book_placeholder.png')
                        }
                    />
                    <View style={styles.wrapperText}>
                        <Text style={styles.textTitle}>{title}</Text>
                        <Text>{author}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: colors.white,
        marginBottom: 10,
        marginHorizontal: 16,
        paddingVertical: 10,
        paddingHorizontal: 16,
        flexDirection: 'row',
        borderRadius: 8,
    },
    itemImg: {
        width: 40,
        height: 60,
    },
    wrapperText: {
        paddingLeft: 8,
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: 18,
    },
});

export default ItemVertical;
