import { Dimensions, Keyboard, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../const/colors'
import { useStyle } from './MainBackgroundContainer';
import UserInput from '../Components/Input';
import { TouchableOpacity } from 'react-native-gesture-handler';
interface NavigationProps {
    navigation: any
}

const RegisterScreen: React.FC<NavigationProps> = ({ navigation }) => {
    const [validEmail, setValidEmail] = useState(true);
    const [validName, setValidName] = useState(true);
    const [validPhone, setValidPhone] = useState(true);
    const [validPassword, setValidPassword] = useState(true);
    const { ContainerStyle } = useStyle();
    const handleSignIn = () => {
        navigation.navigate("Login");
    }
    const validateInputs = () => {
        Keyboard.dismiss();
    }
    return (
        <View>
            <View style={ContainerStyle.mainContainer}>
                <View style={styles.topContainer}>
                    <Text style={styles.heading}>Register</Text>
                    <Text style={styles.textStyle}>Enter your details</Text>
                </View>
                <KeyboardAvoidingView
                    style={styles.bottomContainer}
                    behavior="padding"
                    keyboardVerticalOffset={10}
                    enabled>
                    <UserInput
                        label={'Email Address'}
                        valid={validEmail}
                        placeHolder={'Enter your email'}
                        icon={'email'}
                        error={'Please enter a valid email'}
                        password={false} />
                    <UserInput
                        label={'Full Name'}
                        valid={validName}
                        placeHolder={'Enter your fullname'}
                        icon={'account'}
                        error={'Please enter a valid name'}
                        password={false} />
                    <UserInput
                        label={'Phone Number'}
                        valid={validPhone}
                        keyboard='numeric'
                        placeHolder={'Enter your phone number'}
                        icon={'phone'}
                        error={'Please enter a valid email'}
                        password={false} />
                    <UserInput
                        label={'Password'}
                        valid={validPassword}
                        placeHolder={'Enter your password'}
                        icon={'lock'}
                        error={'Please enter a valid password'}
                        password={true} />
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={validateInputs}>
                        <Text style={styles.buttonTextStyle}>Register </Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
                <View style={styles.topContainer}>
                    <View style={styles.rightText}>
                        <Text style={styles.normalTextStyle}>
                            Already have an Account?{' '}
                            <Text
                                style={styles.touchableTextStyle}
                                onPress={handleSignIn}
                            >Sign In</Text>
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    heading: {
        fontSize: 30,
        color: COLORS.black,
        fontWeight: 'bold'
    },
    buttonTextStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.black,
        textAlign: 'center'
    },
    textStyle: {
        fontSize: 15,
        color: COLORS.grey,
        fontWeight: 'bold',
    },
    normalTextStyle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: COLORS.black,
    },
    rightText: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10,
    },
    touchableTextStyle: {
        color: COLORS.black,
        fontSize: 15,
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    mainContainer: {
        backgroundColor: COLORS.lightGreen,
        height: Dimensions.get("window").height,
        justifyContent: 'center',
        alignItems: 'center'
    },
    topContainer: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 10,
    },
    bottomContainer: {
        flex: 4,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    buttonStyle: {
        borderColor: COLORS.black,
        borderWidth: 2,
        padding: 10,
        borderRadius: 20,
        backgroundColor: COLORS.snowWhite
    },
})