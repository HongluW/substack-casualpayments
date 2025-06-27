"use client";

import { StatsTabs } from "./ui/stats-tabs";
import { TrafficStats } from "./traffic-stats";
import { useState } from "react";

const renderVisualization = (selectedTab: string) => {
  switch (selectedTab) {
    case "Traffic":
      return <TrafficStats />;
    case "Network":
      return <div className="text-xl font-semibold text-center">Network Visualization</div>;
    case "Audience":
      return <div className="text-xl font-semibold text-center">Audience Visualization</div>;
    case "Pledges":
      return <div className="text-xl font-semibold text-center">Pledges Visualization</div>;
    case "Sharing":
      return <div className="text-xl font-semibold text-center">Sharing Visualization</div>;
    case "Email":
      return <div className="text-xl font-semibold text-center">Email Visualization</div>;
    case "Surveys":
      return <div className="text-xl font-semibold text-center">Surveys Visualization</div>;
    default:
      return <div className="text-xl font-semibold text-center">Select a tab to view data</div>;
  }
};

export function StatsDashboard() {
  const [selectedTab, setSelectedTab] = useState("Traffic");

  return (
    <section className="pt-16 pb-8">
      <h1 className="mb-6 text-3xl font-bold">Stats</h1>

      {/* segmented control */}
      <div className="mb-8">
        <StatsTabs selected={selectedTab} onSelect={setSelectedTab} />
      </div>

      <div className="mt-8">
        {renderVisualization(selectedTab)}
      </div>
    </section>
  );
}
