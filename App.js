import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StreamChat } from "stream-chat";
import { OverlayProvider, Chat, ChannelList } from "stream-chat-expo";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './app/navigation';
import useCachedResources from './app/hooks/useCachedResources';
import { useColorScheme } from 'react-native';

const API_KEY = "jfcqrb27e9zw";
const client = StreamChat.getInstance(API_KEY);

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  useEffect(() => {
    return () => {
      client.disconnectUser();
    }
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Chat client={client}>
          <Navigation colorScheme={colorScheme} />
        </Chat>
        {/* <OverlayProvider>
        <Chat client={client}>
          <ChannelList />
        </Chat>
      </OverlayProvider> */}
      </SafeAreaProvider>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
