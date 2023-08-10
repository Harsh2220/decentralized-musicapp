import "expo-router/entry";
import TrackPlayer from "react-native-track-player";
import PlaybackServices from "./playbackServices";

TrackPlayer.registerPlaybackService(() => PlaybackServices);
