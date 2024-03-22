import { BoardType } from "./Board";
type RouteType = {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.FC<any>;
  options?: {
    headerShown?: boolean;
    tabBarVisible?: boolean;
  };
};

type NavigationProps = {
  DetailList: {
    boardType: BoardType;
  };
  // BoardScrollView: {};
};

export type { NavigationProps, RouteType };
