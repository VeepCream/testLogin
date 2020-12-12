import React from 'react'
import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import { useRecoilValue, useRecoilState } from 'recoil'
import Modal from 'react-native-modal';
import MaterialIconsIcons from 'react-native-vector-icons/MaterialIcons';

import translateStore from '../stores/translateStore'
import TextCPN from './TextCPN'
import ButtonCPN from './ButtonCPN'
import { colors } from '../libs'

const widthScreen = Dimensions.get('window').width
const heightScreen = Dimensions.get('window').height

export default (props) => {
    return (
        <Modal
            isVisible={props.isVisible}
            backdropOpacity={0.2}
            style={{
                padding: 0,
                margin: 0,
                justifyContent: "center",
                alignItems: "center"
            }}
            onBackdropPress={() => {
                props.onBackdropPress()
            }}>
            <View
                style={{
                    width: 300,
                    height: 320,
                    bottom: 0,
                    backgroundColor: "#ffffff",
                    borderRadius: 15,
                    justifyContent: "space-between"
                }}>
                <View
                    style={{
                        marginTop: 30,
                        marginBottom: 10,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <MaterialIconsIcons
                        name="fingerprint"
                        size={80}
                        color={"red"} />
                    <TextCPN
                        text={"touchIDfor"}
                        style={{
                            fontSize: 25,
                        }} />
                    <TextCPN
                        text={"CGS"}
                        style={{
                            fontSize: 25,
                        }} />
                    <TextCPN
                        text={"CGSuseing"} style={{
                            fontSize: 12,
                        }} />
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => {
                            //props.onPress()
                        }}>
                        <View
                            style={{
                                width: 300,
                                height: 1,
                                backgroundColor: "#f2f2f2"
                            }} />
                        <View
                            style={{
                                width: 300,
                                height: 45,
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                            <TextCPN
                                text={"enterPass"}
                                style={{
                                    fontSize: 18,
                                    color: "#147efb"
                                }} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            props.onBackdropPress()
                        }}>
                        <View
                            style={{
                                width: 300,
                                height: 1,
                                backgroundColor: "#f2f2f2"
                            }} />
                        <View
                            style={{
                                width: 300,
                                height: 45,
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                            <TextCPN
                                text={"cancel"}
                                style={{
                                    fontSize: 18,
                                    color: "#147efb"
                                }} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}