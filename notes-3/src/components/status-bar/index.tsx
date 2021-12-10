import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Wrapper } from "./styles";

const StatusBar: FC = () => {
  const { count, completeCount } = useSelector((state: RootState) => state);

  return (
    <Wrapper>
      {count} items. {completeCount} completed.
    </Wrapper>
  );
};

export { StatusBar };
