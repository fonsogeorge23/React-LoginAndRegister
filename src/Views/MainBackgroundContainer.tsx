import { useWindowDimensions, StyleSheet } from "react-native";
import { COLORS } from "../const/colors";

const useStyle = () => {
    const dimensions = useWindowDimensions();
    const ContainerStyle = StyleSheet.create({
        mainContainer: {
            backgroundColor: COLORS.lightGreen,
            height: dimensions.height,
            width: dimensions.width,
            justifyContent: 'center',
            alignItems: 'center',
        },
    })
    return { ContainerStyle }
}

export {useStyle}