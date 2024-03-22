import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { TextThemed } from "../../components/common";
import { Board, BoardArticle, BoardType } from "../../types/Board";
import { NavigationProps } from "../../types/Navigation";
import ScrollList from "./ScrollList";

// export default function ({
//   boardType,
//   board
// }: {
//   boardType: BoardType;
//   board: Board[] | BoardArticle[];
// }): JSX.Element {
//   switch (boardType) {
//     default:
//       return BoardScroll(board);
//   }
// }

type BoardScrollProps = {
  boardType: BoardType;
  board: Board[] | BoardArticle[];
  title: string;
  iconName: string;
  navigator?: string;
  iconColor: string;
};

export default function BoardScroll(props: BoardScrollProps): JSX.Element {
  const { title, iconName, navigator, iconColor, board } = props;

  const params = useRoute().params as { boardType: BoardType };
  const boardType = params?.boardType;
  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={styles.total}>
      <View style={styles.hHead}>
        <TextThemed style={styles.hFont}>
          {" "}
          {title} <Icon name={iconName} size={25} color={iconColor} />
        </TextThemed>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate({ navigator }, { boardType: boardType });
          }}
        >
          <TextThemed style={styles.detail}>더보기</TextThemed>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {board.map(board => (
          <View key={board.boardId} style={styles.content}>
            <ScrollList post={board} boardType={boardType} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
  },
  detail: {
    fontSize: 15,
    color: "#aaa",
    justifyContent: "flex-end",
  },
  total: {
    marginBottom: 50,
  },
  hHead: {
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "space-between",
  },
  hFont: {
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: "#CBD7E6",
    justifyContent: "space-between",
    minWidth: 200,
    minHeight: 90,
    padding: 20,
    marginRight: 10,
    borderRadius: 25,
  },
});
