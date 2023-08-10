import React from "react";
import { ActivityIndicator, FlatList, SafeAreaView, View } from "react-native";
import {
  ExplorePublicationRequest,
  Post,
  PublicationMainFocus,
  PublicationSortCriteria,
  PublicationTypes,
  useExploreQuery,
} from "../types/lens";
import Card from "../components/card";
import { StatusBar } from "expo-status-bar";

export default function Loader() {
  const QueryRequest: ExplorePublicationRequest = {
    sortCriteria: PublicationSortCriteria.Latest,
    noRandomize: true,
    publicationTypes: [PublicationTypes.Post],
    metadata: {
      mainContentFocus: [PublicationMainFocus.Audio],
    },
    limit: 10,
  };

  const { data, error, loading, refetch, fetchMore } = useExploreQuery({
    variables: {
      request: QueryRequest,
    },
  });

  const renderItem = ({ item }: { item: Post }) => {
    if (!item.hidden) {
      return <Card publication={item} />;
    }
    return <></>;
  };

  if (loading)
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "black",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator />
      </View>
    );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "black",
      }}
    >
      <StatusBar style="light" />
      <FlatList
        renderItem={renderItem}
        data={data?.explorePublications.items as Post[]}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-evenly",
        }}
        contentContainerStyle={{
          gap: 16,
          marginVertical: 32,
          paddingBottom: 64,
        }}
      />
    </SafeAreaView>
  );
}
