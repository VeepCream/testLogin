import React from 'react';
import { View, Dimensions, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';

import SelectLanguageScreen from '../screens/SelectLanguageScreen';
import HomeScreen from '../screens/HomeScreen';
import ForgotScreen from '../screens/ForgotScreen';
import ForgotSuccessScreen from '../screens/ForgotSuccessScreen';
import SendOTPScreen from '../screens/SendOTPScreen';
import EnterOTPScreen from '../screens/EnterOTPScreen';
import PinScreen from '../screens/PinScreen';
import SetTouchScreen from '../screens/SetTouchScreen';
import LoginScreen from '../screens/LoginScreen';
import HeaderCPN from '../components/HeaderCPN';

const widthScreen = Dimensions.get('window').width
const heightScreen = Dimensions.get('window').height

const Stack = createStackNavigator();

export default () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SelectLanguageScreen"
                component={SelectLanguageScreen}
                options={{ headerShown: false }} />
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }} />
            <Stack.Screen
                name="ForgotScreen"
                component={ForgotScreen}
                options={
                    ({ navigation, route }) => ({
                        headerShown: true,
                        header: () => (
                            <HeaderCPN navigation={navigation} />
                        )
                    })
                } />
            <Stack.Screen
                name="ForgotSuccessScreen"
                component={ForgotSuccessScreen}
                options={{ headerShown: false }} />
            <Stack.Screen
                name="SendOTPScreen"
                component={SendOTPScreen}
                options={
                    ({ navigation, route }) => ({
                        headerShown: true,
                        header: () => (
                            <HeaderCPN navigation={navigation} />
                        )
                    })
                } />
            <Stack.Screen
                name="EnterOTPScreen"
                component={EnterOTPScreen}
                options={
                    ({ navigation, route }) => ({
                        headerShown: true,
                        header: () => (
                            <HeaderCPN navigation={navigation} />
                        )
                    })
                } />
            <Stack.Screen
                name="PinScreen"
                component={PinScreen}
                options={{ headerShown: false }} />
            <Stack.Screen
                name="SetTouchScreen"
                component={SetTouchScreen}
                options={{ headerShown: false }} />
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{ headerShown: false }} />

        </Stack.Navigator>
    );
}
