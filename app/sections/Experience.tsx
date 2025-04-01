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
      title: "Data Analyst",
      dateTime: "Aug 2022 – Oct 2024",
      description: [
        "Architected & deployed company's first open-source data stack (Google BigQuery, Airbyte, Superset), saving estimated $70k+ annually",
        "Developed 22+ self-serve dashboards (SQL, Superset) for ERP analytics, driving data adoption across 7+ departments",
        "Created Python/ML customer data unification (NCES linkage) & Python inventory simulation tool (identified ~$500k potential reduction)"
      ],
    },
    {
      company: <a href="https://vernier.com">Vernier Science Education</a>,
      title: "Senior Supply Chain Analyst",
      dateTime: "Dec 2018 – Jul 2022",
      description: [
        "Developed Python forecasting models (NBEATSx) for 500+ SKUs (~$50M revenue), significantly increasing accuracy",
        "Reduced inventory value by ~30% ($4M) via ERP optimization, automated EOQ/Safety Stock models, & improved reporting",
        "Brokered $6M in emergency spot market components during disruptions, averting shutdowns & saving ~$90K",
        "Owned ERP system optimizations (MRP, BOM, WMS) & built supplier performance portal (Power BI)"
      ],
    },
    {
      company: <a href="https://vernier.com">Vernier Science Education</a>,
      title: "Senior Supply Chain Planner",
      dateTime: "Jan 2018 – Dec 2018",
      description: [
        "Performed ERP inventory & cost analysis to drive down inventory costs",
        "Negotiated with Suppliers & optimized supplier processes to reduce labor pricing",
        "Implemented enhancements to Contract Manufacturer (CM) scheduling processes via Enterprise 21 ERP database integration",
        "Developed and deployed an Excel-based stockroom-production pull list system to optimize internal material flow"
      ],
    },
    {
      company: <a href="https://vernier.com">Vernier Science Education</a>,
      title: "Supply Chain Planner",
      dateTime: "Jan 2014 – Jan 2018",
      description: [
        "Managed end-to-end manufacturing planning for 500+ SKUs, performing inventory, BOM, and cost analysis within Enterprise 21 ERP",
        "Configured ERP manufacturing modules and stocking level parameters; applied Lean Six Sigma principles (Yellow Belt certified 2015)",
        "Led cross-functional triage team to proactively identify and expedite critical material shortages"
      ],
    },
    {
      company: <a href="https://vernier.com">Vernier Science Education</a>,
      title: "Junior Supply Chain Planner",
      dateTime: "Apr 2010 – Jan 2014",
      description: [
        "Executed purchasing functions for assigned components and coordinated all daily production priorities via team standups"
      ],
    },
    {
      company: <a href="https://vernier.com">Vernier Science Education</a>,
      title: "Procurement Assistant",
      dateTime: "Jan 2007 – Apr 2010",
      description: [
        "Supported procurement activities, including purchasing, basic inventory analysis, and stockroom management, utilizing the Enterprise 21 ERP system"
      ],
    },
    {
      company: <a href="https://vernier.com">Vernier Science Education</a>,
      title: "Tradeshow Coordinator",
      dateTime: "Jul 2006 – Jan 2007",
      description: [
        "Managed inventory, materials, and shipments for company workshops and trade shows"
      ],
    },
    {
      company: "Poorman-Douglas",
      title: "Claims Analyst",
      dateTime: "Jul 2005 – Jul 2006",
      description: [
        "Analyzed claim validity and performed quality control on data entry processes for class action claims"
      ],
    },
  ];

  // Conditionally pick an icon based on role
  const timelineDataWithIcons = timelineData.map((item) => {
    let icon;
    switch (item.title) {
      case "Data Analyst":
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
