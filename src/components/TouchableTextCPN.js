import React, { useEffect, useState, useRef } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useRecoilValue, useRecoilState } from 'recoil'
import { colors } from '../libs'

import translateStore from '../stores/translateStore'

export default (props) => {
    const text1 = useRecoilValue(translateStore(props.text1));
    const text2 = useRecoilValue(translateStore(props.text2));
    const [countDown, setCountDown] = useState(60);
    useEffect(() => {
        let myInterval = setInterval(() => {
            if (countDown > 0) {
                setCountDown(countDown - 1);
            }
            if (countDown === 0) {
                clearInterval(myInterval)
            }
        }, 1000)
        return () => {
            clearInterval(myInterval);
        };
    });



    return (
        <TouchableOpacity
            onPress={() => {
                if (countDown === 0) {
                    setCountDown(60)
                }
            }}>
            <View
                style={{
                    height: 20
                }}>
                <Text
                    style={{
                        color: countDown !== 0 ? colors.gray : colors.light
                    }}>
                    {countDown !== 0 ? `${text1} (${countDown})` : text2}
                </Text>
            </View>
        </TouchableOpacity>
    )
}