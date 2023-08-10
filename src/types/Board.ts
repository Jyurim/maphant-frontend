type BoardPost = {
  board: {
    id: number;
    parentId: number;
    categoryId: number;
    userId: number;
    typeId: string;
    title: string;
    body: string;
    state: string;
    isHide: number;
    isComplete: number;
    isAnonymous: number;
    createdAt: Date;
    modifiedAt?: Date;
    commentCnt: number;
    likeCnt: number;
    reportCnt: number;
    imageUrl?: string;
    isLike: boolean;
  };
  answerList?: {
    id: number;
    parentId: number;
    categoryId: number;
    userId: number;
    typeId: string;
    title: string;
    body: string;
    state: string;
    isHide: number;
    isComplete: number;
    isAnonymous: number;
    createdAt: Date;
    modifiedAt?: Date;
    commentCnt: number;
    likeCnt: number;
    reportCnt: number;
    imageUrl?: string;
  };
};

type BoardArticle = {
  boardId: number;
  title: string;
  createdAt: Date;
  modifiedAt: Date;
  userNickname: string;
  commentCnt: number;
  likeCnt: number;
  isAnonymous: number;
  isHide: number;
  isLike: number | null;
};

type HotBoard = {
  boardId: number;
  title: string;
  userId: number;
  userNickname: string;
  typeId: number;
  type: string;
  commentCnt: number;
  likeCnt: number;
  isAnonymous: number;
  isHide: number;
  isLike?: boolean;
  createdAt: Date;
  modifiedAt?: Date;
};

type BoardType = {
  id: number;
  name: string;
  postCnt: number;
};

type SortType = {
  id: number;
  name: string;
};

type ReportType = {
  id: number;
  name: string;
};

type commentType = {
  id: number;
  user_id: number;
  nickname: string;
  board_id: number;
  parent_id: number;
  body: string;
  is_anonymous: number;
  created_at: Date;
  like_cnt: number;
  comment_id: number;
};

export type { BoardArticle, BoardPost, BoardType, commentType, HotBoard, ReportType, SortType };
