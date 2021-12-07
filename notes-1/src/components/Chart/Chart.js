import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const maxValue = Math.max(...props.points.map(point => point.value));

  return (
    <div className="chart">
      {props.points.map((point) => (
        <ChartBar key={point.month} label={point.month} value={point.value} maxValue={maxValue} />
      ))}
    </div>
  );
};

export default Chart;
