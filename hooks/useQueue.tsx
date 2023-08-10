import TrackPlayer from "react-native-track-player";
import { Post } from "../types/lens";
import getIPFSLink from "../utils/getIPFSLink";
import getRawurl from "../utils/getRawURL";

export default function useQueue() {
  async function addToQueue(publication: Post) {
    const track = {
      url: getIPFSLink(
        publication?.metadata?.media[0]?.optimized?.url ||
          publication?.metadata?.media[0]?.onChain?.url
      ), // Load media from the network
      title: publication?.metadata?.name as string,
      artist: publication?.profile?.name || publication?.profile?.handle,
      artwork: getIPFSLink(getRawurl(publication?.metadata?.cover)), // Load artwork from the network
    };
    await TrackPlayer.add([track]);
    TrackPlayer.play();
  }

  async function reset() {
    await TrackPlayer.reset();
  }

  return { addToQueue, reset };
}
