import React from "react";
import { Line } from "react-chartjs-2";

const labels = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];

const skipped = (ctx, value) =>
  ctx.p0.skip || ctx.p1.skip ? value : undefined;
const down = (ctx, value) =>
  ctx.p0.parsed.y > ctx.p1.parsed.y ? value : undefined;

export const options = {
  responsive: true,
  plugins: {
    legend: {
      rtl: true,
      position: "right" as const,
      align: "end",
      labels: {
        display: true,
        usePointStyle: true,
        color: "rgb(75, 192, 192)",
        // to hide the label box
        boxWidth: 0,
        font: {
          weight: "bold"
        },
        textAlign: "right",
        padding: 35
      }
    },
    title: {
      display: true,
      text: "Line Segment Styling",
      font: {
        size: 18
      }
    }
  },
  segment: {
    borderColor: (ctx) =>
      skipped(ctx, "rgb(0,0,0,0.2)") || down(ctx, "rgb(192,75,75)"),
    borderDash: (ctx) => skipped(ctx, [6, 6])
  }
};

const App = () => {
  const chart = {
    type: "line",
    labels: labels,
    datasets: [
      {
        label: "Test",
        borderWidth: 3,
        data: [12, 8, NaN, 5, 2, 3],
        borderColor: "rgb(75, 192, 192)",
        spanGaps: true
      }
    ]
  };

  return (
    <div className="bg-light p-5">
      <Line data={chart} options={options} />
    </div>
  );
};

export default App;
