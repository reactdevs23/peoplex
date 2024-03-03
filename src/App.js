import { useState } from "react";

import MainComponent from "./components/MainComponent/MainComponent";

import { arrow, logo, pattern } from "./images";
import Pattern from "./images/Pattern";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'Radley', sans-serif",
    headingFontFamily: "'Arsenal', sans-serif",
    mainBg: "#fff",
    primaryColor: "#F72585",
    secondaryColor: "#E7E0FA",
    accentColor: "#3A0CA3",
    logo: logo,
    arrow: arrow,
    pattern: <Pattern />,
    initialPage: {
      bg: "#3A0CA3",
      heading:
        "Building the best candidate and employee experience through analytics",
    },
    data: [
      {
        idBg: "https://media.geeksforgeeks.org/wp-content/uploads/20231218222854/1.png",
        bg: "#F72585",
        heading: "Introduction to Employee Lifecycle Analytics",
        list: [
          "Modern organizations face challenges in optimizing workforce productivity, with headcount costs often exceeding 60% of total operating costs.",
          "Employee lifecycle analytics uses data and insights throughout the employee's journey, from recruitment to exit, aiming to enhance the overall employee experience and productivity.",
        ],
      },
      {
        idBg: "https://media.geeksforgeeks.org/wp-content/uploads/20231218222854/1.png",
        bg: "#F72585",
        pattern: <Pattern color="#f7f7f7" />,
        heading: "Key Benefits",
        list: [
          "Modern organizations face challenges in optimizing workforce productivity, with headcount costs often exceeding 60% of total operating costs.",
          "Employee lifecycle analytics uses data and insights throughout the employee's journey, from recruitment to exit, aiming to enhance the overall employee experience and productivity.",
        ],
      },
      {
        idBg: "https://media.geeksforgeeks.org/wp-content/uploads/20231218222854/1.png",
        bg: "#F72585",

        heading: "Three Levers of Workforce Productivity",
        list: [
          "Viewing the employee journey as a series of data-rich events enables informed decisions to attract, develop, and retain talent",
          "This strategic approach empowers Chief People Officers to monitor, predict, and address challenges proactively, moving beyond the traditional HR model.",
        ],
      },
      {
        idBg: "https://media.geeksforgeeks.org/wp-content/uploads/20231218222854/1.png",
        bg: "#F72585",
        pattern: <Pattern color="#f7f7f7" />,
        heading: "Advantages Over Traditonal HR Practice",
        list: [
          "Shifts from subjective assessments to data- driven decision-making",
          "Promotes proactive management and personalized employee experience",
          "Establishes continuous feedback loops and a holistic view of the employee journey.",
        ],
      },
      {
        idBg: "https://media.geeksforgeeks.org/wp-content/uploads/20231218222854/1.png",
        bg: "#F72585",

        heading: "The Future of HR with Employee Lifecycle Analytics",
        list: [
          "Represents a scientific, forward- looking approach, making HR a strategic partner in organizational success.",
          "Upcoming posts will explore specific data points, metrics, and insights to optimize the employee experience.",
        ],
      },
    ],
  });

  return (
    <>
      <div
        style={{
          "--mainBg": allData.primaryColor,
          "--primaryColor": allData.primaryColor,
          "--accentColor": allData.accentColor,
          "--secondaryColor": allData.secondaryColor,
          "--headingFontFamily": allData.headingFontFamily,
          fontFamily: allData.fontFamily,
        }}
      >
        <MainComponent {...allData} />
      </div>
    </>
  );
}

export default App;
