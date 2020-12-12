import 'react-native-gesture-handler';
import React from 'react';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RecoilRoot } from 'recoil';
import RecoilOutside from "recoil-outside"
import SplashScreen from 'react-native-splash-screen';

import MainStack from './stacks/MainStack';

export default function App() {

    useEffect(() => {
        SplashScreen.hide();
    }, []);

    return (
        <RecoilRoot>
            <NavigationContainer>
                <RecoilOutside />
                <MainStack />
            </NavigationContainer>
        </RecoilRoot>
    );
}