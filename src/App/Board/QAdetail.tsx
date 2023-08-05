import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { IconButton, TextButton } from "../../components/common";
const data = [
  {
    id: 1,
    name: "jingjing",
    date: "12312.312.412.3",
  },
  {
    id: 2,
    name: "ahdjfad",
    date: "2024.232.",
  },
  { id: 3, name: "지망이", date: " 2023.03,12" },
];
const QAdetail = () => {
  // const param = useRoute().params as { boardArticle: BoardArticle };
  // const boardArticle = param?.boardArticle;
  // const [post, setPost] = useState<BoardPost>({} as BoardPost);

  // useEffect(() => {
  //   getArticle(boardArticle.boardId)
  //     .then(data => {
  //       if (data.data) setPost(data.data as BoardPost);
  //     })
  //     .catch();
  // }, []);

  return (
    <View style={styles.container}>
      {/* <View style={styles.nameBox}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={styles.headername}>Q&A게시판</Text>
            <TouchableOpacity style={{ marginTop: 5, marginRight: 10 }}>
              <Icon name="bell-o" size={30} />
            </TouchableOpacity>
          </View>
          <View>
            <Text>software</Text>
          </View>
        </View> */}
      <View style={styles.qainfoBox}>
        <View>
          <View style={styles.qaheader}>
            <View>
              <View>
                <Text style={styles.nickname}>jingjing</Text>
              </View>
              <View>
                <Text style={styles.date}>2023.04.13</Text>
              </View>
            </View>
            <View style={styles.qaButtonBox}>
              <TextButton
                style={styles.button}
                backgroundColor={"#f2f2f2"}
                onPress={() => console.log("수정")}
              >
                수정
              </TextButton>
              <TextButton
                style={styles.button}
                backgroundColor={"#f2f2f2"}
                onPress={() => console.log("삭제")}
              >
                삭제
              </TextButton>
            </View>
          </View>
          <View style={styles.qacontextBox}>
            <View>
              <Text style={styles.qatitle}>안녕하세요 인사드립낟,</Text>
            </View>
            <View>
              <Text style={styles.qacontext}>라고할뻔~</Text>
            </View>
          </View>
        </View>

        <View style={styles.cbutBox}>
          <IconButton name="thumbs-o-up" color="skyblue" onPress={() => console.log("추천")}>
            추천
          </IconButton>
          <IconButton name="star-o" color="orange" onPress={() => console.log("스크랩")}>
            스크랩
          </IconButton>
          <IconButton name="exclamation-circle" color="red" onPress={() => console.log("신고")}>
            신고
          </IconButton>
          <IconButton name="comment-o" color="purple" onPress={() => console.log("답변")}>
            답변
          </IconButton>
        </View>
      </View>
      <ScrollView style={styles.scroll}>
        {data.map(answer => (
          <View style={styles.answerBox} key={answer.id}>
            <View style={styles.line} />
            <View style={{ margin: "3%" }}>
              <View style={styles.answerheader}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.answername}>{answer.name}</Text>
                  <Text style={styles.answerdate}>{answer.date}</Text>
                </View>
                <View style={styles.cbutBox}>
                  <IconButton name="lightbulb-o" color="purple" onPress={() => console.log("해결")}>
                    해결
                  </IconButton>
                  <IconButton
                    name="thumbs-o-up"
                    color="skyblue"
                    onPress={() => console.log("추천")}
                  >
                    추천
                  </IconButton>
                  <IconButton
                    name="exclamation-circle"
                    color="red"
                    onPress={() => console.log("신고")}
                  >
                    신고
                  </IconButton>
                </View>
              </View>
              <TouchableOpacity
              // onPress={() => navigation.navigate("QA_answer")}
              >
                <View style={styles.answercontext}>
                  <Text style={styles.qatitle}>제목</Text>
                  <Text numberOfLines={3} style={styles.qacontext}>
                    내용dfadsfadsdfasdfasdfasdfefhidfhiwhjhuuadjfabdsjfuehjvjabdsuvheujadbvjbadsjvbjdsbhbah
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "white",
    flex: 1,
  },
  nameBox: {
    flex: 1,
    padding: "3%",
    justifyContent: "space-between",
  },
  headername: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 4,
  },
  qainfoBox: {
    justifyContent: "space-between",
    flex: 5,
    padding: "4%",
  },
  qaheader: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  qaButtonBox: {
    flexDirection: "row",
  },
  nickname: {
    fontSize: 20,
  },
  date: {
    marginLeft: 5,
    fontSize: 10,
    color: "gray",
  },
  qacontextBox: {
    margin: "5%",
  },
  qatitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  qacontext: {
    marginTop: 10,
    marginLeft: 5,
    fontSize: 17,
  },
  button: {
    borderRadius: 12,
    paddingVertical: 9,
    paddingHorizontal: 15,
  },

  cbutBox: {
    flexDirection: "row",
  },
  answerBox: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#f2f2f2",
  },
  answerheader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  answername: {
    fontSize: 15,
    marginRight: 5,
  },
  answerdate: {
    marginTop: 5,
    fontSize: 11,
    color: "lightgray",
  },
  answercontext: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  // touchdetail: {
  //   margin: "3%",
  // },
  scroll: {
    height: "30%",
  },
});

export default QAdetail;
