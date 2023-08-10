import { Image } from "expo-image";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { white } from "../constants/colors";
import useQueue from "../hooks/useQueue";
import useActivePublicationStore from "../store/activePublication";
import { Post } from "../types/lens";
import getIPFSLink from "../utils/getIPFSLink";
import getRawurl from "../utils/getRawURL";
import { useRouter } from "expo-router";

export default function Card({ publication }: { publication: Post }) {
  const { addToQueue, reset } = useQueue();
  const { setActivePublication } = useActivePublicationStore();
  const poster = getIPFSLink(getRawurl(publication?.metadata?.cover));
  const router = useRouter();

  return (
    <TouchableOpacity
      style={{
        maxWidth: 150,
      }}
      onPress={async () => {
        setActivePublication(publication);
        reset();
        addToQueue(publication);
        router.push("musicPage");
      }}
    >
      <Image
        source={{
          uri: poster,
        }}
        style={{
          width: 150,
          height: 150,
          borderRadius: 4,
        }}
        contentFit="cover"
      />
      <View
        style={{
          marginTop: 8,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: white[700],
            fontWeight: "500",
          }}
          numberOfLines={1}
        >
          {publication?.metadata?.name}
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: white[200],
            fontWeight: "500",
          }}
        >
          By {publication?.profile?.name || publication?.profile?.handle}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
