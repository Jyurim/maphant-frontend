import PostWrite from "../App/Board/ PostWrite";
import BoardList, { BoardType } from "../App/Board/BoardList";
import BoardScrollView from "../App/Board/BoardScrollView";
import DetailList from "../App/Board/DetailList";
import Edit from "../App/Board/EditPost";
import HotList from "../App/Board/HotList";
import PostDetail from "../App/Board/PostDetail";
import QA_answer from "../App/Board/QA_answer";
import QAdetail from "../App/Board/QAdetail";
import TotalList from "../App/Board/TotalList";
import VoteList from "../App/Board/VoteList";
import VoteTotalList from "../App/Board/VoteTotalList";
import Profile from "../App/Mypage/Profile";
import WriteBoard from "../App/Mypage/WriteBoard";
import WriteContent from "../App/Mypage/WriteContent";
import { BoardArticle } from "../types/Board";
import { RouteType } from "../types/Navigation";

const Routes: RouteType[] = [
  {
    name: "BoardList",
    component: BoardList,
  },
  {
    name: "BoardScrollView",
    component: BoardScrollView,
  },
  {
    name: "DetailList",
    component: DetailList,
  },
  {
    name: "QnAdetail",
    component: QAdetail,
  },
  {
    name: "PostDetail",
    component: PostDetail,
  },
  {
    name: "PostWrite",
    component: PostWrite,
  },
  {
    name: "editPost",
    component: Edit,
  },
  {
    name: "QA_answer",
    component: QA_answer,
  },
  {
    name: "HotBoard",
    component: TotalList,
  },
  {
    name: "HotDetailList",
    component: HotList,
  },
  {
    name: "VoteBoard",
    component: VoteTotalList,
  },
  {
    name: "VoteDetailList",
    component: VoteList,
  },
  {
    name: "Profile",
    component: Profile,
  },
  {
    name: "WriteBoard",
    component: WriteBoard,
  },
  {
    name: "WriteContent",
    component: WriteContent,
  },
];

export type NavigationProp = {
  BoardList: undefined;
  BoardScrollView: { boardType: BoardType };
  DetailList: { boardType: BoardType };
  PostDetail: { id: number; preRender?: BoardArticle };
  QnAdetail: { id: number; preRender?: BoardArticle };
  Post: { boardType: BoardType };
  editPost: { post: BoardArticle };
  QA_answer: { id: number; preRender?: BoardArticle };
  HotBoard: undefined;
  VoteBoard: undefined;
  HotDetailList: undefined;
  VoteDetailList: undefined;
};

export default Routes;
