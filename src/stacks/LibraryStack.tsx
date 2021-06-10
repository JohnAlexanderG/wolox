import React from 'react';
// react-native
import { Image, ImageSourcePropType } from 'react-native';
// react-navigation/bottom-tabs
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Screens
import LibraryScreen from '../screens/LibraryScreen';
import WishlistScreen from '../screens/WishlistScreen';
import AddNewScreen from '../screens/AddNewScreen';
import RentalsScreen from '../screens/RentalsScreen';
import SettingsScreen from '../screens/SettingsScreen';

// Initializing bottom-tabs
const Tab = createBottomTabNavigator();

const LibraryStack = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, focused }) => {
                    let url: ImageSourcePropType = 0;
                    switch (route.name) {
                        case 'library':
                            if (focused) {
                                url = require("../../assets/tool-bar/ic_library_active.png"); // actived
                            } else {
                                url = require("../../assets/tool-bar/ic_library.png");
                            }
                            break;
                        case 'wishlist':
                            if (focused) {
                                url = require("../../assets/tool-bar/ic_wishlist_active.png"); // actived
                            } else {
                                url = require("../../assets/tool-bar/ic_wishlist.png");
                            }
                            break;
                        case 'add_new':
                            if (focused) {
                                url = require("../../assets/tool-bar/ic_add_new_active.png"); // actived
                            } else {
                                url = require("../../assets/tool-bar/ic_add_new.png");
                            }
                            break;
                        case 'rentals':
                            if (focused) {
                                url = require("../../assets/tool-bar/ic_myrentals_active.png"); // actived
                            } else {
                                url = require("../../assets/tool-bar/ic_myrentals.png");
                            }
                            break;
                        case 'settings':
                            if (focused) {
                                url = require("../../assets/tool-bar/ic_settings_active.png"); // actived
                            } else {
                                url = require("../../assets/tool-bar/ic_settings.png");
                            }
                            break;
                    }
                    return <Image source={url} style={{ width: 25, height: 25 }} />
                }
            })}
        >
            <Tab.Screen name="library" component={LibraryScreen} options={{ title: 'Library' }} />
            <Tab.Screen name="wishlist" component={WishlistScreen} options={{ title: 'Wishlist' }} />
            <Tab.Screen name="add_new" component={AddNewScreen} options={{ title: 'Add New' }} />
            <Tab.Screen name="rentals" component={RentalsScreen} options={{ title: 'Rentals' }} />
            <Tab.Screen name="settings" component={SettingsScreen} options={{ title: 'Settings' }} />
        </Tab.Navigator>
    );
}

export default LibraryStack
