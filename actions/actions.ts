"use server"

import { adminDb } from "@/firebase-admin";
import { auth } from "@clerk/nextjs/server";

export async function CreateNewDocument() {
  auth.protect();

  const { sessionClaims } = await auth();

  const docCollectionRef = adminDb.collection("documents");

  const newDocRef = await docCollectionRef.add({
    title: "Untitled Document",
  });

  
  await adminDb
    .collection("users")
    .doc(sessionClaims?.email? sessionClaims.email : "")
    .collection("rooms")
    .doc(newDocRef.id)
    .set({
      userId: sessionClaims?.email,
      role: "owner",
      title: "Untitled Document",
      createdAt: new Date(),
      roomId: newDocRef.id,
    });

    return {docId: newDocRef.id};
}



