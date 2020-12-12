import React from 'react'
import { Text } from 'react-native'
import { useRecoilValue, useRecoilState } from 'recoil'

import translateStore from '../stores/translateStore'
import TextCPN from './TextCPN'

export default (props) => {

    return props.state === 0 ?
        <TextCPN
            text={"setPinCode"}
            style={{
                marginBottom: 20
            }} />
        :
        props.state === 1 ?
            <TextCPN
                text={"confirmPinCode"}
                style={{
                    marginBottom: 20
                }} />
            :
            <TextCPN
                text={"enterPin"}
                style={{
                    marginBottom: 20
                }} />
}