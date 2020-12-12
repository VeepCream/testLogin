import React from 'react'
import { useEffect, Suspense, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useRecoilValue, useRecoilState } from 'recoil'

import ButtonCPN from '../components/ButtonCPN'
import TextCPN from '../components/TextCPN'
import ConditionCPN from '../components/ConditionCPN'
import languageStore from '../stores/languageStore'

export default (props) => {

    const [getLanguage, setLanguage] = useRecoilState(languageStore)
    const [getIsVisible, setIsVisible] = useState(false)

    return (
        <Suspense fallback={<View><Text>Loading...</Text></View>}>
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <View
                    style={{
                        flexDirection: "column",

                    }}>
                    <TextCPN text={"Welcome"} />
                    <TextCPN text={"PleaseSelectLanguage"} />
                    <View
                        style={{
                            marginTop: 80
                        }}>
                        <ButtonCPN
                            text={"en"}
                            onPress={() => {
                                setLanguage('en')
                                setIsVisible(true)
                            }} />
                        <View
                            style={{
                                height: 20,
                                width: 10
                            }} />
                        <ButtonCPN
                            text={"th"}
                            onPress={() => {
                                setLanguage('th')
                                setIsVisible(true)
                            }} />
                    </View>

                </View>
                <ConditionCPN
                    isVisible={getIsVisible}
                    resolve={() => {
                        setIsVisible(false)
                        props.navigation.navigate({name: 'HomeScreen', key: 'HomeScreen'})
                    }}
                    reject={() => {
                        setIsVisible(false)
                    }}
                />

            </View>
        </Suspense>
    )
}