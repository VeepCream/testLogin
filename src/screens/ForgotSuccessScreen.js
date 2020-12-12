import React from 'react'
import { useEffect, Suspense, useState } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Platform,
    ScrollView,
    Dimensions,
    SafeAreaView
} from 'react-native'
import { useRecoilValue, useRecoilState } from 'recoil'
import CheckBox from '@react-native-community/checkbox';
import SimpleLineIconsIcons from 'react-native-vector-icons/SimpleLineIcons';

import TextFieldCPN from '../components/TextFieldCPN'
import TextCPN from '../components/TextCPN'
import ButtonCPN from '../components/ButtonCPN'
import { colors } from '../libs'

const widthScreen = Dimensions.get('window').width
const heightScreen = Dimensions.get('window').height

export default (props) => {

    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <Suspense fallback={<View><Text>Loading...</Text></View>}>
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <SimpleLineIconsIcons name={"check"} size={120} color={colors.dark} />
                <TextCPN
                    style={{
                        fontWeight: "200",
                        fontSize: 30,
                        marginBottom: 20
                    }}
                    text={"succesful"} />
                <TextCPN
                    style={{
                        fontSize: 20,
                        marginBottom: 20
                    }} text={"succesfulReset"} />
                <ButtonCPN
                    text={"ok"}
                    onPress={() => {
                        props.navigation.navigate({ key: "HomeScreen" });
                    }} />
            </View>
        </Suspense>
    )
}