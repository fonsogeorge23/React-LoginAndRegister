import { Button, ImageBackground, KeyboardAvoidingView, StatusBar, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../const/colors'
import { useHeaderHeight } from '@react-navigation/elements'
import UserInput from '../Components/Input';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useStyle } from './MainBackgroundContainer';


const image = require('../../assets/Images/loginContainerImage.jpg');

interface NavigationProps {
    navigation: any
}
const LoginScreen: React.FC<NavigationProps> = ({ navigation }) => {
    const { ContainerStyle } = useStyle();
    const [validEmail, setValidEmail] = useState(true);
    const [validPass, setValidPass] = useState(true);
    const height = useHeaderHeight();

    const handleRegistration = () => {
        navigation.navigate("Register");
    }
    return (
        <View>
            <View style={ContainerStyle.mainContainer}>
                <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.lightGreen} />
                <View style={styles.LoginContainer}>
                    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                        <View style={styles.TopContainer}>
                            <View style={styles.TopContainerContent}>
                                <Text style={styles.textStyle}>Chase
                                    <Text style={{ color: COLORS.lightGreen }}>  Your  </Text>
                                    Dream, {'\n'}
                                    <Text style={{ color: COLORS.lightGreen }}>Own </Text> the
                                    <Text style={{ color: COLORS.lightGreen }}>  Moment</Text>
                                </Text>
                            </View>
                        </View>
                        <KeyboardAvoidingView
                            style={styles.middleContainer}
                            behavior="height"
                            keyboardVerticalOffset={65}
                        >
                            <UserInput label={'Email Address'} valid={validEmail} placeHolder={'Enter your email'} icon={'email'} error={'Please enter a valid email'} password={false} />
                            <UserInput label={'Password'} valid={validPass} placeHolder={'Enter your password'} icon={'lock'} error={'Please enter a valid password'} password={true} />
                            <TouchableOpacity
                                style={styles.buttonStyle}
                            ><Text
                                style={{ color: COLORS.black, fontWeight: 'bold', fontSize: 15 }}
                            >Sign In</Text>
                            </TouchableOpacity>
                            <View style={styles.rightText}>
                                <Text style={styles.normalTextStyle}>
                                    Don't have an Account?{' '}
                                    <Text
                                        style={styles.touchableTextStyle}
                                        onPress={handleRegistration}
                                    >Sign Up</Text>
                                </Text>
                            </View>
                        </KeyboardAvoidingView>
                        <View style={styles.bottomContainer}></View>
                    </ImageBackground>
                </View>
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    buttonStyle: {
        borderColor: COLORS.snowWhite,
        borderWidth: 2,
        padding: 10,
        borderRadius: 20,
        backgroundColor: COLORS.lightGreen
    },
    touchableTextStyle: {
        color: COLORS.lightGreen,
        fontSize: 15,
        textDecorationLine: 'underline'
    },
    normalTextStyle: {
        fontSize: 15,
        color: COLORS.snowWhite,
    },
    textStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: COLORS.snowWhite,
        textAlign: 'center'
    },
    rightText: {
        marginLeft: 'auto',
        marginRight: 20,
        marginTop: 10
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        width: '100%'
    },
    LoginContainer: {
        width: '90%',
        height: '80%',
        resizeMode: 'cover',
        borderRadius: 15,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    },
    TopContainer: {
        flex: 0.75,
        fontSize: 30,
        justifyContent: 'center',
        alignContent: 'center',
        marginVertical: 30
    },
    TopContainerContent: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#000000c0',
        borderRadius: 20
    },
    middleContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#000000c0',
        borderRadius: 20,
        width: '90%'
        // margin: 10
    },
    bottomContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        marginTop: 10,
    }
})

