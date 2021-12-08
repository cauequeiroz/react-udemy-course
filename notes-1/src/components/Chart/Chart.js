import ChartBar from "./ChartBar";
import * as S from './Chart.styles';

const Chart = (props) => {
  const maxValue = Math.max(...props.points.map((point) => point.value));

  return (
    <S.Wrapper>
      {props.points.map((point) => (
        <ChartBar
          key={point.month}
          label={point.month}
          value={point.value}
          maxValue={maxValue}
        />
      ))}
    </S.Wrapper>
  );
};

export default Chart;
