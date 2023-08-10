import Slider from "@react-native-community/slider";
import React from "react";
import { Pressable, Text, View } from "react-native";
import TrackPlayer, {
  State,
  usePlaybackState,
  useProgress,
} from "react-native-track-player";
import { black, white } from "../constants/colors";
import Pause from "../icons/pause";
import Play from "../icons/play";

function Player() {
  const { duration, position } = useProgress();
  const player = usePlaybackState();
  const isPlaying = player === State.Playing;

  return (
    <View>
      <Slider
        style={{ width: "100%" }}
        minimumValue={0}
        maximumValue={duration}
        minimumTrackTintColor={white[600]}
        maximumTrackTintColor={black[100]}
        value={position}
        onSlidingComplete={async (value) => {
          await TrackPlayer.seekTo(value);
        }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 4,
        }}
      >
        <Text
          style={{
            color: white[400],
            fontSize: 12,
            fontWeight: "500",
          }}
        >
          {new Date(position * 1000).toISOString().substring(14, 19)}
        </Text>
        <Text
          style={{
            color: white[400],
            fontSize: 12,
            fontWeight: "500",
          }}
        >
          {new Date(duration * 1000).toISOString().substring(14, 19)}
        </Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 16,
        }}
      >
        <Pressable
          onPress={() => {
            if (isPlaying) {
              TrackPlayer.pause();
            } else {
              TrackPlayer.play();
            }
          }}
        >
          {isPlaying ? (
            <Pause width={64} height={64} color={"white"} />
          ) : (
            <Play width={64} height={64} color={"white"} />
          )}
        </Pressable>
      </View>
    </View>
  );
}

export default React.memo(Player);
