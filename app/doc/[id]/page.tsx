"use client"
import Document from "@/components/Document/Document";
import { useParams } from "next/navigation"

export default function DocumentPage () {
  const {id} = useParams<{id: string}>();
 
  return (
    <div className="flex flex-col min-h-screen">
      <Document id={id}></Document>
      Document Page is here : {id}
    </div>
  )
}
