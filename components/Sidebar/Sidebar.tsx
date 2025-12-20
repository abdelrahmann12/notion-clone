"use client";

import NewDocumentBtn from "../NewDocumentBtn/NewDocumentBtn";
import { Menu } from "lucide-react";
import { useCollection } from "react-firebase-hooks/firestore";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  
  collectionGroup,
  DocumentData,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/firebase";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { CollectionGroup } from "firebase-admin/firestore";
import SidebarOption from "./SidebarOption";

interface RoomDocument extends DocumentData {
  createdAt: string;
  role: "owner" | "editor";
  roomId: string;
  userId: string;
  title?: string;
}

export default function Sidebar() {
  const { user } = useUser();
  const [groupedData, setGroupedData] = useState<{
    owner: RoomDocument[];
    editor: RoomDocument[];
  }>({
    owner: [],
    editor: [],
  });

  const queryRef = user
    ? query(
        collectionGroup(db, "rooms"),
        where("userId", "==", user?.emailAddresses[0].emailAddress)
      )
    : null;

  const [data, error, loading] = useCollection(queryRef);
  console.log("Current user email:", user?.emailAddresses[0].emailAddress);
  console.log(user?.emailAddresses[0]);
  console.log(data?.docs.map((doc) => doc.data()));
  console.log("Error fetching documents:", error);

  useEffect(() => {
    if (!data) return;

    const grouped = data.docs.reduce<{
      owner: RoomDocument[];
      editor: RoomDocument[];
    }>(
      (acc, curr) => {
        const roomData = curr.data() as RoomDocument;

        if (roomData.role === "owner") {
          acc.owner.push({
            id: curr.id,
            ...roomData,
          });
        } else {
          acc.editor.push({
            id: curr.id,
            ...roomData,
          });
        }

        return acc;
      },
      {
        owner: [],
        editor: [],
      }
    );
    setGroupedData(grouped);
  }, [data]);

  const menuOptions = (
    <>
      <NewDocumentBtn />
      <div className=" flex flex-col space-y-4  py-4 md:max-w-36">

      {/* my Documents */}
      {groupedData.owner.length === 0 ? (
        <h2 className="text-gray-500 font-semibold text-sm">
          No documents found
        </h2>
      ) : (
        <div>
          <h2 className="font-semibold text-lg mb-2">My Documents</h2>
          {groupedData.owner.map((doc) => (
            <SidebarOption key={doc.id} id={doc.id} href={`/doc/${doc.id}`}></SidebarOption>
          ))}
        </div>
      )}
      </div>

      {/* shared with me */}
      {groupedData.editor.length > 0 && (
        <>
        <h2 className="font-semibold text-lg mb-2">Shared with me</h2>
        {groupedData.editor.map((doc) => (
          <SidebarOption key={doc.id} id={doc.id} href={`/doc/${doc.id}`}></SidebarOption>
        ))}
        </>
      )}
    </>
  );

  return (
    <div className=" flex flex-col relative bg-gray-200 p-2">
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu></Menu>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle className="text-center">Menu</SheetTitle>

              <div>{menuOptions}</div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className=" hidden md:inline">{menuOptions}</div>
    </div>
  );
}
