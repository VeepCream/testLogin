import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { useRecoilValue, useRecoilState } from 'recoil'

import { colors } from '../libs'

export default (props) => {
    return (
        <TouchableOpacity
            onPress={() => {
                props.onPress()
            }}>
            <View
                style={{
                    width: 90,
                    height: 90,
                    borderRadius: 90,
                    borderColor: colors.dark,
                    borderWidth: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text
                    style={{
                        fontSize: 30
                    }}>
                    {props.text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}