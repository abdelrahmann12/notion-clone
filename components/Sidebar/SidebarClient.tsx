"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Sidebar = dynamic(() => import("./Sidebar"), {
  ssr: false,
});

export default function SidebarClient() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null; 

  return <Sidebar />;
}
