import React from 'react'
import { Text, View } from 'react-native'
import { useRecoilValue, useRecoilState } from 'recoil'
import { TextField } from 'react-native-material-textfield';

import translateStore from '../stores/translateStore'
import { colors } from '../libs'

export default (props) => {
    const label = useRecoilValue(translateStore(props.label));
    return (
        <View
            style={{
                margin: 8,
                marginTop: Platform.select({ ios: 0, android: 0 }),
                paddingLeft: 20,
                paddingRight: 20
            }}>
            <TextField
                value={""}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                onFocus={() => { }}
                onChangeText={() => { }}
                returnKeyType='next'
                label={label}
                tintColor={colors.primary}
                baseColor={colors.dark} />
        </View>
    )
}