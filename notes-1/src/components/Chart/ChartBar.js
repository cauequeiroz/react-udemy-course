import * as S from './ChartBar.styles';

const ChartBar = (props) => {
  let barHeight = 0;

  if (props.maxValue > 0) {
    barHeight = Math.round((props.value / props.maxValue) * 100);
  }

  return (
    <S.Wrapper>
      <S.Inner>
        <S.Fill size={barHeight} />
      </S.Inner>
      <S.Label>{props.label}</S.Label>
    </S.Wrapper>
  );
}

export default ChartBar;