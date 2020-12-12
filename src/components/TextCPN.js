import React from 'react'
import { Text } from 'react-native'
import { useRecoilValue, useRecoilState } from 'recoil'

import translateStore from '../stores/translateStore'

export default (props) => {
    const text = useRecoilValue(translateStore(props.text));
    return (
        <Text
            style={props.style || {}}>
            {text}
        </Text>
    )
}