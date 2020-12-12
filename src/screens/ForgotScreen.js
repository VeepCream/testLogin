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
                    flex: 1
                }}>
                <View
                    style={{ marginLeft: 20 }}>
                    <TextCPN
                        style={{
                            fontWeight: "200",
                            fontSize: 30,
                            marginBottom:20
                        }}
                        text={"forgotPassword"} />
                    <TextCPN text={"typeEmailOrNum"} />
                </View>

                <TextFieldCPN label={"emailOrNumber"} />

                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        width: widthScreen,
                        marginTop: 10
                    }}>
                    <ButtonCPN
                        text={"sent"}
                        onPress={() => {
                            props.navigation.navigate('ForgotSuccessScreen')
                        }} />
                </View>

            </SafeAreaView>
        </Suspense>
    )
}