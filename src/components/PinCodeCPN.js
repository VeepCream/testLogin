import React from 'react'
import { useState, useEffect } from 'react'
import { Text, View } from 'react-native'
import { useRecoilValue, useRecoilState } from 'recoil'

import PinButtonCPN from '../components/PinButtonCPN'
import PinDotCPN from '../components/PinDotCPN'
import PinDeleteCPN from '../components/PinDeleteCPN'
import TextStateCPN from '../components/TextStateCPN'
import TouchaleButtonCPN from '../components/TouchaleButtonCPN'

export default (props) => {

    const [pin, setPin] = useState("")

    useEffect(() => {
        setPin(props.pin)
    }, [props.getState])

    const addPin = (tx) => {
        if (pin.length < 6) {
            setPin(pin + tx)
            props.setPin(pin + tx)
        }
    }


    const deletePin = () => {
        if (pin.length > 0) {
            const editedText = pin.slice(0, -1)
            setPin(editedText)
            props.setPin(editedText)
        }
    }

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
            <TextStateCPN
                state={props.getState} />
            <PinDotCPN
                pin={props.pin} />
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 20
                }}>
                <PinButtonCPN
                    text={"1"}
                    onPress={() => {
                        addPin("1")
                    }} />
                <View
                    style={{
                        width: 20,
                        height: 20
                    }} />
                <PinButtonCPN
                    text={"2"}
                    onPress={() => {
                        addPin("2")
                    }} />
                <View
                    style={{
                        width: 20,
                        height: 20
                    }} />
                <PinButtonCPN
                    text={"3"}
                    onPress={() => {
                        addPin("3")
                    }} />
            </View>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 20
                }}>
                <PinButtonCPN
                    text={"4"}
                    onPress={() => {
                        addPin("4")
                    }} />
                <View
                    style={{
                        width: 20,
                        height: 20
                    }} />
                <PinButtonCPN
                    text={"5"}
                    onPress={() => {
                        addPin("5")
                    }} />
                <View
                    style={{
                        width: 20,
                        height: 20
                    }} />
                <PinButtonCPN
                    text={"6"}
                    onPress={() => {
                        addPin("6")
                    }} />

            </View>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 20
                }}>
                <PinButtonCPN
                    text={"7"}
                    onPress={() => {
                        addPin("7")
                    }} />
                <View
                    style={{
                        width: 20,
                        height: 20
                    }} />
                <PinButtonCPN
                    text={"8"}
                    onPress={() => {
                        addPin("8")
                    }} />
                <View
                    style={{
                        width: 20,
                        height: 20
                    }} />
                <PinButtonCPN
                    text={"9"}
                    onPress={() => {
                        addPin("9")
                    }} />

            </View>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                {
                    props.getState === 2 ?
                        <TouchaleButtonCPN
                            onPress={() => {
                                if (props.onPressTouch) {
                                    props.onPressTouch()
                                }
                            }} />
                        :
                        <View
                            style={{
                                width: 90,
                                height: 90
                            }} />
                }
                <View
                    style={{
                        width: 20,
                        height: 20
                    }} />
                <PinButtonCPN
                    text={"0"}
                    onPress={() => {
                        addPin("0")
                    }} />
                <View
                    style={{
                        width: 20,
                        height: 20
                    }} />
                <PinDeleteCPN
                    onPress={() => {
                        deletePin()
                    }} />
            </View>
        </View>

    )
}