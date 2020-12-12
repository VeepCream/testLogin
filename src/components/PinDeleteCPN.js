import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { useRecoilValue, useRecoilState } from 'recoil'
import FeatherIcons from 'react-native-vector-icons/Feather';

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
                <FeatherIcons name="delete" size={30} />
            </View>
        </TouchableOpacity>
    )
}