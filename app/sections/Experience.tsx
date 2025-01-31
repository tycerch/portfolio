import { TimelineList } from "../components/timeline/TimelineList";
import { TimelineItem } from "../components/timeline/TimelineItem";
import { FaShippingFast, FaChartLine } from "react-icons/fa";

export default function Experience() {
  // Timeline data in descending order (most recent first)
  const timelineData = [
    {
      company: "PixelFin LLC",
      title: "Owner/Developer",
      dateTime: "2024 - Present",
      description:
        "Building a FastAPI & Next.js web app for small businesses to generate forecasts.",
      badges: ["PixelFin"],
    },
    {
      company: "Vernier Science Education",
      title: "Data Analyst",
      dateTime: "2022 - 2024",
      description:
        "Architected and deployed an Apache Superset BI platform with 90% adoption. Developed a data warehouse with BigQuery, integrating NCES datasets for insights.",
      badges: ["Vernier"],
    },
    {
      company: "Vernier Science Education",
      title: "Master Scheduler",
      dateTime: "2019 - 2022",
      description:
        "Deployed a Python system to forecast 500+ seasonal SKUs using neural nets. Built a real-time production optimizer in Python, improving on-time delivery.",
      badges: ["Vernier"],
    },
    {
      company: "Vernier Science Education",
      title: "Sr. Materials Buyer/Planner",
      dateTime: "2018 - 2019",
      description:
        "Developed an Excel EOQ model to optimize purchasing amounts. Oversaw key suppliers and contract manufacturers.",
      badges: ["Vernier"],
    },
    {
      company: "Vernier Science Education",
      title: "Materials Planner I & II",
      dateTime: "2010 - 2018",
      description:
        "Configured the MRP system for multi-warehouse operations. Managed internal production scheduling and supplier relationships.",
      badges: ["Vernier"],
    },
    {
      company: "Vernier Science Education",
      title: "Purchasing & Materials Assistant",
      dateTime: "2007 - 2010",
      description:
        "Managed the majority of purchasing operations for manufacturing. Oversaw stockroom operations to support production schedules.",
      badges: ["Vernier"],
    },
  ];

  // Choose an icon based on the role type.
  // Use a data/analytics icon for both the Data Analyst and PixelFin roles.
  const timelineDataWithIcons = timelineData.map((item) => {
    let icon;
    if (item.title === "Data Analyst" || item.company === "PixelFin LLC") {
      icon = <FaChartLine size={18} />;
    } else {
      icon = <FaShippingFast size={18} />;
    }
    return { ...item, icon };
  });

  return (
    <section className="container mx-auto container-padding section-padding">
      <TimelineList title="Experience">
        {timelineDataWithIcons.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </TimelineList>
    </section>
  );
}
