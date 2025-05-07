import { TimelineList } from "../components/timeline/TimelineList";
import { TimelineItem } from "../components/timeline/TimelineItem";
import { 
  FaChartLine, 
  FaShippingFast, 
  FaBoxes, 
  FaClipboardList,
  FaHandshake,
  FaFileAlt
} from "react-icons/fa";

export default function Experience() {
  const timelineData = [
    {
      company: <a href="https://vernier.com">Vernier Science Education</a>,
      title: "Lead Data Analyst",
      dateTime: "Aug 2022 – Oct 2024",
      description: [
        "Sole data analyst responsible for company-wide BI and analytics operations across executive, operations, marketing, and sales functions",
        "Designed and implemented the company-wide BI stack (Airbyte, BigQuery, Superset), saving ~$70k annually",
        "Led inventory optimization initiative reducing excess inventory by $500K while increasing turnover",
        "Developed a real-time production scheduling tool in Python that integrated with the ERP system"
      ],
    },
    {
      company: <a href="https://vernier.com">Vernier Science Education</a>,
      title: "Senior Supply Chain Analyst",
      dateTime: "Dec 2018 – Jul 2022",
      description: [
        "Led end-to-end supply chain strategy and ERP optimization for $50M+ revenue operation and $10M in vendor spend",
        "Spearheaded crisis response team during global component shortage, averting $80M revenue loss",
        "Developed Python-based forecasting models (Meta Prophet) to optimize demand planning across 500+ SKUs",
        "Delivered $2M in working capital savings by improving MRP logic and purchasing parameters"
      ],
    },
    {
      company: <a href="https://vernier.com">Vernier Science Education</a>,
      title: "Senior Supply Chain Planner",
      dateTime: "Jan 2018 – Dec 2018",
      description: [
        "Led planning and operations for all manufacturing, managing $10M in annual vendor spend",
        "Spearheaded ERP/MRP module configuration and led cross-team adoption of operational workflows"
      ],
    },
    {
      company: <a href="https://vernier.com">Vernier Science Education</a>,
      title: "Supply Chain Planner",
      dateTime: "Jan 2014 – Jan 2018",
      description: [
        "Managed global production workflows, inventory planning policies, and consigned inventory programs",
        "Earned Lean Six Sigma certification and applied statistical process control methods to improve inventory accuracy"
      ],
    },
    {
      company: <a href="https://vernier.com">Vernier Science Education</a>,
      title: "Junior Supply Chain Planner",
      dateTime: "Apr 2010 – Jan 2014",
      description: [
        "Created and implemented foundational ERP processes for production and inventory planning",
        "Executed purchasing functions for assigned components and coordinated daily production priorities"
      ],
    },
    {
      company: <a href="https://vernier.com">Vernier Science Education</a>,
      title: "Procurement Assistant",
      dateTime: "Jan 2007 – Apr 2010",
      description: [
        "Supported procurement activities, including purchasing, basic inventory analysis, and stockroom management",
        "Maintained procurement records and updated ERP system data to ensure accuracy in supply planning"
      ],
    },
    {
      company: <a href="https://vernier.com">Vernier Science Education</a>,
      title: "Tradeshow Coordinator",
      dateTime: "Jul 2006 – Jan 2007",
      description: [
        "Coordinated logistics for national science education trade shows and hands-on educator workshops",
        "Managed inventory, materials, and shipments for company workshops and trade shows"
      ],
    },
    {
      company: "Poorman-Douglas",
      title: "Claims Analyst",
      dateTime: "Jul 2005 – Jul 2006",
      description: [
        "Performed quality control and data analysis for national class action lawsuits",
        "Analyzed claim validity and performed quality control on data entry processes"
      ],
    },
  ];

  // Conditionally pick an icon based on role
  const timelineDataWithIcons = timelineData.map((item) => {
    let icon;
    switch (item.title) {
      case "Lead Data Analyst":
        icon = <FaChartLine size={24} />;
        break;
      case "Senior Supply Chain Analyst":
        icon = <FaChartLine size={24} />;
        break;
      case "Senior Supply Chain Planner":
        icon = <FaBoxes size={24} />;
        break;
      case "Supply Chain Planner":
        icon = <FaBoxes size={24} />;
        break;
      case "Junior Supply Chain Planner":
        icon = <FaShippingFast size={24} />;
        break;
      case "Procurement Assistant":
        icon = <FaClipboardList size={24} />;
        break;
      case "Tradeshow Coordinator":
        icon = <FaHandshake size={24} />;
        break;
      case "Claims Analyst":
        icon = <FaFileAlt size={24} />;
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
