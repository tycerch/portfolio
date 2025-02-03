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
        "Built the company’s first data ecosystem by geocoding customer data, performing entity resolution with NCES, deduplication, and deploying a scalable BigQuery data warehouse. Deployed Apache Superset on Docker with robust ETL pipelines using Airbyte, delivering real-time dashboards across departments. Managed forecasting for a $50M revenue stream, optimizing inventory and saving an estimated $2M annually.",
    },
    {
      company: <a href="https://vernier.com">Vernier Science Education</a>,
      title: "Master Scheduler",
      dateTime: "Jan 2019 – Jun 2022",
      description:
        "Developed a Python-based forecasting system using Nixtla’s NBEATS neural networks to cover over 500 SKUs—doubling forecast scope and enhancing accuracy. Deployed a real-time production optimizer that automated scheduling across five departments, boosting on-time delivery and reducing manual workload. Optimized safety stock levels for 4,300+ SKUs via a Python/SimPy simulation and implemented an MRP-integrated push-pull system to streamline purchasing.",
    },
    {
      company: <a href="https://vernier.com">Vernier Science Education</a>,
      title: "Sr. Materials Buyer/Planner",
      dateTime: "Jan 2018 – Jan 2019",
      description:
        "Developed and deployed an Excel-based EOQ model to optimize purchasing quantities and drive cost efficiency. Oversaw comprehensive production scheduling and collaborated with key suppliers and contract manufacturers to ensure uninterrupted production and cost-effective procurement.",
    },
    {
      company: <a href="https://vernier.com">Vernier Science Education</a>,
      title: "Materials Planner I & II",
      dateTime: "Jan 2010 – Jan 2018",
      description:
        "Configured and maintained a robust MRP system for multi-warehouse operations, consignment inventory, and multi-step BOM production. Managed internal production scheduling to align with demand forecasts, ensuring efficient resource utilization and timely order fulfillment.",
    },
    {
      company: <a href="https://vernier.com">Vernier Science Education</a>,
      title: "Purchasing Assistant",
      dateTime: "Jan 2007 – Jan 2010",
      description:
        "Executed core purchasing operations and managed stockroom logistics to support production schedules. Maintained accurate inventory records and facilitated a smooth flow of materials to ensure continuous production.",
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
