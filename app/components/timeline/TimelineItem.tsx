import React from "react";
import Link from "next/link";

interface TimelineItemProps {
  company: string;
  title: string;
  dateTime: string;
  description: string;
  badges: string[];
  icon: React.ReactNode;
}

export function TimelineItem({
  company,
  title,
  dateTime,
  description,
  badges,
  icon,
}: TimelineItemProps) {
  return (
    <div className="grid grid-cols-[3rem,1fr] gap-x-4">
      {/* Left Column: Bullet icon */}
      <div className="flex justify-center items-center">
        <div className="w-10 h-10 bg-background-light border-2 border-highlight rounded-full flex items-center justify-center">
          {icon}
        </div>
      </div>
      {/* Right Column: Timeline content */}
      <div>
        <h3 className="text-xl font-bold text-white">
          {title}{" "}
          <span className="text-highlight">
            @{" "}
            {company === "Vernier Science Education" ? (
              <Link href="https://www.vernier.com" target="_blank" rel="noopener noreferrer">
                {company}
              </Link>
            ) : (
              company
            )}
          </span>
        </h3>
        <p className="text-slate-400 text-sm">{dateTime}</p>
        <p className="mt-2 text-slate-300">{description}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {badges.map((badge, idx) => (
            <span key={idx} className="text-xs bg-slate-800 text-highlight px-2 py-1 rounded">
              {badge === "Forecastify.ai" ? (
                <Link href="https://forecastify.ai" target="_blank" rel="noopener noreferrer">
                  {badge}
                </Link>
              ) : (
                badge
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
