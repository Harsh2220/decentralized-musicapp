import {
  Pressable,
  SafeAreaView,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import useActivePublicationStore from "../store/activePublication";
import { Image } from "expo-image";
import getIPFSLink from "../utils/getIPFSLink";
import getRawurl from "../utils/getRawURL";
import Player from "../components/player";
import { white } from "../constants/colors";

export default function MusicPage() {
  const { width } = useWindowDimensions();
  const { activePublication } = useActivePublicationStore();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "black",
      }}
    >
      <Image
        source={{
          uri: getIPFSLink(getRawurl(activePublication?.metadata?.cover)),
        }}
        style={{
          width: width / 1.15,
          height: width / 1.15,
          alignSelf: "center",
          marginTop: 48,
          marginBottom: 32,
          borderRadius: 8,
        }}
        contentFit="cover"
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: width / 1.15,
          alignSelf: "center",
        }}
      >
        <View
          style={{
            maxWidth: "90%",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: white[700],
              fontWeight: "500",
            }}
          >
            {activePublication?.metadata?.name}
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: white[200],
              fontWeight: "500",
              marginTop: 4,
            }}
          >
            By{" "}
            {activePublication?.profile?.name ||
              activePublication?.profile?.handle}
          </Text>
        </View>
      </View>
      <View style={{ width: width / 1.15, alignSelf: "center", marginTop: 16 }}>
        <Player />
      </View>
    </SafeAreaView>
  );
}
