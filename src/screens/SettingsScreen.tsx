import React from 'react';
// components
import Layout from '../components/layout';
import Logout from '../components/logout';

const SettingsScreen = ({ navigation }: { navigation: any }) => {
    return (
        <Layout title='Settings' >
            <Logout navigation={navigation} />
        </Layout>
    );
}

export default SettingsScreen;
