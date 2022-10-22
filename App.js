import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StreamChat } from "stream-chat";
import { OverlayProvider, Chat, ChannelList } from "stream-chat-expo";
import { SafeAreaProvider } from 'react-native-safe-area-context';

const API_KEY = "jfcqrb27e9zw";
const client = StreamChat.getInstance(API_KEY);

export default function App() {

  useEffect(() => {
    const connectUser = async () => {
      await client.connectUser(
        {
          id: 'TrangMinh',
          name: 'Minh Trang',
          image: 'https://i.imgur.com/fR9Jz14.png',
        },
        client.devToken('TrangMinh'),
      );

      // create a channel
      const channel = client.channel('messaging', 'minh_trang', {
        name: 'Minh Trang',
      });

      await channel.watch();

    };

    connectUser();

    return () => {
      client.disconnectUser();
    }
  }, []);

  return (
    <SafeAreaProvider>
      <OverlayProvider>
        <Chat client={client}>
          <ChannelList/>
        </Chat>
      </OverlayProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
