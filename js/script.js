const content = document.getElementById("Line");
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const year2023 = [44, 51, 57, 62, 65, 67, 70, 74, 76, 84, 85, 87];
const year2024 = [60, 61, 71, 72, 73, 74, 75, 84, 85, 86, 93, 97];

let LineChart = new Chart(content, {
  type: "line",
  data: {
    labels: monthNames,
    datasets: [
      {
        label: "Monthly Sales 2023",
        data: year2023,
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(255, 159, 67, 1.0)",
        borderColor: "rgba(10, 189, 227, 1.0)",
        borderCapStyle: "round",
        borderJoinStyle: "round",
        pointBorderColor: "rgba(29, 209, 161, 1.0)",
        pointBackgroundColor: "rgba(29, 209, 161, 1.0)",
        pointHoverBorderColor: "rgba(238, 82, 83, 1.0)",
        pointHoverBackgroundColor: "rgba(0, 210, 211, 1.0)",
        pointHoverBorderWidth: 4,
      },
      {
        label: "Monthly Sales 2024",
        data: year2024,
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(255, 67, 67, 1.0)",
        borderColor: "rgba(67, 135, 255, 1.0)",
        borderCapStyle: "round",
        borderJoinStyle: "round",
        pointBorderColor: "rgba(255, 67, 67, 1.0)",
        pointBackgroundColor: "rgba(67, 135, 255, 1.0)",
        pointHoverBorderColor: "rgba(238, 82, 83, 1.0)",
        pointHoverBackgroundColor: "rgba(0, 210, 211, 1.0)",
        pointHoverBorderWidth: 4,
      },
    ],
  },
});
