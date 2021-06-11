import React from 'react';
// Components
import LayoutLogin from '../components/layoutLogin';
import Logo from '../components/logo';
import FormAccess from '../components/formAccess';

const LoginScreen = ({ navigation }: { navigation: any }) => {
  return (
    <LayoutLogin>
          <Logo />
          <FormAccess navigation={navigation} />
    </LayoutLogin>
  );
}

export default LoginScreen;
