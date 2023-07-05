import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";

const boardData = [
  {
    id: 1,
    board: "자유 게시판",
    title: "HI",
    comment: "안녕하세요",
    userName: "김민수",
    created: "20분 전",
    good: 0,
    command: 0,
  },
  {
    id: 2,
    board: "지식 게시판",
    title: "Hello",
    comment: "안녕하세요",
    userName: "anjgkwl",
    created: "30분 전",
    good: 2,
    command: 2,
  },
  {
    id: 3,
    board: "Q&A 게시판",
    title: "How are you?",
    comment: "안녕하세요",
    userName: "dkanrjsk",
    created: "1시간 전",
    good: 8,
    command: 5,
  },
  {
    id: 4,
    board: "자유 게시판",
    title: "I'm fine, thank you.",
    comment: "안녕하세요",
    userName: "dkanrjsk",
    created: "3시간 전",
    good: 0,
    command: 5,
  },
  {
    id: 5,
    board: "자유 게시판",
    title: "And you?",
    comment: "안녕하세요",
    userName: "dkanrjsk",
    created: "2023-06-30",
    good: 8,
    command: 0,
  },
  {
    id: 6,
    board: "자유 게시판",
    title: "Good bye.",
    comment: "안녕하세요",
    userName: "dkssud",
    created: "2023-06-30",
    good: 7,
    command: 5,
  },
  {
    id: 7,
    board: "자유 게시판",
    title: "See you tomorrow.",
    comment: "안녕하세요",
    userName: "dkanrjsk",
    created: "2023-06-30",
    good: 8,
    command: 5,
  },
];

const DetailBoardList = () => {
  return (
    <ScrollView style={styles.container}>
      {boardData.map((board) => (
        <View key={board.id} style={styles.body}>
          <Pressable onPress={() => console.log(board.title)}>
            <Text style={styles.board}>{board.board}</Text>
            <View style={styles.head}>
              <Text style={styles.title}>{board.title}</Text>
              <Text style={styles.userName}>{board.userName}</Text>
            </View>
            <View>
              <Text style={styles.comment}>{board.comment}</Text>
            </View>
            <View style={styles.head}>
              {board.good > 0 ? (
                <>
                  <Feather name="thumbs-up" size={13} color="tomato" />
                  <Text style={styles.good}>&#9; {board.good}</Text>
                </>
              ) : board.command == 0 ? (
                <View style={{ flex: 1 }}></View>
              ) : null}
              {board.command > 0 ? (
                <>
                  <FontAwesome name="comment-o" size={13} color="blue" />
                  <Text style={styles.command}>&#9; {board.command}</Text>
                </>
              ) : null}
              <Text style={{ justifyContent: "flex-end", fontSize: 10 }}>
                {board.created}
              </Text>
            </View>
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
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    justifyContent: "flex-start",
    fontWeight: "bold",
  },
  board: {
    fontSize: 10,
    color: "gray",
  },
  userName: {
    fontSize: 10,
    color: "gray",
  },
  comment: {
    fontSize: 15,
    marginVertical: 5,
  },
  bottom: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  good: {
    flex: 1,
    fontSize: 10,
    justifyContent: "flex-start",
  },
  command: {
    flex: 9,
    fontSize: 10,
  },
});

export default DetailBoardList;
