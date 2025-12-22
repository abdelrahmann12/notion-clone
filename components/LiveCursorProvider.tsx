"use client"

import { useMyPresence, useOthers } from "@liveblocks/react/suspense";
import { PointerEvent } from "react";

export default function LiveCursorProvider({ children }: { children: React.ReactNode }) {
    const [myPresence, updateMyPresence] = useMyPresence();
    const others = useOthers();

 function handlePointerMove(e:PointerEvent<HTMLDivElement>) {
    const cursor = { x: Math.floor(e.pageX), y: Math.floor(e.pageY) };
    updateMyPresence({cursor})
 }

 function handlePointerLeave() {
    updateMyPresence({
      cursor: null
    });
 }

 
  return (
    <div>
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    </div>
  )
}
