"use client"
import { LiveblocksProvider } from "@liveblocks/react/suspense";

export default function LiveBlocksProvider({children}: {children: React.ReactNode}) {
    if(!process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY){
        throw new Error("LIVEBLOCKS_PUBLIC_KEY is not defined");
    }
  return (
    <LiveblocksP
     authEndpoint={'/auth-endpoint'}
     throttle={16}
    >

     {children}
    </LiveblocksP    rovider>
  )
}

