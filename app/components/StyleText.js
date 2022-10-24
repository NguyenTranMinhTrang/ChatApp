import { Text } from "./Theme";

export function MonoText(props) {
    return <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />;
}