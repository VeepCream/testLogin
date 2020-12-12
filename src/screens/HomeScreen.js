import React from 'react'
import { useEffect, Suspense, useState } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Platform,
    ScrollView,
    Dimensions,
    SafeAreaView
} from 'react-native'
import { useRecoilValue, useRecoilState } from 'recoil'
import CheckBox from '@react-native-community/checkbox';

import TextFieldCPN from '../components/TextFieldCPN'
import TextCPN from '../components/TextCPN'
import ButtonCPN from '../components/ButtonCPN'
import { colors } from '../libs'

const widthScreen = Dimensions.get('window').width
const heightScreen = Dimensions.get('window').height

export default (props) => {

    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <Suspense fallback={<View><Text>Loading...</Text></View>}>
            <SafeAreaView
                style={{
                    flex: 1,
                    justifyContent: "center",
                }}>
                <TextFieldCPN label={"userName"} />
                <TextFieldCPN label={"password"} />
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingLeft: 20,
                        paddingRight: 20
                    }}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center"
                        }}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => {
                                setToggleCheckBox(newValue)
                            }} />
                        <TextCPN text={"rememberLogin"} />
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate({ name: 'ForgotScreen' })
                        }}>
                        <View
                            style={{
                                width: 80,
                                height: 20
                            }}>
                            <TextCPN text={"forgotPassword"} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        width: widthScreen,
                        marginTop: 10
                    }}>
                    <ButtonCPN
                        text={"login"}
                        onPress={() => {
                            props.navigation.navigate({ name: 'SendOTPScreen' })
                        }} />
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        width: widthScreen,
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 20,
                    }}>
                    <View
                        style={{
                            width: (widthScreen / 2) - 75,
                            height: 2,
                            backgroundColor: colors.gray,
                            marginRight: 10
                        }} />
                    <TextCPN text={"dontHaveAccount"} />
                    <View
                        style={{
                            width: (widthScreen / 2) - 75,
                            height: 2,
                            backgroundColor: colors.gray,
                            marginLeft: 10
                        }} />
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        width: widthScreen,
                        marginTop: 20
                    }}>
                    <ButtonCPN
                        bEnable={true}
                        text={"register"}
                        onPress={() => {

                        }} />
                </View>

            </SafeAreaView>
        </Suspense>
    )
}