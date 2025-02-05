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
        "Transformed data operations by deploying the company’s first centralized BigQuery warehouse with robust Airbyte ETL pipelines and star schema models. Implemented Apache Superset on Docker to deliver 32 interactive dashboards from 58 SQL datasets—achieving a 90% adoption rate and saving ~$100K/year in licensing fees. Developed Python tools for geocoding 100K+ customer codes, enriching profiles by linking with NCES data, and upgraded the forecasting pipeline for a ~$50M revenue stream, while reducing inventory by ~$500K.",
    },
    {
      company: <a href="https://vernier.com">Vernier Science Education</a>,
      title: "Master Scheduler",
      dateTime: "Jan 2019 – Jun 2022",
      description:
        "Optimized forecasting for 500+ SKUs covering a $50M revenue stream using Meta’s Prophet algorithm. Brokered $6M in emergency component purchases during supply chain disruptions—averting a multi-year shutdown and saving ~$90K in fees. Developed a real-time Python production optimizer that streamlined workflows (reducing admin overhead by ~2 FTEs) and overhauled purchasing with a dynamic push-pull Excel tool, achieving a ~$2M reduction in inventory value.",
    },
    {
      company: <a href="https://vernier.com">Vernier Science Education</a>,
      title: "Sr. Materials Buyer/Planner",
      dateTime: "Jan 2007 – Jan 2019",
      description:
        "Progressed from Purchasing Assistant to Sr. Materials Buyer/Planner, configuring and maintaining MRP/ERP systems for multi-warehouse operations. Managed production scheduling and procurement for key suppliers with a $10M annual spend, ensuring seamless production and cost-effective operations.",
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
