import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import { useColorScheme } from 'react-native';

import { COLORS } from "../constants";
import {
    ModalScreen, NotFoundScreen, TabOneScreen, TabTwoScreen, SignUpScreen
} from '../screens';
import linking from './LinkingConfiguration';

export default function Navigation({ colorScheme }) {
    return (
        <NavigationContainer
            linking={linking}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <RootNavigator />
        </NavigationContainer>
    );
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
    return (
        <Stack.Navigator initialRouteName='SignUp'>
            <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen name="Modal" component={ModalScreen} />
            </Stack.Group>
        </Stack.Navigator>
    );
}

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="TabOne"
            screenOptions={{
                tabBarActiveTintColor: COLORS[colorScheme].tint,
            }}>
            <BottomTab.Screen
                name="TabOne"
                component={TabOneScreen}
                options={({ navigation }) => ({
                    title: 'Tab One',
                    tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
                    headerRight: () => (
                        <Pressable
                            onPress={() => navigation.navigate('Modal')}
                            style={({ pressed }) => ({
                                opacity: pressed ? 0.5 : 1,
                            })}>
                            <FontAwesome
                                name="info-circle"
                                size={25}
                                color={COLORS[colorScheme].text}
                                style={{ marginRight: 15 }}
                            />
                        </Pressable>
                    ),
                })}
            />
            <BottomTab.Screen
                name="TabTwo"
                component={TabTwoScreen}
                options={{
                    title: 'Tab Two',
                    tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
                }}
            />
        </BottomTab.Navigator>
    );
}

function TabBarIcon(props) {
    return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
