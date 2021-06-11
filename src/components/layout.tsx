import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Header from './header';

// Layout Interface
interface LayoutProps {
    children: any;
    title: String;
    isBookDetail: boolean | undefined;
    navigation: any;
}

const Layout = ({ children, title, isBookDetail, navigation }: LayoutProps) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'rgba(227,242,253, 1)' }}>
            <StatusBar barStyle='default' />
            <Header title={title} isBookDetail={isBookDetail} navigation={navigation} />
            { children }
        </SafeAreaView>
    )
}

export default Layout;
