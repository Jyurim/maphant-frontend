import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, Pressable } from "react-native";

import PostSummary from "../../components/Board/PostSummary";
import { BoardPost, BoardPostMockup } from "../../types/Board";
import { listArticle } from "../../Api/board";

const DetailList = () => {
  const [boardData, setboardData] = useState<BoardPostMockup[]>([]);
  useEffect(() => {
    listArticle("all", 1).then((data: BoardPostMockup[]) => {
      setboardData(data);
    });
  }, []);

  return (
    <ScrollView style={styles.container}>
      {boardData.map((board) => (
        <View key={board.id} style={styles.body}>
          <Pressable onPress={() => console.log(board.title)}>
            <PostSummary post={board} />
          </Pressable>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  body: {
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingVertical: 10,
  },
});
export default DetailList;
