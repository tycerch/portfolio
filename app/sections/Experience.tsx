import { TimelineList } from "../components/timeline/TimelineList";
import { TimelineItem } from "../components/timeline/TimelineItem";
import { 
  FaChartLine, 
  FaShippingFast, 
  FaBoxes
} from "react-icons/fa";

export default function Experience() {
  const timelineData = [
    {
      company: "Vernier Science Education",
      companyUrl: "https://vernier.com",
      title: "Data Analyst",
      dateTime: "Aug 2022 – Oct 2024",
      summary: "Architected comprehensive BI operations and delivered advanced analytics solutions across all business functions",
      description: [
        "Architected enterprise-wide BI infrastructure (Airbyte, BigQuery, Apache Superset) serving all business functions",
        "Built machine learning forecasting models for $50M revenue stream across 500 SKUs using Python and statistical analysis",
        "Led customer data enrichment project using ML and SQL to create detailed profiles by linking institutional records to national education database",
        "Optimized inventory analytics for 5,000 SKUs using advanced algorithms, delivering $500K in cost savings"
      ],
    },
    {
      company: "Vernier Science Education",
      companyUrl: "https://vernier.com",
      title: "Supply Chain Analyst",
      dateTime: "Dec 2018 – Jul 2022",
      summary: "Applied advanced analytics to transform supply chain operations while managing critical vendor relationships and crisis response",
      description: [
        "Prevented $80M revenue loss during global semiconductor shortage through data-driven crisis management across 10-country supplier network",
        "Automated production planning using Python algorithms for real-time prioritization, reducing backorders and lead times",
        "Implemented advanced forecasting using Meta's Prophet model to optimize inventory levels, reducing holding costs by $2M",
        "Served as Enterprise 21 ERP technical lead for supply chain modules, configurations, and custom reporting solutions"
      ],
    },
    {
      company: "Vernier Science Education",
      companyUrl: "https://vernier.com",
      title: "Supply Chain Planner",
      dateTime: "Apr 2010 – Nov 2018",
      summary: "Established foundational analytical processes while managing complex global production and vendor operations",
      description: [
        "Managed global production workflows across 20+ suppliers in 10 countries, overseeing $10M+ in annual purchase orders",
        "Established company's first formal production planning standards and analytical frameworks for scalable growth",
        "Developed vendor performance analytics and supplier scorecards enabling data-driven supplier evaluation",
        "Led Enterprise 21 ERP implementation for WMS, MRP, BOM management, and item master data integrity"
      ],
    }
  ];

  // Conditionally pick an icon based on role
  const timelineDataWithIcons = timelineData.map((item) => {
    let icon;
    switch (item.title) {
      case "Data Analyst":
        icon = <FaChartLine size={24} />;
        break;
      case "Supply Chain Analyst":
        icon = <FaChartLine size={24} />;
        break;
      case "Supply Chain Planner":
        icon = <FaBoxes size={24} />;
        break;
      default:
        icon = <FaShippingFast size={24} />;
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
