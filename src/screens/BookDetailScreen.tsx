import React from 'react';
// react-native
import {
    View,
    Text,
    Image,
    Pressable,
    FlatList,
} from 'react-native'
// interfaces
import { Books } from '../interfaces/books';
// components
import ItemHorizontal from '../components/itemHorizontal';
import useGetDataBooks from '../hooks/useGetDataBooks';
import { colors } from '../themes/colors';
import Layout from '../components/layout';

const BookDetailScreen = ({ navigation, route }: { navigation: any, route: any }) => {
    const { bookDataDetail, booksByGenre } = useGetDataBooks(route);

    return (
        <Layout title='Book Detail' isBookDetail={true} navigation={navigation} >
            <View
                style={{
                    backgroundColor: '#fff',
                    marginHorizontal: 16,
                    paddingVertical: 20,
                    paddingHorizontal: 20,
                }}
            >
                <View
                    style={{
                        flexDirection: 'row'
                    }}
                >
                    <Image source={
                        bookDataDetail?.image_url != null
                            ? { uri: `${bookDataDetail?.image_url}` }
                            : require('wolox/assets/general/img_book_placeholder.png')
                    } style={{ width: 100, height: 150 }} />
                    <View
                        style={{
                            marginLeft: 8,
                            flex: 1
                        }}
                    >
                        <Text style={{ fontSize: 28, fontWeight: 'bold', flexWrap: 'wrap' }} >
                            {bookDataDetail?.title.trim()}
                        </Text>

                        <Text style={{ fontSize: 18, color: 'green' }} >
                            Available
                        </Text>

                        <Text style={{ fontSize: 18 }} >
                            {bookDataDetail?.author}
                        </Text>

                        <Text style={{ fontSize: 18 }} >
                            {bookDataDetail?.year}
                        </Text>

                        <Text style={{ fontSize: 18 }} >
                            Novel
                        </Text>

                    </View>
                </View>
                <View style={{ marginTop: 16, }}>
                    <Pressable>
                        <View style={{ borderWidth: 1, borderColor: colors.primary, paddingVertical: 16, alignItems: 'center', marginBottom: 8, borderRadius: 50 }}>
                            <Text style={{ fontSize: 20, color: colors.primary, fontWeight: 'bold', }}>ADD TO WISHLIST</Text>
                        </View>
                    </Pressable>
                    <Pressable>
                        <View style={{ borderWidth: 1, borderColor: colors.primary, backgroundColor: colors.primary, paddingVertical: 16, alignItems: 'center', borderRadius: 50 }} >
                            <Text style={{ fontSize: 20, color: colors.white, fontWeight: 'bold', }}>RENT</Text>
                        </View>
                    </Pressable>
                </View>
            </View>
            {booksByGenre.length >= 2
                ? (
                    <View style={{ marginVertical: 20 }}>
                        <Text style={{ paddingLeft: 16, paddingBottom: 8, fontSize: 20, fontWeight: 'bold', }}>{bookDataDetail?.genre}</Text>
                        <FlatList
                            horizontal={true}
                            data={booksByGenre}
                            renderItem={({ item }: { item: Books }) => {
                                return <ItemHorizontal data={item} navigation={navigation} />
                            }}
                            keyExtractor={(item) => item.id.toString()}
                        />
                    </View>
                ) : null
            }
        </Layout>
    );
}

export default BookDetailScreen;
