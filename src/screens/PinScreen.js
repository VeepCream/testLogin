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
import { useIsFocused } from '@react-navigation/native';

import PinCodeCPN from '../components/PinCodeCPN'
import DialogCPN from '../components/DialogCPN'

const widthScreen = Dimensions.get('window').width
const heightScreen = Dimensions.get('window').height

export default (props) => {

    const isFocused = useIsFocused();

    const [pin, setPin] = useState("")
    const [confirmPin, setConfirmPin] = useState("")
    const [getState, setState] = useState(0)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (!isFocused) {
            setVisible(false)
            setState(0)
            setPin("")
            setConfirmPin("")
        }

    }, [isFocused])

    return (
        <Suspense fallback={<View><Text>Loading...</Text></View>}>
            <PinCodeCPN
                getState={getState}
                pin={getState === 0 ? pin : confirmPin}
                setPin={(pinValue) => {
                    if (getState === 0) {
                        if (pinValue.length === 6) {
                            setState(1)
                            setPin(pinValue)
                        }
                        else {
                            setPin(pinValue)
                        }
                    }
                    else {
                        if (pinValue.length === 6) {
                            setConfirmPin(pinValue)
                            if (pin === pinValue) {
                                props.navigation.navigate({ name: 'SetTouchScreen' })
                            }
                            else {
                                setVisible(true)
                            }
                        }
                        else {
                            setConfirmPin(pinValue)
                        }
                    }
                }} />
            <DialogCPN
                visible={visible}
                title={"dialogTitle"}
                text={"dialogDescription"}
                onPress={() => {
                    setVisible(false)
                    setState(0)
                    setPin("")
                    setConfirmPin("")
                }} />
        </Suspense>
    )
}