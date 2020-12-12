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
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <MaterialIconsIcons name={"developer-mode"} size={120} color={colors.dark} />
                <TextCPN
                    style={{
                        fontWeight: "200",
                        fontSize: 20,
                        marginTop: 20,
                        marginBottom: 20
                    }}
                    text={"sendOTP"} />
                <TextCPN
                    style={{
                        fontSize: 15,
                        marginBottom: 20
                    }}
                    text={"phoneNumber"} />
                <ButtonCPN
                    text={"sendOTPButton"}
                    onPress={() => {
                        props.navigation.navigate({ name: 'EnterOTPScreen' })
                    }} />
                <TextCPN
                    style={{
                        fontSize: 10,
                        marginTop: 20
                    }}
                    text={"helpOTP"} />
            </View>
        </Suspense>
    )
}