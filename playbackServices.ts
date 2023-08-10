import TrackPlayer, { Event } from 'react-native-track-player';

export default async function PlaybackServices() {
    TrackPlayer.addEventListener(Event.RemotePlay, () => {
        TrackPlayer.play()
    });
    TrackPlayer.addEventListener(Event.RemotePause, () => {
        TrackPlayer.pause()
    });
};