"use client";

import { useEffect, useState } from "react";

import { collegeStationTimezone } from "@/lib/college-station";

const formatter = new Intl.DateTimeFormat("en-US", {
  timeZone: collegeStationTimezone,
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
});

function formatNow(): string {
  return formatter.format(new Date());
}

export function FooterClock() {
  const [label, setLabel] = useState(() => formatNow());

  useEffect(() => {
    const id = window.setInterval(() => setLabel(formatNow()), 1_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className="shrink-0 tabular-nums" suppressHydrationWarning>
      {label}
    </span>
  );
}
