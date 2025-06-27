import React, { useRef, useLayoutEffect, useState } from "react";
import styles from "./stats-tabs.module.css";

const tabs = [
  "Network",
  "Audience",
  "Pledges",
  "Sharing",
  "Traffic",
  "Email",
  "Surveys",
];

export interface StatsTabsProps {
  selected: string;
  onSelect: (tab: string) => void;
}

export function StatsTabs({ selected, onSelect }: StatsTabsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [bgStyle, setBgStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useLayoutEffect(() => {
    const idx = tabs.indexOf(selected);
    const node = tabRefs.current[idx];
    const containerNode = containerRef.current;
    if (node && containerNode) {
      const nodeRect = node.getBoundingClientRect();
      const containerRect = containerNode.getBoundingClientRect();
      setBgStyle({
        left: nodeRect.left - containerRect.left,
        width: nodeRect.width,
      });
    }
  }, [selected]);

  return (
    <div className={styles.container} ref={containerRef}>
      <div
        className={styles.animatedBg}
        style={{ left: bgStyle.left, width: bgStyle.width }}
      />
      {tabs.map((tab, i) => (
        <button
          key={tab}
          ref={el => (tabRefs.current[i] = el)}
          className={
            styles.tab + (selected === tab ? ` ${styles.selected}` : "")
          }
          onClick={() => onSelect(tab)}
          type="button"
        >
          {tab}
        </button>
      ))}
    </div>
  );
} 