import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Header from './header';

const Layout = ({ children, title }: { children: any, title: string }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'rgba(227,242,253, 1)' }}>
            <StatusBar barStyle='default' />
            <Header title={title} />
            { children }
        </SafeAreaView>
    )
}

export default Layout;
