import { auth } from "@clerk/nextjs/server";
import React from "react";


export default function docLayout({children , params:{id}} : {children : React.ReactNode ; params:{is:string}}) {
  auth().protect(); 

  return (

    <div>
      {children}
    </div>
  )
}
