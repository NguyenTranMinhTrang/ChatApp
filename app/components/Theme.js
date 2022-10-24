import { Text as DefaultText, View as DefaultView } from 'react-native';
import { useColorScheme } from 'react-native';
import { COLORS } from "../constants";

export function useThemeColor(props, colorName) {
    const theme = useColorScheme();
    const colorFromProps = props[theme];
    if (colorFromProps) {
        return colorFromProps;
    } else {
        return COLORS[theme][colorName];
    }
}

export function Text(props) {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
    return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props) {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

    return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

