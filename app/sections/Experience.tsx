import { TimelineList } from "../components/timeline/TimelineList";
import { TimelineItem } from "../components/timeline/TimelineItem";
import { FaShippingFast, FaChartLine } from "react-icons/fa";

export default function Experience() {
  const timelineData = [
    {
      company: "PixelFin LLC",
      title: "Owner/Developer",
      dateTime: "Nov 2024 – Present",
      description:
        "Developing Forecastify.ai, a FastAPI & Next.js web application tailored for small businesses to effortlessly generate forecasts using time series foundation models.",
    },
    {
      company: <a href="https://vernier.com">Vernier Science Education</a>,
      title: "Data Analyst",
      dateTime: "Jun 2022 – Oct 2024",
      description:
        "Architected and deployed an Apache Superset BI platform with 90% adoption.  Designed Dashboards for 7 Departments. Built and trained advanced systems for entity resolution and data deduplication, and implemented a scalable data warehouse with BigQuery.",
    },
    {
      company: <a href="https://vernier.com">Vernier Science Education</a>,
      title: "Master Scheduler",
      dateTime: "Dec 2018 – Jun 2022",
      description:
        "Developed Python-based forecasting systems for 500+ SKUs using neural networks, optimized production scheduling across departments, and designed simulations to optimize safety stock levels.",
    },
    {
      company: <a href="https://vernier.com">Vernier Science Education</a>,
      title: "Sr. Materials Buyer/Planner",
      dateTime: "Jan 2018 – Jan 2019",
      description:
        "Implemented an Excel EOQ model to optimize purchasing, managed all production scheduling, and coordinated with key suppliers to ensure continuity in production.",
    },
    {
      company: <a href="https://vernier.com">Vernier Science Education</a>,
      title: "Materials Planner I & II",
      dateTime: "Jan 2010 – Jan 2018",
      description:
        "Configured the MRP system for multi-warehouse operations and managed all production scheduling, ensuring alignment with demand forecasts and efficient resource utilization.",
    },
    {
      company: <a href="https://vernier.com">Vernier Science Education</a>,
      title: "Purchasing & Materials Assistant",
      dateTime: "Jan 2007 – Jan 2010",
      description:
        "Handled the majority of purchasing operations and managed stockroom logistics to support production schedules.",
    },
  ];

  // Conditionally pick an icon based on role
  const timelineDataWithIcons = timelineData.map((item) => {
    let icon = <FaShippingFast size={24} />;
    if (item.title === "Data Analyst" || item.title === "Owner/Developer") {
      icon = <FaChartLine size={24} />;
    }
    return { ...item, icon };
  });

  return (
    <section id="experience" className="mx-auto max-w-4xl py-24 px-8">
      <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
        <span className="text-highlight mr-2">04.</span> Experience
        <div className="ml-4 flex-grow border-t border-foreground/20" />
      </h2>

      <TimelineList>
        {timelineDataWithIcons.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </TimelineList>
    </section>
  );
}
