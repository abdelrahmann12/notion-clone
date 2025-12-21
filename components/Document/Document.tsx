"use client"
import { FormEvent, useEffect, useState, useTransition } from "react"
import { Input } from "../ui/input"
import { Button } from "../ui/button";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { db } from "@/firebase";
import { doc, updateDoc } from "firebase/firestore";

export default function Document({id}: {id: string}) {
  const [input , setInput] = useState("");
  const [isUpdating , setTransition] = useTransition();
  const [data , loading , error] = useDocumentData(doc(db , "documents" , id)); // fetch document data by id


useEffect(() => {           
  if(data){
    setInput(data.title);
  }
}, [data]);

const UpdateTitle = (e :FormEvent) => {
   e.preventDefault();
   if(input.trim()){
    setTransition( async() => {
        await updateDoc(doc(db , "documents" , id) , {title: input});
    })};
  }

  return (
    <div>
       <div>

        <form className="flex" onSubmit={UpdateTitle}>
            <Input value={input} onChange={(e) => setInput(e.target.value)}></Input>
            <Button type="submit" disabled={isUpdating}>{isUpdating ? "Updating..." : "Update"}</Button>
            {/* update title */}
            {/* if isowner && delete document */}
        </form>
       </div>
       <div>
        {/* manage users  */}
        {/* users avatars */}
      </div>



      {/* COLLABORTIVE */}
      



     



    </div>
  )
}
