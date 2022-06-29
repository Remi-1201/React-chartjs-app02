import React from "react";
import { Line } from "react-chartjs-2";

const labels = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];

const skipped = (ctx, value) =>
  ctx.p0.skip || ctx.p1.skip ? value : undefined;

const down = (ctx, value) =>
  ctx.p0.parsed.y > ctx.p1.parsed.y ? value : undefined;

export const options = {
  responsive: true,
  // 凡例の設定
  plugins: {
    legend: {
      // rtl = 凡例ボックスと項目名の書き順を逆にする。デフォルトは false (trueで項目名が先に出てくるようにした)
      rtl: true,
      //凡例を右側に
      position: "right" as const,
      // 凡例の位置をデータに近づける
      align: "end",
      labels: {
        // 項目名を表示したいのでtrueに
        display: true,
        // データと項目名の色を揃える
        color: "rgb(75, 192, 192)",
        // 凡例ボックスの幅、ボックスは不要なので【0】で非表示にする
        boxWidth: 0,
        // 項目名の書式設定
        font: {
          weight: "bold"
        },
        textAlign: "right",
        // x軸から少し離れるようにpaddingを設定
        padding: 35
      }
    },
    title: {
      // trueでタイトルを表示に設定
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
