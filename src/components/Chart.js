import React from "react";
import { connect } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ weather }) => {
  return (
    <div className="chart">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={weather}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis width={20} />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="temperature"
            fill="#82ca9d"
            name="Temperature"
            barGap={200}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const mapStateToProps = ({ weather }) => ({ weather });
export default connect(mapStateToProps)(Chart);
