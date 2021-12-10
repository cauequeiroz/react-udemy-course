import { FC } from "react";
import { Wrapper } from "./styles";

type StatusBarProps = {
  count: number,
  completeCount: number
};

const StatusBar: FC<StatusBarProps> = (props) => {
  return <Wrapper>{props.count} items. {props.completeCount} completed.</Wrapper>;
};

export { StatusBar };
