import React from 'react'
import { Text } from 'react-native'
import { useRecoilValue, useRecoilState } from 'recoil'
import Dialog from "react-native-dialog";

import translateStore from '../stores/translateStore'

export default (props) => {
    const text = useRecoilValue(translateStore(props.text));
    const title = useRecoilValue(translateStore(props.title));
    return (
        <Dialog.Container visible={props.visible}>
            <Dialog.Title>{title}</Dialog.Title>
            <Dialog.Description>
                {text}
            </Dialog.Description>
            <Dialog.Button
                label="Ok"
                onPress={() => {
                    props.onPress()
                 }} />
        </Dialog.Container>
    )
}