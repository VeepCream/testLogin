import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { useRecoilValue, useRecoilState } from 'recoil'
import MaterialIconsIcons from 'react-native-vector-icons/MaterialIcons';

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
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <MaterialIconsIcons
                    name="fingerprint"
                    size={60} />
            </View>
        </TouchableOpacity>
    )
}