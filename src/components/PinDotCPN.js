import React from 'react'
import { View } from 'react-native'
import { useRecoilValue, useRecoilState } from 'recoil'
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';

import { colors } from '../libs';

export default (props) => {
    return (
        <View
            style={{
                flexDirection: "row",
                marginBottom: 20
            }}>
            <View
                style={{
                    marginLeft: 10
                }}>
                <FontAwesomeIcons
                    name={props.pin.length < 1 ? "circle-thin" : "circle"}
                    size={20}
                    color={colors.light} />
            </View>
            <View
                style={{
                    marginLeft: 10
                }}>
                <FontAwesomeIcons
                    name={props.pin.length < 2 ? "circle-thin" : "circle"}
                    size={20}
                    color={colors.light} />
            </View>
            <View
                style={{
                    marginLeft: 10
                }}>
                <FontAwesomeIcons
                    name={props.pin.length < 3 ? "circle-thin" : "circle"}
                    size={20}
                    color={colors.light} />
            </View>
            <View
                style={{
                    marginLeft: 10
                }}>
                <FontAwesomeIcons
                    name={props.pin.length < 4 ? "circle-thin" : "circle"}
                    size={20}
                    color={colors.light} />
            </View>
            <View
                style={{
                    marginLeft: 10
                }}>
                <FontAwesomeIcons
                    name={props.pin.length < 5 ? "circle-thin" : "circle"}
                    size={20}
                    color={colors.light} />
            </View>
            <View
                style={{
                    marginLeft: 10
                }}>
                <FontAwesomeIcons
                    name={props.pin.length < 6 ? "circle-thin" : "circle"}
                    size={20}
                    color={colors.light} />
            </View>

        </View>
    )
}