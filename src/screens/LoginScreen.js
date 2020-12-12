import React from 'react'
import { useEffect, Suspense, useState } from 'react'
import {
    View,
    Text,
    Dimensions
} from 'react-native'
import AlertSetTouchableCPN from '../components/AlertSetTouchableCPN'

import PinCodeCPN from '../components/PinCodeCPN'

const widthScreen = Dimensions.get('window').width
const heightScreen = Dimensions.get('window').height

export default (props) => {

    const [isVisible, setIsVisible] = useState(false)
    const [pin, setPin] = useState("")

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true)
        }, 200)
    }, [])

    return (
        <Suspense fallback={<View><Text>Loading...</Text></View>}>
            <PinCodeCPN
                getState={2}
                pin={pin}
                setPin={(pinValue) => {

                    setPin(pinValue)

                }}
                onPressTouch={() => {
                    setIsVisible(true)
                }} />
            <AlertSetTouchableCPN
                isVisible={isVisible}
                onBackdropPress={() => {
                    setIsVisible(false)
                }} />
        </Suspense>
    )
}