import { ApolloProvider } from "@apollo/client";
import { Stack } from "expo-router";
import React from "react";
import { client } from "../apollo/client";
import TrackPlayer, {
  Capability,
  IOSCategory,
  IOSCategoryOptions,
} from "react-native-track-player";

const commonCapabilities = [
  Capability.Play,
  Capability.Pause,
  Capability.JumpForward,
  Capability.JumpBackward,
];

async function setup() {
  try {
    await TrackPlayer.setupPlayer({
      iosCategory: IOSCategory.Playback,
      iosCategoryOptions: [IOSCategoryOptions.AllowAirPlay],
    });
    await TrackPlayer.updateOptions({
      capabilities: commonCapabilities,
    });
  } catch (error) {
    console.log(error);
  }
}

const StackLayout = () => {
  React.useEffect(() => {
    setup();
  }, []);

  return (
    <ApolloProvider client={client}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="musicPage"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </ApolloProvider>
  );
};

export default StackLayout;
