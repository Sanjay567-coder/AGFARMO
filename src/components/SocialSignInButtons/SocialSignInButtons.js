import React from 'react';
import {View, Text} from 'react-native';
import CustomButton from '../CustomButton';
import { useNavigation } from '@react-navigation/native';

const SocialSignInButtons = () => {
  const navigation = useNavigation();
  const onSignInFacebook = () => {
    console.warn('onSignInFacebook');
  };

  const onSignInGoogle = () => {
    console.warn('onSignInGoogle');
  };

  const onSignInPhoneNumber = () => {
    console.warn('onSignInPhoneNumber');
  };

  return (
    <>
      <CustomButton
        text="Sign in with Phone Number"
        onPress={onSignInPhoneNumber}
        bgColor="#e3e3e3"
        fgColor="#363636"
      />
      <CustomButton
        text="Sign in with Facebook"
        onPress={onSignInFacebook}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />
      <CustomButton
        text="Sign in with Google"
        onPress={onSignInGoogle}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
      
    </>
  );
};

export default SocialSignInButtons;
