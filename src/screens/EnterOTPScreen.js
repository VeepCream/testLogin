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
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { useIsFocused } from '@react-navigation/native';

import TextFieldCPN from '../components/TextFieldCPN'
import TextCPN from '../components/TextCPN'
import ButtonCPN from '../components/ButtonCPN'
import TouchableTextCPN from '../components/TouchableTextCPN'
import { colors } from '../libs'

const widthScreen = Dimensions.get('window').width
const heightScreen = Dimensions.get('window').height

export default (props) => {

    const [code, setCode] = useState("")
    const isFocused = useIsFocused();

    useEffect(() => {
        if (!isFocused) {
            setCode("")
        }

    }, [isFocused])

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
                    text={"confirmIdentity"} />
                <TextCPN
                    style={{
                        fontSize: 15,
                        marginBottom: 20
                    }}
                    text={"phoneNumber"} />
                <TextCPN
                    style={{
                        fontSize: 15,
                        marginBottom: 20
                    }}
                    text={"enterVerificationCode"} />
                <View
                    style={{
                        width: widthScreen - 20,
                        alignItems: "center"
                    }}>
                    <OTPInputView
                        style={{ width: widthScreen * 0.8, height: 200 }}
                        pinCount={6}
                        code={code}
                        onCodeChanged={codePin => {
                            setCode(codePin)
                            if (codePin.length === 6) {
                                props.navigation.navigate({ name: 'PinScreen' })
                            }
                        }
                        }
                        autoFocusOnLoad
                        codeInputFieldStyle={{
                            width: 30,
                            height: 45,
                            borderWidth: 0,
                            borderBottomWidth: 1,
                            color: colors.dark,
                            borderColor: colors.light
                        }}
                        codeInputHighlightStyle={{
                            borderColor: "#03DAC6",
                        }}
                        onCodeFilled={(code) => {
                            //console.log(`Code is ${code}, you are good to go!`)
                        }}
                    />
                    <View
                        style={{
                            width: widthScreen - 20,
                            alignItems: "center"
                        }}>

                        <TextCPN
                            style={{
                                fontSize: 10,
                                marginTop: 20,
                                marginBottom: 20
                            }}
                            text={"notReceived"} />
                        <TouchableTextCPN
                            text1={"sendOTPAgain"}
                            text2={"waitSendOTPAgain"} />

                    </View>
                </View>
            </View>
        </Suspense>
    )
}