import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Alert, ScrollView, StyleSheet } from "react-native";

import { listArticle, listHotBoard, listVoteBoard } from "../../Api/board";
import { Container, Spacer } from "../../components/common";
import { Board, BoardArticle, BoardType } from "../../types/Board";
import BoardScroll from "./BoardScroll";

const BoardScrollView: React.FC = () => {
  const params = useRoute().params as { boardType: BoardType };
  const boardType = params?.boardType;
  const [boardData, setboardData] = useState<BoardArticle[]>([]);
  const [hotBoard, setHotBoard] = useState<Board[]>([]);
  const [voteBoard, setVoteBoard] = useState<Board[]>([]);
  useEffect(() => {
    listHotBoard(boardType.id, 1, 5)
      .then(data => {
        if (data.data) setHotBoard(data.data.list as Board[]);
      })
      .catch(err => Alert.alert(err));
  }, []);

  useEffect(() => {
    listArticle(boardType.id, 1, 10, 5, 1, -1)
      .then(data => {
        if (data.data) setboardData(data.data.list as BoardArticle[]);
      })
      .catch(err => Alert.alert(err));
  }, []);

  useEffect(() => {
    listVoteBoard(boardType.id, 1, 5)
      .then(data => {
        if (data.data) setVoteBoard(data.data.list as Board[]);
      })
      .catch(err => Alert.alert(err));
  }, []);

  return (
    <Container style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Spacer size={20} />
        <BoardScroll
          title="Hot 게시글"
          iconName="fire"
          board={hotBoard}
          boardType={boardType}
          navigator="HotDetailList"
          iconColor="red"
        />
        <BoardScroll
          title="최신 게시글"
          iconName="elephant"
          board={boardData}
          boardType={boardType}
          navigator="DetailList"
          iconColor="#5299EB"
        />
        <BoardScroll
          title="투표 게시글"
          iconName="vote"
          board={voteBoard}
          boardType={boardType}
          navigator="VoteDetailList"
          iconColor="#5299EB"
        />
      </ScrollView>
    </Container>
  );
};

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

export default BoardScrollView;
