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
const livedata = [];
let LineChart = new Chart(content, {
  type: "line",
  data: {
    labels: monthNames,
    datasets: [
      {
        label: "Monthly Sales 2024",
        data: [80, 56, 97, 25, 46, 77, 55, 87, 95, 12, 74, 36],
      },
    ],
  },
});
