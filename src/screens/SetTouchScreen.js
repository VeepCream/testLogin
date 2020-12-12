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
import MaterialIconsIcons from 'react-native-vector-icons/MaterialIcons';
import OTPInputView from '@twotalltotems/react-native-otp-input'

import TextFieldCPN from '../components/TextFieldCPN'
import TextCPN from '../components/TextCPN'
import ButtonCPN from '../components/ButtonCPN'
import TouchableTextCPN from '../components/TouchableTextCPN'
import { colors } from '../libs'

const widthScreen = Dimensions.get('window').width
const heightScreen = Dimensions.get('window').height

export default (props) => {

    const [code, setCode] = useState("")

    return (
        <Suspense fallback={<View><Text>Loading...</Text></View>}>
            <View
                style={{
                    flex: 1,
                    padding: 10
                }}>
                <TextCPN
                    style={{
                        fontWeight: "200",
                        fontSize: 20,
                        marginTop: 20,
                        marginBottom: 20
                    }}
                    text={"touchID"} />
                <TextCPN
                    style={{
                        fontSize: 15,
                        marginBottom: 20
                    }}
                    text={"setFingerPrint"} />

                <View
                    style={{
                        width: widthScreen - 20,
                        alignItems: "center"
                    }}>
                    <View
                        style={{
                            borderRadius: 120,
                            width: 120,
                            height: 120,
                            marginTop: 60,
                            marginBottom: 60,
                            backgroundColor: "#fff",
                            justifyContent: "center",
                            alignItems: "center",
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 4,
                            },
                            shadowOpacity: 0.30,
                            shadowRadius: 4.65,

                            elevation: 8,

                        }}>
                        <MaterialIconsIcons
                            name="fingerprint"
                            size={110}
                            color={colors.primary} />
                    </View>
                    <ButtonCPN
                        text={'settingFingerPrint'}
                        onPress={() => {

                        }} />
                    <View
                        style={{
                            width: 20,
                            height: 20
                        }} />
                    <ButtonCPN
                        text={'skip'}
                        bEnable={true}
                        onPress={() => {
                            props.navigation.navigate({ name: 'LoginScreen' })
                        }} />
                </View>
            </View>
        </Suspense>
    )
}