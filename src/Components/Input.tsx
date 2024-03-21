import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../const/colors'
import { TextInput } from 'react-native-gesture-handler'

interface InputProps {
    label: string,
    placeHolder?: string,
    icon: string,
    error: string,
    password: boolean,
    keyboard?: string,
    valid:boolean
}

const UserInput: React.FC<InputProps> = ({ label, placeHolder, icon, error, password, keyboard, valid }) => {
    const [validInput, setValid] = useState(valid);
    const [onFocus, setOnFocus] = useState(false);
    return (
        <View>
            <View style={styles.mainContainer}>
                <View style={{ width: '90%', alignItems: 'center' }}>
                    <View
                        style={{
                            ...styles.inputContainer,
                            borderColor: !valid ? COLORS.red : (onFocus?COLORS.black:COLORS.lightGreen)                            
                        }}>
                        <View style={{ justifyContent: 'center' }}>
                            <Icon name={icon} size={30} color={COLORS.lightGreen} style={{ paddingHorizontal: 10 }} />
                        </View>
                        <TextInput
                            keyboardType={keyboard == 'numeric' ? 'numeric' : 'default'}
                            onFocus={()  => setOnFocus(true)}
                            onBlur={() => setOnFocus(false)}
                            style={styles.textStyle}
                            placeholder={placeHolder}
                            placeholderTextColor={COLORS.grey}
                            secureTextEntry={password} />
                    </View>
                </View>
                <View style={{ alignSelf: 'flex-start', marginLeft: 10 }}>
                    <Text style={styles.errorText}>{(validInput) ? ' ' : error}</Text>
                </View>
            </View>
        </View>
    )
}

export default UserInput

const styles = StyleSheet.create({
    textStyle: {
        width: '100%',
        overflow: 'hidden',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'justify',
    },
    errorText: {
        marginBottom: 5,
        color: 'red',
        marginLeft: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        width: '100%',
        padding: 0,
        borderWidth: 2,
        borderColor: COLORS.lightGreen,
        backgroundColor: COLORS.snowWhite,
        borderRadius: 10,
        verticalAlign: 'middle'
    },
    mainContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})