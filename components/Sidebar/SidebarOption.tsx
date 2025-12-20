import { db } from "@/firebase";
import { doc } from "firebase/firestore";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDocumentData } from "react-firebase-hooks/firestore";


export default function SidebarOption({href , id} : {href: string, id: string}) {
  const [data , loading , error] = useDocumentData(doc(db , "documents" , id))
  const pathName = usePathname();
  const isActive = href.includes(pathName) && pathName !== "/";
  if(!data) return null;


  return (
   <Link
    href={href} 
    className={` p-2 border block w-fit  rounded-md ${isActive ? "border-black font-bold bg-gray-300" : "border-gray-300"}`}>
    <p className="truncate">{data.title}</p>
   </Link>
  )
}
