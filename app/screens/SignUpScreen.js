import React, { useState } from "react";
import { SafeAreaView, View, TextInput, TouchableOpacity } from 'react-native';
import { useChatContext } from "stream-chat-expo";
import { SIZES, COLORS } from "../constants";
import { Text } from "../components/Theme";

const SignUpScreen = () => {

    const [userName, setUserName] = useState("");
    const [fullname, setFullname] = useState("");

    const { client } = useChatContext();

    const connectUser = async (username, fullname) => {
        await client.connectUser(
            {
                id: username,
                name: fullname,
            },
            client.devToken(username),
        );

        // create a channel
        const channel = client.channel('livestream', 'minh_trang', {
            name: 'Minh Trang',
        });

        await channel.create();

    };


    const signUp = () => {
        connectUser(userName, fullname);

    }

    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <View
                style={{
                    padding: SIZES.padding,
                    width: "100%",
                }}
            >

                <Text
                    darkColor="rgba(255,255,255,0.8)"
                    style={{
                        fontSize: 17,
                        lineHeight: 24,
                        marginBottom: SIZES.base

                    }}
                >
                    Username</Text>
                <TextInput
                    style={{
                        padding: SIZES.base * 2,
                        borderWidth: 1,
                        backgroundColor: COLORS.light.background,
                        borderRadius: SIZES.radius,
                        lineHeight: 24,
                        fontSize: 17,
                        marginBottom: SIZES.padding
                    }}
                    placeholder="Username"
                    placeholderTextColor={"black"}
                    value={userName}
                    onChangeText={(text) => setUserName(text)}
                />

                <Text
                    darkColor="rgba(255,255,255,0.8)"
                    style={{
                        fontSize: 17,
                        lineHeight: 24,
                        marginBottom: SIZES.base

                    }}
                >
                    Fullname</Text>
                <TextInput
                    style={{
                        padding: SIZES.base * 2,
                        borderWidth: 1,
                        backgroundColor: COLORS.light.background,
                        borderRadius: SIZES.radius,
                        lineHeight: 24,
                        fontSize: 17,
                        marginBottom: SIZES.padding
                    }}
                    placeholder="Fullname"
                    placeholderTextColor={"black"}
                    value={fullname}
                    onChangeText={(text) => setFullname(text)}

                />

                <TouchableOpacity
                    style={{
                        backgroundColor: COLORS.light.background,
                        borderRadius: SIZES.radius,
                        padding: SIZES.base * 2,
                        justifyContent: "center",
                        alignItems: "center"
                    }}

                    onPress={signUp}
                >
                    <Text
                        style={{
                            fontSize: 17,
                            lineHeight: 24,
                            color: "black"
                        }}
                    >
                        Sign Up</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default SignUpScreen;