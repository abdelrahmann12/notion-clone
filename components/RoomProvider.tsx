"use client"
import { ClientSideSuspense, RoomProvider as RoomProviderWrapper } from "@liveblocks/react/suspense";    
import LoadingSpinner from "./LoadingSpinner";
export default function RoomProvider({roomId , children}:{roomId:string, children:React.ReactNode}) {
  return (
    <RoomProviderWrapper id={roomId} initialPresence={{cursor:null}} >
      <LiveCursorProvider>

      <ClientSideSuspense fallback={<LoadingSpinner></LoadingSpinner>}>
        {children}
        </ClientSideSuspense>  
      </LiveCursorProvider>
      
    </RoomProviderWrapper>
  )
}
