import React from 'react'
import { View, Text, Dimensions, ScrollView } from 'react-native'
import { useRecoilValue, useRecoilState } from 'recoil'
import Modal from 'react-native-modal';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import translateStore from '../stores/translateStore'
import TextCPN from '../components/TextCPN'
import ButtonCPN from '../components/ButtonCPN'
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
                justifyContent: "flex-end",
                alignItems: "center"
            }}>
            <View
                style={{
                    width: widthScreen,
                    height: heightScreen - 180,
                    bottom: 0,
                    backgroundColor: "#ffffff",
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15
                }}>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        paddingLeft: 40,
                        marginTop: 20
                    }}>
                    <MaterialIcons
                        name="view-headline"
                        size={30}
                        color={colors.primary} />
                    <View
                        style={{
                            width: 10,
                            height: 5,
                        }} />
                    <TextCPN text={"termsOfService"} />
                </View>
                <View
                    style={{
                        width: widthScreen,
                        height: 7,
                        justifyContent: "flex-end",
                        alignItems: "center",
                        marginTop:10
                    }} >
                    <View
                        style={{
                            width: widthScreen - 40,
                            height: 2,
                            backgroundColor: colors.gray
                        }} />
                </View>
                <ScrollView
                    style={{
                        margin: 20
                    }}
                    showsVerticalScrollIndicator={true}
                    persistentScrollbar={true}>
                    <TextCPN text={"termsOfServiceContect"} />
                </ScrollView>

                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 20,
                        marginBottom: 20,
                        justifyContent: "center"
                    }}>
                    <ButtonCPN
                        width={150}
                        height={40}
                        bEnable={true}
                        text={"reject"} 
                        onPress={()=>{
                            props.reject()
                        }}/>
                    <View
                        style={{
                            width: 20,
                            height: 40,
                        }} />
                    <ButtonCPN
                        width={150}
                        height={40}
                        text={"accept"}
                        onPress={()=>{
                            props.resolve()
                        }} />
                </View>

            </View>
        </Modal>
    )
}